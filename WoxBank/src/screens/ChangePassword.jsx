import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = (event) => {
    event.preventDefault();
    if (newPassword === retypePassword) {
      // Perform password change logic here
      console.log('Password changed successfully');
      navigate('/SuccessMessage', { 
        state: {
            display:false,
          message: 'Your password has been changed!'
        }
      });
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-green-500 mb-4">Enter new Password</h2>
        <form onSubmit={handleChangePassword}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter your Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="retypePassword" className="block text-gray-700 mb-2">Retype Password</label>
            <input
              type="password"
              id="retypePassword"
              placeholder="Retype your Password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
