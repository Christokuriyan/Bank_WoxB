import RegForm from "../src/components/Reg_form";

const HomePage = () => {
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
          <h1 className="text-4xl font-bold mb-4">
            Experience
          </h1>
          <h1 className="text-4xl font-bold mb-4">hassle-free banking</h1>
          <p className="text-lg font-sans text-left mb-4"> {/* Added font-serif and text-left classes */}
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
      {/* Second section */}
      <div className="relative flex-1">
        {/* Background image with decreased opacity */}
        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10 hidden md:block" />
        {/* Registration form */}
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <RegForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
