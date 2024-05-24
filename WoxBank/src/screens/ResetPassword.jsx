// src/components/ResetPassword.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate('/OTPPage');
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-green-500 mb-4">Reset Password</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
          />
        </div>
        <button
          onClick={handleResetPassword}
          className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
