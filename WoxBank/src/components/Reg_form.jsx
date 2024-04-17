
import React from "react";
import Button from "./Button";

const RegForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="relative rounded-lg bg-white p-8 w-787 h-760 top-160 left-1013 gap-0 border-0 border-opacity-0">
          <h2 className="mt-6 text-left text-2xl font-bold text-[#33B786]">
            Register
          </h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            
              <div>
                <h3 className="text-sm font-medium text-gray-700">Name</h3>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] focus:z-10 sm:text-sm mb-4" // Added mb-4 for bottom margin
                  placeholder="Name"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Email</h3>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] focus:z-10 sm:text-sm mb-4" // Added mb-4 for bottom margin
                  placeholder="Email"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">Password</h3>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#33B786] focus:border-indigo-[#33B786] focus:z-10 sm:text-sm mb-4" // Added mb-4 for bottom margin
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-[#33B786] focus:ring-[#33B786] border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to all the Terms, Privacy Policy, and Fees
                </label>
              </div>
           

            <div>
              <Button>Register</Button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="font-medium text-[#33B786] hover:text-[#33B786]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegForm;



// import React from "react";
// import Button from "./Button";

// const RegForm = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div className="relative rounded-lg bg-white p-8 w-787 h-760 top-160 left-1013 gap-0 border-0 border-opacity-0">
//                     <h2 className="mt-6 text-left text-2xl font-bold text-[#33B786]">
//                         Register
//                     </h2>
//                     <form className="mt-8 space-y-6" action="#" method="POST">
//                         <div>
//                             <div className="mb-5"> {/* Add margin-bottom for one-line gap */}
//                                 <h3 className="text-sm font-medium text-gray-700">Name</h3>
//                                 <div className="flex items-center border border-gray-300 rounded-md">
//                                     <input
//                                         id="name"
//                                         name="name"
//                                         type="text"
//                                         autoComplete="name"
//                                         required
//                                         className="appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] focus:z-10 sm:text-sm"
//                                         placeholder="Name"
//                                     />
//                                     <img src="../../public/assets/registrations/fi-rr-user.svg" alt="User Icon" className="h-6 w-6 text-gray-400 mr-2" />
//                                 </div>
//                             </div>
//                             <div className="mb-5"> {/* Add margin-bottom for one-line gap */}
//                                 <h3 className="text-sm font-medium text-gray-700">Email</h3>
//                                 <div className="flex items-center border border-gray-300 rounded-[5px]">
//                                     <input
//                                         id="email"
//                                         name="email"
//                                         type="email"
//                                         autoComplete="email"
//                                         required
//                                         className="bg-white ml-2"
//                                         placeholder="Email"
//                                     />
//                                     <img src="../../public/assets/registrations/Vector.svg" alt="Message Icon" className="h-6 w-6 text-gray-400 mr-2" />
//                                 </div>
//                             </div>
//                             <div className="mb-25 "> {/* Add margin-bottom for one-line gap */}
//                                 <h3 className="text-sm font-medium text-gray-700">Password</h3>
//                                 <div className="flex items-center border border-gray-300 rounded-md">
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type="password"
//                                         autoComplete="new-password"
//                                         required
//                                         className="appearance-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#33B786] focus:border-[#33B786] focus:z-10 sm:text-sm"
//                                         placeholder="Password"
//                                     />
//                                     <img src="../../public/assets/registrations/fi-rr-lock.svg" alt="Lock Icon" className="h-6 w-6 text-gray-400 mr-2" />
//                                 </div>
//                             </div>
//                             <div className="flex items-center">
//                                 <input
//                                     id="terms"
//                                     name="terms"
//                                     type="checkbox"
//                                     className="h-4 w-4 text-[#33B786] focus:ring-[#33B786] border-gray-300 rounded"
//                                 />
//                                 <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 rounded-md">
//                                     I agree to all the Terms, Privacy Policy, and Fees
//                                 </label>
//                             </div>
//                         </div>

//                         <div>
//                             <Button>Register</Button>
//                         </div>
//                     </form>
//                     <p className="mt-2 text-center text-sm text-gray-600">
//                         Already have an account?{" "}
//                         <a href="#" className="font-medium text-[#33B786] hover:text-[#33B786]">
//                             Log in
//                         </a>
//                     </p>
//                 </div>
//             </div>






//             <div>
//                 <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     autoComplete="name"
//                     required
//                     className="bg-white "
//                     placeholder="Name"
//                 />

//             </div>




//         </div>
//     );
// };

// export default RegForm;
