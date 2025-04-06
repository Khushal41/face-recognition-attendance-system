# Face Recognition Attendance System - Backend

## Overview
This project implements a web-based Face Recognition Attendance System using Node.js and React.js. The backend is built with Express.js and utilizes face-api.js for AI-based face detection and recognition.

## Features
- User registration with name, email, Aadhaar number, and face image.
- Face recognition for attendance tracking using webcam images.
- Efficient storage and retrieval of face embeddings in JSON format.

## Technologies Used
- Node.js
- Express.js
- face-api.js
- @tensorflow/tfjs-node
- canvas
- Multer
- JSON for data storage

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- MongoDB (if you choose to use a database for user data).

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-repo/face-recognition-attendance-system.git
   ```
2. Navigate to the backend directory:
   ```
   cd face-recognition-attendance-system/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env` file in the backend directory and add your environment variables as needed.

### Running the Application
1. Start the server:
   ```
   npm start
   ```
2. The API will be available at `http://localhost:3000/api`.

## API Endpoints

### Register User
- **Endpoint:** `/api/register`
- **Method:** POST
- **Description:** Registers a new user with their details and face image.

### Recognize User
- **Endpoint:** `/api/recognize`
- **Method:** POST
- **Description:** Recognizes a user based on the submitted face image.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.