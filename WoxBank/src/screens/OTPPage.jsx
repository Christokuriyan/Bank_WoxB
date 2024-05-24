import React, { useState, useEffect } from 'react';
import Button from "../components/Button"; 
import OtpInput from './../components/OtpInput'; 
import { useNavigate } from 'react-router-dom';

const OTPPage = () => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    let interval = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to verify OTP here
    console.log("Handling OTP submission...");
    navigate('/ChangePassword');
  };

  return (
    <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
      <div className="relative flex-1">
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg w-full space-y-8" style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}> 
            <div className="relative rounded-lg bg-white p-12"> 
              <h2 className="text-3xl font-bold text-[#33B786] mb-6">Enter OTP</h2>
              <p className="text-xs text-gray-500 mb-4">
                A 6-digit code has been sent to your email us****me@gmail.com. <a href="#" style={{ color: '#33B786', cursor: 'pointer' }}>Change</a>
              </p>
              <form onSubmit={handleSubmit}>
                <OtpInput otp={otp} setOtp={setOtp} />
                <div className="mb-6 text-sm font-medium" style={{ color: '#33B786' }}> 
                  {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)} remaining
                </div>
                <Button>Confirm</Button>
                <p className="mt-4 text-gray-500">
                  Didn’t receive the code? <a href="#" style={{ color: '#33B786' }}>Resend</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPPage;
