import React, { useState, useEffect, useRef } from 'react';


const Button = ({ children, onClick }) => (
  <button className="bg-[#33B786] text-white px-4 py-2 rounded-md hover:bg-[#2a9d70]" onClick={onClick}>
    {children}
  </button>
);

const OtpInput = ({ otp, setOtp }) => {
  const inputsRef = useRef([]);

  
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;  
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp.join(""));  

   
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          className="form-control text-center w-12 h-12 text-xl border border-gray-300 rounded focus:ring-[#33B786] focus:border-[#33B786]"
          type="text"
          name="otp"
          maxLength="1"
          key={index}
          value={otp[index] || ''}
          onChange={e => handleChange(e.target, index)}
          onFocus={e => e.target.select()}
          autoComplete="off"
        />
      ))}
    </div>
  );
};

const OtpNew = () => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); 

  useEffect(() => {
   
    if (timeLeft > 0) {
      setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
  }, [timeLeft]);

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
      <div className="min-h-screen flex flex-col justify-center align-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#33B786] mb-6">OTP Verification</h1>
          <p className="text-lg mb-4">A 6-digit code has been sent to your email us****me@gmail.com. <a href="#" style={{ color: '#33B786', cursor: 'pointer' }}>Change</a></p>
          <form onSubmit={handleSubmit}>
            <OtpInput otp={otp} setOtp={setOtp} />
            <p className="text-sm">
              {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)} remaining
            </p>
            <Button>Verify OTP</Button>
            <p className="mt-4">
              Didn’t receive the code? <a href="#" style={{ color: '#33B786' }}>Resend</a>
            </p>
            <p className="text-gray-600 mt-2">Already have an account? <a href="#" style={{ color: '#33B786', textDecoration: 'underline' }}>Log in</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpNew;
