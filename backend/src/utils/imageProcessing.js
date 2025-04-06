const { createCanvas, loadImage } = require('canvas');
const faceapi = require('face-api.js');
const fs = require('fs');
const path = require('path');

const MODEL_URL = path.join(__dirname, '../../models');

async function loadModels() {
    await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_URL);
}

async function processImage(imagePath) {
    const img = await loadImage(imagePath);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const detections = await faceapi.detectAllFaces(canvas)
        .withFaceLandmarks()
        .withFaceDescriptors();
    return detections;
}

function saveImage(imageBuffer, outputPath) {
    fs.writeFileSync(outputPath, imageBuffer);
}

function loadImageBuffer(imagePath) {
    return fs.readFileSync(imagePath);
}

module.exports = {
    loadModels,
    processImage,
    saveImage,
    loadImageBuffer
};