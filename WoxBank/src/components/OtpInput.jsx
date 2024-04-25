import React, { useRef } from 'react';

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

  const handleBackspace = (element, index) => {
    if (index > 0 && !element.value) {
      const prevSibling = element.previousSibling;
      if (prevSibling) {
        prevSibling.focus();
      }
    }
  };

  return (
    <div className="flex justify-center space-x-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          className="form-control text-center w-14 h-14 text-2xl border border-gray-300 rounded focus:ring-[#33B786] focus:border-[#33B786]"
          type="text"
          name="otp"
          maxLength="1"
          key={index}
          value={otp[index] || ''}
          onChange={e => handleChange(e.target, index)}
          onFocus={e => e.target.select()}
          onKeyDown={e => e.key === "Backspace" && handleBackspace(e.target, index)}
          ref={ref => inputsRef.current[index] = ref}
          autoComplete="off"
        />
      ))}
    </div>
  );
};

export default OtpInput;
