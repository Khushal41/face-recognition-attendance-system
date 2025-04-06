const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const registerRoutes = require('./routes/register');
const recognizeRoutes = require('./routes/recognize');
require('dotenv').config();

const faceapi = require('face-api.js');
const canvas = require('canvas');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const MODEL_PATH = path.join(__dirname, 'models');

// Patch node environment for face-api.js (IMPORTANT for Node.js to use canvas)
const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const startServer = async () => {
    try {
        // Load face-api.js models from disk
        await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_PATH);
        await faceapi.nets.faceRecognitionNet.loadFromDisk(MODEL_PATH);
        await faceapi.nets.faceLandmark68Net.loadFromDisk(MODEL_PATH);
        console.log('✅ Face-api.js models loaded successfully');

        // Middleware
        app.use(bodyParser.json({ limit: '10mb' }));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(multer().single('image')); // For image uploads

        // Routes
        app.use('/api/register', registerRoutes);
        app.use('/api/recognize', recognizeRoutes);

        // Default route (optional)
        app.get('/', (req, res) => {
            res.send('🎉 Face Recognition Attendance Backend Running');
        });

        // Start the server
        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error loading face-api.js models:', error);
    }
};

startServer();
