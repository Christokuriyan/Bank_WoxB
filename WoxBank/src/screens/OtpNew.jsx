

// import React, { useState, useEffect } from 'react';
// import Button from "../components/Button"; 
// import OtpInput from './../components/OtpInput'; 

// const OtpNew = () => {
//   const [otp, setOtp] = useState('');
//   const [timeLeft, setTimeLeft] = useState(300);
//   const [showModal, setShowModal] = useState(false); 

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setShowModal(true);
//     console.log("Handling OTP submission..."); 
//   };

//   return (
//     <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
//       <div className="relative flex-1">
//         <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
//         <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
//           <div className="mb-4">
//             <p className="text-sm font-semibold text-[#33B786]">Wox Bank</p>
//           </div>
//           <h1 className="text-4xl font-bold mb-4">Experience<br/>hassle-free banking</h1>
//           <p className="text-lg font-sans text-left mb-4">
//             Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank.
//           </p>
//           <div className="flex mt-4">
//             <a href="#" className="mr-2"><img src="../public/assets/icons/facebook 2.svg" alt="Facebook" className="w-6 h-6" /></a>
//             <a href="#" className="mr-2"><img src="../public/assets/icons/instagram 2.svg" alt="Instagram" className="w-6 h-6" /></a>
//             <a href="#" className="mr-2"><img src="../public/assets/icons/twitter 2.svg" alt="Twitter" className="w-6 h-6" /></a>
//           </div>
//         </div>
//       </div>
//       <div className="relative flex-1">
//         <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10 hidden md:block" />
//         <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-lg w-full space-y-8" style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}> 
//             <div className="relative rounded-lg bg-white p-12"> 
//               <h2 className="text-3xl font-bold text-[#33B786] mb-6">Email Verification</h2>
//               <p className="text-xs text-gray-500 mb-4">
//                 A 6-digit code has been sent to your email us****me@gmail.com. <a href="#" style={{ color: '#33B786', cursor: 'pointer' }}>Change</a>
//               </p>
//               <form onSubmit={handleSubmit}>
//                 <OtpInput otp={otp} setOtp={setOtp} />
//                 <div className="mb-6 text-sm font-medium" style={{ color: '#33B786' }}> 
//                   {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)} remaining
//                 </div>
//                 <Button>Verify Email</Button>
//                 <p className="mt-4 text-gray-500">
//                   Didn’t receive the code? <a href="#" style={{ color: '#33B786' }}>Resend</a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Success Modal */}
//       {showModal && (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white p-12 rounded-lg shadow-lg w-1/3">  {/* Increased padding and set width */}
//             <h2 className="text-xl font-bold text-[#33B786] mb-8">Your account has been created Successfully!</h2> {/* Added margin-bottom */}
//             <Button onClick={() => setShowModal(false)}>Go to Dashboard</Button>
//         </div>
//     </div>
// )}

//     </div>
//   );
// }

// export default OtpNew;
import React, { useState, useEffect } from 'react';
import Button from "../components/Button"; 
import OtpInput from './../components/OtpInput'; 
import { useNavigate } from 'react-router-dom';

const OtpNew = () => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(300);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // This will be used for navigation

  useEffect(() => {
    let interval = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true); // Show modal on OTP submission
    console.log("Handling OTP submission...");
  };
  const sample = () => {
    console.log("Go to Dashboard button clicked."); 

  };

  return (
    <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
      <div className="relative flex-1">
        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
          <div className="mb-4">
            <p className="text-sm font-semibold text-[#33B786]">Wox Bank</p>
          </div>
          <h1 className="text-4xl font-bold mb-4">Experience<br/>hassle-free banking</h1>
          <p className="text-lg font-sans text-left mb-4">
            Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank.
          </p>
          <div className="flex mt-4">
            <a href="#" className="mr-2"><img src="../public/assets/icons/facebook 2.svg" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="mr-2"><img src="../public/assets/icons/instagram 2.svg" alt="Instagram" className="w-6 h-6" /></a>
            <a href="#" className="mr-2"><img src="../public/assets/icons/twitter 2.svg" alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10 hidden md:block" />
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg w-full space-y-8" style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}> 
            <div className="relative rounded-lg bg-white p-12"> 
              <h2 className="text-3xl font-bold text-[#33B786] mb-6">Email Verification</h2>
              <p className="text-xs text-gray-500 mb-4">
                A 6-digit code has been sent to your email us****me@gmail.com. <a href="#" style={{ color: '#33B786', cursor: 'pointer' }}>Change</a>
              </p>
              <form onSubmit={handleSubmit}>
                <OtpInput otp={otp} setOtp={setOtp} />
                <div className="mb-6 text-sm font-medium" style={{ color: '#33B786' }}> 
                  {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)} remaining
                </div>
                <Button>Verify Email</Button>
                <p className="mt-4 text-gray-500">
                  Didn’t receive the code? <a href="#" style={{ color: '#33B786' }}>Resend</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-12 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold text-[#33B786] mb-8">Your account has been created Successfully!</h2>
            {/* <Button onClick={()=>sample}>Go to Dashboard</Button> */}
            {/* <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button> */}
            <div className="flex items-center justify-center ">
  <button
    onClick={() => navigate("/dashboard")}
    className="bg-[#33B786] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#33B786]"
  >
    Go to Dashboard
  </button>
</div>


          </div>
        </div>
      )}
    </div>
  );
}

export default OtpNew;
