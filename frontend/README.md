# Frontend Face Recognition Attendance System

This project is a web-based Face Recognition Attendance System that utilizes a Node.js backend with Express.js and a React.js frontend styled with TailwindCSS. The system allows users to register with their details and a face image, and it can recognize users for attendance using webcam input.

## Features

- User registration with name, email, Aadhaar number, and face image.
- Webcam-based attendance recognition.
- AI-based face detection and recognition using face-api.js.
- Responsive UI designed with TailwindCSS.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd face-recognition-attendance-system
   ```

2. Navigate to the frontend directory:

   ```
   cd frontend
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

### Running the Application

1. Start the frontend application:

   ```
   npm start
   ```

2. The application will be available at `http://localhost:3000`.

### Usage

- **Registration**: Navigate to the registration page to create a new user by filling out the form and uploading a clear face image.
- **Attendance**: Go to the attendance page to capture an image using your webcam and check recognition results.

## Folder Structure

- `public/`: Contains the main HTML file.
- `src/`: Contains all React components, pages, and styles.
- `components/`: Reusable components like `RegistrationForm` and `AttendancePage`.
- `pages/`: Contains the main pages for registration and attendance.
- `styles/`: Contains TailwindCSS styles.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.