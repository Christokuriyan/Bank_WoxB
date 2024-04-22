// src/components/OtpInput.jsx
import React, { useState, useRef, useEffect } from 'react';

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;  // Ensures only numbers
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

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
    <div className="flex justify-center space-x-7 ">
      {otp.map((data, index) => {
        return (
          <input
          className="form-control text-center w-12 h-12 text-xl border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 "

            type="text"
            name="otp"
            maxLength="1"
            key={index}
            value={data}
            onChange={e => handleChange(e.target, index)}
            onFocus={e => e.target.select()}
            onKeyDown={e => e.key === "Backspace" && handleBackspace(e.target, index)}
            ref={ref => inputsRef.current[index] = ref}
            autoComplete="off"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
