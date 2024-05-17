
// import Button from '../components/Button';  


// const LoginNew = ({ heading, desc }) => {
  
//   const handleLogin = () => {
//     alert('Login successful!');  
//   };

//   return (
//     <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
      
//       <div className="relative flex-1">
        
//         <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        
//         <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
          
//           <div className="mb-4">
//             <p className="text-sm font-semibold text-[#33B786]">Wox Bank</p>
//           </div>
          
          
//           <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          
//           <p className="text-lg font-sans text-left mb-4">
//             {desc}
//             Enter Your Details to login to your Banking Dashboard again!
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
//           <div className="max-w-md w-full space-y-8" style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}>
//             <div className="relative rounded-lg bg-white p-8">
//               <h2 className="mt-6 text-left text-2xl font-bold text-[#33B786]">Login</h2>
//               <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-700">Email</h3>
//                   <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] sm:text-sm mb-4" placeholder="Your email" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-700">Password</h3>
//                   <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] sm:text-sm mb-4" placeholder="Your password" />
//                 </div>
//                 <Button>Login</Button>
//               </form>
//               <p className="mt-2 text-center text-sm text-gray-600">
//                 Don’t Have an Account?{" "}
//                 <a className="font-medium text-[#33B786] hover:text-[#33B786]" style={{ cursor: 'pointer' }}>
//                   Register
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginNew;
// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import the navigation hook
// import Button from '../components/Button';

// const LoginNew = ({ heading = "Welcome Back", desc = "Enter Your Details to login to your Banking Dashboard again!" }) => {
//   const navigate = useNavigate(); // Hook for navigation

//   const handleLogin = () => {
    
//     navigate('/Otp'); // Redirect to dashboard after login
//   };

//   const handleRegisterRedirect = () => {
//     navigate('/register'); // Redirect to registration page
//   };

//   return (
//     <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
//       <div className="relative flex-1">
//         <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
//         <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
//           <div className="mb-4">
//             <p className="text-sm font-semibold text-[#33B786]">Wox Bank</p>
//           </div>
//           <h1 className="text-4xl font-bold mb-4">{heading}</h1>
//           <p className="text-lg font-sans text-left mb-4">{desc}</p>
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
//           <div className="max-w-md w-full space-y-8" style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}>
//             <div className="relative rounded-lg bg-white p-8">
//               <h2 className="mt-6 text-left text-2xl font-bold text-[#33B786]">Login</h2>
//               <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-700">Email</h3>
//                   <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] sm:text-sm mb-4" placeholder="Your email" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-700">Password</h3>
//                   <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] sm:text-sm mb-4" placeholder="Your password" />
//                 </div>
//                 <Button>Login</Button>
//               </form>
//               <p className="mt-2 text-center text-sm text-gray-600">
//                 Don’t Have an Account?{" "}
//                 <span className="font-medium text-[#33B786] hover:text-[#33B786]" onClick={handleRegisterRedirect} style={{ cursor: 'pointer' }}>
//                   Register
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginNew;
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook
import Button from '../components/Button'; // Assuming you have a Button component

const LoginForm = ({ heading = "Welcome Back", desc = "Enter Your Details to login to your Banking Dashboard again!" }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    navigate('/Otp'); // Redirect to OTP page after login
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to registration page
  };

  return (
    <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
      <div className="relative flex-1">
        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
          <div className="mb-4">
            <p className="text-sm font-semibold text-[#33B786]">Wox Bank</p>
          </div>
          <h1 className="text-4xl font-bold mb-4">{heading}</h1>
          <p className="text-lg font-sans text-left mb-4">{desc}</p>
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
          <div className="max-w-md w-full space-y-8" style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}>
            <div className="relative rounded-lg bg-white p-8">
              <h2 className="mt-6 text-left text-2xl font-bold text-[#33B786]">Login</h2>
              <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"
                      placeholder="Enter your Password"
                      required
                    />
                    <a href="#" className="absolute right-2 top-2 text-sm text-green-500 hover:underline">
                      Forgot?
                    </a>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
                  Login
                </Button>
              </form>
              <p className="mt-2 text-center text-sm text-gray-600">
                Don’t Have an Account?{" "}
                <span className="font-medium text-[#33B786] hover:text-[#33B786]" onClick={handleRegisterRedirect} style={{ cursor: 'pointer' }}>
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
