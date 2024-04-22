// App.jsx


import Loginform from "../src/components/Loginform";
import HomePage from "./HomePage";
import RegForm from "./components/Reg_form";
import Otp from "./components/Otp"


function App() {
  return (
    <div>
    
     
      {/* <HomePage heading="Welcome Back" desc="Enter Your Details to login to your Banking Dashboard again!">
        <Loginform />
      </HomePage> */}
        
        {/* <HomePage heading={<span>Experience<br/>hassle-free banking</span>} desc={<span>Experience simple, secure, and stress-free banking. Say goodbye<br></br> to long queues and complex procedures and hello to hassle-free <br></br> banking with Wox Bank.</span>}>
  <RegForm />
</HomePage>
         */}
        
        <HomePage heading={<span>Experience<br/>hassle-free banking</span>} desc={<span>Experience simple, secure, and stress-free banking. Say goodbye<br></br> to long queues and complex procedures and hello to hassle-free <br></br> banking with Wox Bank.</span>}>
          <Otp/>
        </HomePage>
    </div>
  );
}

export default App;
