


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
   
//       <div className="bg-[#FFFFFF] p-12 rounded-lg shadow-2xl max-w-lg"> 
//         <h2 className="text-2xl font-bold text-left text-[#33B786] mb-6">Email Verification</h2>  
//         <p className="text-sm text-gray-600 mb-8">A 6-digit code has been sent to your email us****me@gmail.com.</p>
  
//         <form onSubmit={handleSubmit}>
         
//           <OtpInput otp={otp} setOtp={setOtp} />
//           <div className="mb-6 text-sm font-medium">  
//              {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2) } remaining
//           </div>
//           <button 
//             type="submit" 
//             className="w-full text-white bg-[#33B786] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-6 py-3 text-center">  
//             Verify Email
//           </button>
//         </form>
//         <p className="mt-2 text-center text-sm text-gray-600">
//         already have an account?{" "}
//           <a href="#" className="font-medium text-[#33B786] hover:text-[#33B786]">
//             Resend
//           </a>
//         </p>
//       </div>
    
//   );
// };

// export default Otp;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import OtpInput from './OtpInput';  // Assuming the file path is correct
// import '../../src/';  // Adjust the path as necessary


// const Otp = () => {
//   const [otp, setOtp] = useState('');
//   const [timeLeft, setTimeLeft] = useState(300); // Time in seconds for countdown
//   const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Update the timer every second
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeLeft]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setShowPopup(true); // Show popup on form submission
//     // alert(`OTP Entered: ${otp}`); // Alert commented out, replace with popup logic
//     // Here you can also handle the verification logic or call an API to verify the OTP
//   };

//   const handleGoToDashboard = () => {
//     navigate('/dashboard'); // Navigate to the dashboard
//   };

//   return (
//     <div className="bg-[#FFFFFF] p-12 rounded-lg shadow-2xl max-w-lg">
//       <h2 className="text-2xl font-bold text-left text-[#33B786] mb-6">Email Verification</h2>
//       <p className="text-sm text-gray-600 mb-8">A 6-digit code has been sent to your email us****me@gmail.com.</p>

//       <form onSubmit={handleSubmit}>
//         <OtpInput otp={otp} setOtp={setOtp} />
//         <div className="mb-6 text-sm font-medium">
//           {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)} remaining
//         </div>
//         <button
//           type="submit"
//           className="w-full text-white bg-[#33B786] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-6 py-3 text-center">
//           Verify Email
//         </button>
//       </form>
//       <p className="mt-2 text-center text-sm text-gray-600">
//         Didn’t receive the code?{" "}
//         <a href="#" className="font-medium text-[#33B786] hover:text-[#33B786]">
//           Resend
//         </a>
//       </p>

//       {/* Popup for successful verification */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg text-center">
//             <h2 className="text-lg font-bold mb-4">Verification Successful!</h2>
//             <p>You have successfully verified your email.</p>
//             <button onClick={handleGoToDashboard} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
//               Go to Dashboard
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Otp;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OtpInput from './OtpInput'; // Assuming the file path is correct

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // Time in seconds for countdown
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const navigate = useNavigate();
  const correctOtp = "123456"; // Example correct OTP for demonstration

  useEffect(() => {
    // Update the timer every second
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp === correctOtp) {
      setShowPopup(true); // Show popup if OTP is correct
    } else {
      alert("Incorrect OTP. Please try again."); // Notify user of incorrect OTP
    }
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard'); // Navigate to the dashboard
  };

  return (
    <div className="bg-[#FFFFFF] p-12 rounded-lg shadow-2xl max-w-lg">
      <h2 className="text-2xl font-bold text-left text-[#33B786] mb-6">Email Verification</h2>
      <p className="text-sm text-gray-600 mb-8">A 6-digit code has been sent to your email us****me@gmail.com.</p>

      <form onSubmit={handleSubmit}>
        <OtpInput otp={otp} setOtp={setOtp} />
        <div className="mb-6 text-sm font-medium">
          {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)} remaining
        </div>
        <button
          type="submit"
          className="w-full text-white bg-[#33B786] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-6 py-3 text-center">
          Verify Email
        </button>
      </form>
      <p className="mt-2 text-center text-sm text-gray-600">
        Didn’t receive the code?{" "}
        <a href="#" className="font-medium text-[#33B786] hover:text-[#33B786]">
          Resend
        </a>
      </p>

      {/* Popup for successful verification */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-lg font-bold mb-4">Verification Successful!</h2>
            <p>You have successfully verified your email.</p>
            <button onClick={handleGoToDashboard} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Otp;
