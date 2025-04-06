class RegisterController {
    constructor(faceRecognitionService) {
        this.faceRecognitionService = faceRecognitionService;
    }

    async registerUser(req, res) {
        try {
            const { name, email, aadhaar } = req.body;
            const faceImage = req.file;

            if (!name || !email || !aadhaar || !faceImage) {
                return res.status(400).json({ message: 'All fields are required.' });
            }

            const embeddings = await this.faceRecognitionService.processImage(faceImage.path);
            await this.faceRecognitionService.saveUserEmbedding({ name, email, aadhaar, embeddings });

            res.status(201).json({ message: 'User registered successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred during registration.' });
        }
    }
}

// export default RegisterController;
module.exports = RegisterController;