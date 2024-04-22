

import Button from "./Button";

const RegForm = () => {
  return (
    <div className="max-w-md w-full space-y-8" style={{ boxShadow: '0px 0px 150px 25px rgba(51, 183, 134, 0.25)' }}> {/* Added inline style for box shadow */}
      <div className="relative rounded-lg bg-white p-8 w-787 h-760 top-160 left-1013 gap-0 border-0 border-opacity-0">
        <h2 className="mt-6 text-left text-2xl font-bold text-[#33B786]">
          Login
        </h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          {/* <div>
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
          </div> */}
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
            {/* <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-[#33B786] focus:ring-[#33B786] border-gray-300 rounded"
            /> */}
            {/* <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to all the Terms, Privacy Policy, and Fees
            </label> */}
          </div>

          <div>
            <Button>Register</Button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
        Don’t Have an Account?{" "}
          <a href="#" className="font-medium text-[#33B786] hover:text-[#33B786]">
            Register 
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegForm;
