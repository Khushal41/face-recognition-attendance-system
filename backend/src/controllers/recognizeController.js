class RecognizeController {
    constructor(faceRecognitionService) {
        this.faceRecognitionService = faceRecognitionService;
    }

    async recognizeUser(req, res) {
        try {
            const { image } = req.body; // Assuming the image is sent as a base64 string
            if (!image) {
                return res.status(400).json({ message: 'No image provided' });
            }

            const recognitionResult = await this.faceRecognitionService.recognizeFace(image);
            if (recognitionResult) {
                return res.status(200).json({ message: 'User recognized', user: recognitionResult });
            } else {
                return res.status(404).json({ message: 'User not recognized' });
            }
        } catch (error) {
            console.error('Error recognizing user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = RecognizeController;
