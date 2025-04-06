# Face Recognition Attendance System

## Overview
The Face Recognition Attendance System is a web-based application that utilizes AI-based face detection and recognition to manage attendance. The system consists of a backend microservice built with Node.js and Express.js, and a frontend application developed using React.js and TailwindCSS.

## Features
- User registration with name, email, Aadhaar number, and face image.
- Attendance tracking using face recognition via webcam.
- Efficient storage and retrieval of face embeddings in JSON format.
- Responsive and user-friendly interface.

## Technologies Used
- **Backend:**
  - Node.js
  - Express.js
  - face-api.js
  - @tensorflow/tfjs-node
  - canvas
  - Multer
- **Frontend:**
  - React.js
  - TailwindCSS

## Project Structure
```
face-recognition-attendance-system
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── routes
│   │   │   ├── register.js
│   │   │   └── recognize.js
│   │   ├── controllers
│   │   │   ├── registerController.js
│   │   │   └── recognizeController.js
│   │   ├── services
│   │   │   └── faceRecognitionService.js
│   │   ├── models
│   │   │   └── userEmbeddings.json
│   │   └── utils
│   │       └── imageProcessing.js
│   ├── package.json
│   ├── .env
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── RegistrationForm.jsx
│   │   │   └── AttendancePage.jsx
│   │   ├── pages
│   │   │   ├── Register.jsx
│   │   │   └── Recognize.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles
│   │       └── tailwind.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
├── README.md
└── .gitignore
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file and configure necessary environment variables.
4. Start the server:
   ```
   node src/app.js
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints
- **POST /api/register**: Register a new user with their details and face image.
- **POST /api/recognize**: Recognize a user based on the submitted face image.

## Security Considerations
Ensure that sensitive information such as Aadhaar numbers and personal data are handled securely and comply with relevant data protection regulations.

## Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.