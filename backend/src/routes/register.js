const express = require('express');
const multer = require('multer');
 // Adjust the path as needed
const RegisterController = require("../controllers/registerController");
const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Specify the directory for uploaded images

const registerController = new RegisterController();

router.post('/', upload.single('faceImage'), (req, res) => {
    const { name, email, aadhaar } = req.body;
    const faceImage = req.file;

    registerController.registerUser(name, email, aadhaar, faceImage)
        .then(result => res.status(201).json(result))
        .catch(error => res.status(400).json({ error: error.message }));
});

module.exports = router;