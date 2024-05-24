import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import successGif from 'C:/Users/chris/OneDrive/Documents/Bank_WoxB/WoxBank/public/assets/icons/successgif.gif'; // Update the path to your GIF

const SuccessMessage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, message, display } = location.state || { amount: '', message: '', display: '' };

  const handleGoBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <img src={successGif} alt="Success" className="mx-auto mb-4 w-20 h-20" />
        <p className="text-gray-700 mb-6">
          {display == '' ? null : <span className="text-green-600 font-bold">₦10000{amount}</span>} {message}
        </p>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
