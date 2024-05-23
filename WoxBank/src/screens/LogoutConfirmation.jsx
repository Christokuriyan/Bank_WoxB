import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutConfirmation = ({ onLogout, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-800 text-lg mb-6">Are you sure you want to Logout?</p>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onLogout}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
    navigate('/register'); // Navigate to the register page after logging out
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div>
      <LogoutConfirmation onLogout={handleLogout} onCancel={handleCancel} />
    </div>
  );
};

export default Logout;
