

const HomePage = ({ children, heading, desc }) => {
  return (
    <div className="bg-[#D4F3E7] flex flex-col md:flex-row">

      <div className="relative flex-1">

        <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />

        <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">

          <div className="mb-4">
            <p className="text-sm font-semibold text-[#33B786]">Wox Bank</p>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            {heading}
          </h1>

          <p className="text-lg font-sans text-left mb-4">
            {desc}

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

          {children}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
