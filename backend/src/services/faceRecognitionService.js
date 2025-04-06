class FaceRecognitionService {
    constructor() {
        this.embeddings = this.loadEmbeddings();
    }

    loadEmbeddings() {
        const fs = require('fs');
        const path = require('path');
        const embeddingsPath = path.join(__dirname, '../models/userEmbeddings.json');
        if (fs.existsSync(embeddingsPath)) {
            const data = fs.readFileSync(embeddingsPath);
            return JSON.parse(data);
        }
        return {};
    }

    saveEmbeddings() {
        const fs = require('fs');
        const path = require('path');
        const embeddingsPath = path.join(__dirname, '../models/userEmbeddings.json');
        fs.writeFileSync(embeddingsPath, JSON.stringify(this.embeddings, null, 2));
    }

    async registerUser(name, email, aadhaar, faceImage) {
        const faceapi = require('face-api.js');
        const canvas = require('canvas');
        const { Canvas, Image, ImageData } = canvas;
        faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

        const img = await canvas.loadImage(faceImage);
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

        if (!detections) {
            throw new Error('No face detected in the image.');
        }

        const faceDescriptor = detections.descriptor;
        const userId = email; // Use email as a unique identifier
        this.embeddings[userId] = {
            name,
            aadhaar,
            descriptor: Array.from(faceDescriptor)
        };

        this.saveEmbeddings();
        return { message: 'User registered successfully.' };
    }

    async recognizeUser(faceImage) {
        const faceapi = require('face-api.js');
        const canvas = require('canvas');
        const { Canvas, Image, ImageData } = canvas;
        faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

        const img = await canvas.loadImage(faceImage);
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

        if (!detections) {
            throw new Error('No face detected in the image.');
        }

        const faceDescriptor = detections.descriptor;
        let bestMatch = { userId: null, distance: Infinity };

        for (const [userId, userData] of Object.entries(this.embeddings)) {
            const distance = faceapi.euclideanDistance(faceDescriptor, userData.descriptor);
            if (distance < bestMatch.distance) {
                bestMatch = { userId, distance };
            }
        }

        if (bestMatch.distance < 0.6) { // Threshold for recognition
            return { userId: bestMatch.userId, name: this.embeddings[bestMatch.userId].name };
        } else {
            return { message: 'No match found.' };
        }
    }
}

module.exports = FaceRecognitionService;