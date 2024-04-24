// App.jsx


// import Loginform from "../src/components/Loginform";
// import HomePage from "./HomePage";
// import RegForm from "./components/Reg_form";
// import Otp from "./components/Otp"


// function App() {
//   return (
//     <div>
    
     
//       {/* <HomePage heading="Welcome Back" desc="Enter Your Details to login to your Banking Dashboard again!">
//         <Loginform />
//       </HomePage> */}
        
//         {/* <HomePage heading={<span>Experience<br/>hassle-free banking</span>} desc={<span>Experience simple, secure, and stress-free banking. Say goodbye<br></br> to long queues and complex procedures and hello to hassle-free <br></br> banking with Wox Bank.</span>}>
//   <RegForm />
// </HomePage>
//          */}
        
//         <HomePage heading={<span>Experience<br/>hassle-free banking</span>} desc={<span>Experience simple, secure, and stress-free banking. Say goodbye<br></br> to long queues and complex procedures and hello to hassle-free <br></br> banking with Wox Bank.</span>}>
//           <Otp/>
//         </HomePage>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import OverView from './components/OverView';
// import Accounts from './components/Accounts';
// import Transaction from './components/Transaction';
// import Profile from './components/Profile';
// import HomePage from "./HomePage";
// import Loginform from "../src/components/Loginform";
// import RegForm from "./components/Reg_form";
// import Otp from "./components/Otp";

// function App() {
//   return (
//     <Router>
//       <Dashboard /> {/* Assuming Dashboard is a common header you want across all routes */}
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-64 h-full shadow-md bg-white px-5 py-10">
//           <ul>
//             <li className="mb-6">
//               <Link to="/">Overview</Link>
//             </li>
//             <li className="mb-6">
//               <Link to="/accounts">Accounts</Link>
//             </li>
//             <li className="mb-6">
//               <Link to="/transaction">Transaction</Link>
//             </li>
//             <li className="mb-6">
//               <Link to="/profile">Profile</Link>
//             </li>
//             {/* Adding links to additional functionalities */}
            
//           </ul>
//         </div>

//         {/* Main content */}
//         <div className="flex-1 p-10">
//           <Routes>
//             <Route path="/" element={<OverView />} />
//             <Route path="/accounts" element={<Accounts />} />
//             <Route path="/transaction" element={<Transaction />} />
//             <Route path="/profile" element={<Profile />} />
        
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import DashboardLayout from './components/DashboardLayout';
// import OverView from './components/OverView';
// import Accounts from './components/Accounts';
// import Transaction from './components/Transaction';
// import Profile from './components/Profile';
// import HomePage from "./HomePage";
// import Loginform from "./components/Loginform";
// import RegForm from "./components/Reg_form";
// import Otp from "./components/Otp";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Root path for the Login page */}
//         <Route path="/" element={<HomePage heading="Welcome Back" desc="Enter Your Details to login to your Banking Dashboard again!"><Loginform /></HomePage>} />
        
//         {/* Route for registration */}
//         <Route path="/register" element={<HomePage heading="Experience hassle-free banking" desc="Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank."><RegForm /></HomePage>} />

//         {/* Route for OTP verification */}
//         <Route path="/otp" element={<HomePage heading="Verify Your Account" desc="Please enter the OTP sent to your email to proceed."><Otp /></HomePage>} />

      
//       </Routes>
//     </Router>
//   );
// }

// function ProtectedRoute({ children }) {
//   const isAuthenticated = useAuth(); // Custom hook to check if authenticated

//   return isAuthenticated ? children : <Navigate to="/" replace />;
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import DashboardLayout from './components/DashboardLayout'; (Commented as not used currently)
import OverView from './components/OverView';
import Accounts from './components/Accounts';
import Transaction from './components/Transaction';
import Profile from './components/Profile';
import HomePage from "./HomePage";
import Loginform from "./components/Loginform";
import RegForm from "./components/Reg_form";
import Otp from "./components/Otp";

function App() {
  return (
    <Router>
      <Routes>
        {/* Dedicated route for the Login page */}
        <Route path="/login" element={<HomePage heading="Welcome Back" desc="Enter Your Details to login to your Banking Dashboard again!"><Loginform /></HomePage>} />
        
        {/* Root path now redirects to Login page */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        
        {/* Route for registration */}
        <Route path="/register" element={<HomePage heading="Experience hassle-free banking" desc="Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank."><RegForm /></HomePage>} />

        {/* Route for OTP verification */}
        <Route path="/otp" element={<HomePage heading="Verify Your Account" desc="Please enter the OTP sent to your email to proceed."><Otp /></HomePage>} />
      
      </Routes>
    </Router>
  );
}

export default App;
