// import React, { useState, useEffect } from 'react';
// import OtpInput from './OtpInput';  // Assuming the file path is correct

// const Otp = () => {
//   const [otp, setOtp] = useState('');
//   const [timeLeft, setTimeLeft] = useState(300); // Time in seconds for countdown

//   useEffect(() => {
//     // Update the timer every second
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeLeft]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`OTP Entered: ${otp}`);
//     // Here you can also handle the verification logic or call an API to verify the OTP
//   };

//   return (
    
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
//         <h2 className="text-xl font-bold text-left text-[#33B786] mb-4">Email Verification</h2>
//         <p className="text-sm text-gray-600 mb-6">A 6-digit code has been sent to your email us****me@gmail.com.</p>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900">Enter your OTP</label>
//           {/* Replacing single input field with OtpInput for separate digit inputs */}
//           <OtpInput otp={otp} setOtp={setOtp} />
//           <div className="mb-4 text-sm font-medium">
//             Time remaining: {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)}
//           </div>
//           <button 
//             type="submit" 
//             className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
//             Verify Email
//           </button>
//         </form>
//       </div>
    
//   );
// };

// export default Otp;


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

