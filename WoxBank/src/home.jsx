
import RegForm from "./RegForm";
import { BackgroundImage } from "png"; // Assuming you have a package named "png" for handling PNG images

const HomePage = () => {
  return (
    <div className="bg-blue-200">
      <div className="relative">
        {/* Use the BackgroundImage component from the "png" package to set the background image */}
        <BackgroundImage
          src="path/to/your/background/image.png"
          alt="Background Image"
          className="absolute inset-0 w-full h-full"
        />
        {/* Render the registration form component */}
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <RegForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
