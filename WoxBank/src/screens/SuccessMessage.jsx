import React from 'react';
import successGif from 'C:/Users/chris/OneDrive/Documents/Bank_WoxB/WoxBank/public/assets/icons/successgif.gif'; // Update the path to your GIF

function SuccessMessage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <img src={successGif} alt="Success" className="mx-auto mb-4 w-20 h-20" />
        <p className="text-green-600 text-2xl font-semibold mb-4">₦ 100,000</p>
        <p className="text-gray-700 mb-6">has been sent to your Bank Account!</p>
        <button 
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          onClick={() => window.history.back()} // You can replace this with your desired back action
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default SuccessMessage;
