import React from 'react';
import Button from '../components/Button';  // Make sure the path is correct relative to this file's location

// HomePage Component
const HomePage = ({ heading, desc }) => {
  // Function to simulate login process (placeholder)
  const handleLogin = () => {
    alert('Login successful!');  // Placeholder for navigation
  };

  return (
    <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
      {/* First section */}
      <div className="relative flex-1">
        {/* Background image */}
        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        {/* Content in the first section */}
        <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
          {/* Small heading */}
          <div className="mb-4">
            <p className="text-sm font-semibold text-[#33B786]">Wox Bank</p>
          </div>
          {/* Main heading */}
          <h1 className="text-4xl font-bold mb-4">{heading}</h1>
          <h1 className="text-4xl font-bold mb-4">hassle-free banking</h1>
          {/* Description paragraph */}
          <p className="text-lg font-sans text-left mb-4">
            {desc}
            Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank.
          </p>
          {/* Social media icons */}
          <div className="flex mt-4">
            <a href="#" className="mr-2"><img src="../public/assets/icons/facebook 2.svg" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="mr-2"><img src="../public/assets/icons/instagram 2.svg" alt="Instagram" className="w-6 h-6" /></a>
            <a href="#" className="mr-2"><img src="../public/assets/icons/twitter 2.svg" alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
      {/* Second section for Login Form */}
      <div className="relative flex-1">
        {/* Background image with decreased opacity */}
        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10 hidden md:block" />
        {/* Login Form */}
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8" style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}>
            <div className="relative rounded-lg bg-white p-8">
              <h2 className="mt-6 text-left text-2xl font-bold text-[#33B786]">Login</h2>
              <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Email</h3>
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] sm:text-sm mb-4" placeholder="Your email" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Password</h3>
                  <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] sm:text-sm mb-4" placeholder="Your password" />
                </div>
                <Button>Login</Button>
              </form>
              <p className="mt-2 text-center text-sm text-gray-600">
                Don’t Have an Account?{" "}
                <a className="font-medium text-[#33B786] hover:text-[#33B786]" style={{ cursor: 'pointer' }}>
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
