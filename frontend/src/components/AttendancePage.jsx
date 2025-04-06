import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const AttendancePage = () => {
    const videoRef = useRef(null);
    const [recognitionResult, setRecognitionResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const startVideo = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        };

        startVideo();

        return () => {
            if (videoRef.current) {
                const stream = videoRef.current.srcObject;
                if (stream) {
                    const tracks = stream.getTracks();
                    tracks.forEach(track => track.stop());
                }
            }
        };
    }, []);

    const captureImage = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        return canvas.toDataURL('image/jpeg');
    };

    const handleAttendance = async () => {
        const imageData = captureImage();
        try {
            const response = await axios.post('/api/recognize', { image: imageData });
            setRecognitionResult(response.data);
        } catch (err) {
            setError('Recognition failed. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Attendance Page</h1>
            <video ref={videoRef} autoPlay className="border-2 border-gray-300 mb-4" />
            <button onClick={handleAttendance} className="bg-blue-500 text-white px-4 py-2 rounded">
                Capture Attendance
            </button>
            {recognitionResult && (
                <div className="mt-4">
                    <h2 className="text-xl">Recognition Result:</h2>
                    <p>{recognitionResult.name} - {recognitionResult.email}</p>
                </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default AttendancePage;