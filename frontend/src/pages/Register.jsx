import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <RegistrationForm />
            </div>
        </div>
    );
};

export default Register;