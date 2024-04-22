


import React, { useState, useEffect } from 'react';
import OtpInput from './OtpInput';  // Assuming the file path is correct

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // Time in seconds for countdown

  useEffect(() => {
    // Update the timer every second
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`OTP Entered: ${otp}`);
    // Here you can also handle the verification logic or call an API to verify the OTP
  };

  return (
   
      <div className="bg-[#FFFFFF] p-12 rounded-lg shadow-2xl max-w-lg"> 
        <h2 className="text-2xl font-bold text-left text-[#33B786] mb-6">Email Verification</h2>  
        <p className="text-sm text-gray-600 mb-8">A 6-digit code has been sent to your email us****me@gmail.com.</p>
  
        <form onSubmit={handleSubmit}>
         
          <OtpInput otp={otp} setOtp={setOtp} />
          <div className="mb-6 text-sm font-medium">  
             {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2) } remaining
          </div>
          <button 
            type="submit" 
            className="w-full text-white bg-[#33B786] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-6 py-3 text-center">  
            Verify Email
          </button>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
        already have an account?{" "}
          <a href="#" className="font-medium text-[#33B786] hover:text-[#33B786]">
            Resend
          </a>
        </p>
      </div>
    
  );
};

export default Otp;

