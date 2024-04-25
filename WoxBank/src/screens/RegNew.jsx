

import React from 'react';
import Button from "../components/Button"; 

const RegNew = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Handling registration...");
    
  };

  return (
    <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
      
      <div className="relative flex-1">
       
        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        
        <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
          
          <div className="mb-4">
            <p className="text-sm font-semibold text-[#33B786]">Wox Bank</p>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Experience<br></br>hassle-free banking</h1>
          
          <p className="text-lg font-sans text-left mb-4">
            Experience simple, secure, and stress-free banking. Say goodbye <br></br> to long queues and complex procedures and hello to hassle-free<br></br> banking with Wox Bank.
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
          <div className="max-w-md w-full space-y-8" style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}>
            <div className="relative rounded-lg bg-white p-8">
              <h2 className="mt-6 text-left text-2xl font-bold text-[#33B786]">Register</h2>
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] sm:text-sm mb-4" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] sm:text-sm mb-4" placeholder="Your email" />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                  <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] sm:text-sm mb-4" placeholder="Your password" />
                </div>
                <div className="flex items-center mb-4">
                  <input id="agree" name="agree" type="checkbox" required className="h-4 w-4 text-[#33B786] focus:ring-[#33B786] border-gray-300 rounded"/>
                  <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
                    I agree to all the <span style={{ color: '#33B786' }}>Terms</span>, <span style={{ color: '#33B786' }}>Privacy Policy</span>, and <span style={{ color: '#33B786' }}>Fees</span>.
                  </label>
                </div>
                <Button>Register</Button>
              </form>
              <p className="mt-2 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <span className="font-medium text-[#33B786] cursor-pointer">Log in</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegNew;
