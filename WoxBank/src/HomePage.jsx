

// import RegForm from "../src/components/Reg_form";

// const HomePage = () => {
//   return (
//     <div className="bg-green-200 flex">
//       {/* First section */}
//       <div className="flex-1 relative">
//         {/* Background image */}
//         <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
//         {/* Content in the first section */}
//         <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
//           <h1 className="text-4xl font-bold mb-4">Experience
// hassle-free banking</h1>
//           <p className="text-lg">Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank.</p>
//         </div>
//       </div>
//       {/* Second section */}
//       <div className="flex-1 relative">
//         {/* Background image with decreased opacity */}
//         <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
//         {/* Registration form */}
//         <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//           <RegForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import RegForm from "../src/components/Reg_form";

const HomePage = () => {
  return (
    <div className="bg-green-200 flex">
      {/* First section */}
      <div className="flex-1 relative">
        {/* Background image */}
        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        {/* Content in the first section */}
        <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
          {/* Small heading */}
          <div className="mb-4">
            <p className="text-sm font-semibold">Wox Bank</p>
           
          </div>
          {/* Main heading */}
          <h1 className="text-4xl font-bold mb-4">
            Experience </h1>
            <h1 className="text-4xl font-bold mb-4"> hassle-free banking
          </h1>
          <p className="text-lg">Experience simple, secure, and stress-free banking. Say goodbye</p><p className="text-lg"> to long queues and complex procedures and hello to hassle-free
           <p className="text-lg"></p>banking with Wox Bank.</p>
          {/* Social media icons */}
          <div className="flex mt-4">
            <a href="#" className="mr-2"><img src="facebook_icon.png" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="mr-2"><img src="instagram_icon.png" alt="Instagram" className="w-6 h-6" /></a>
            <a href="#" className="mr-2"><img src="twitter_icon.png" alt="Twitter" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className="flex-1 relative">
        {/* Background image with decreased opacity */}
        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        {/* Registration form */}
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <RegForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
