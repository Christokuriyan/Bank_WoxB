// // App.jsx


// // import Loginform from "../src/components/Loginform";
// // import HomePage from "./HomePage";
// // import RegForm from "./components/Reg_form";
// // import Otp from "./components/Otp"


// // function App() {
// //   return (
// //     <div>
    
     
// //       {/* <HomePage heading="Welcome Back" desc="Enter Your Details to login to your Banking Dashboard again!">
// //         <Loginform />
// //       </HomePage> */}
        
// //         {/* <HomePage heading={<span>Experience<br/>hassle-free banking</span>} desc={<span>Experience simple, secure, and stress-free banking. Say goodbye<br></br> to long queues and complex procedures and hello to hassle-free <br></br> banking with Wox Bank.</span>}>
// //   <RegForm />
// // </HomePage>
// //          */}
        
// //         <HomePage heading={<span>Experience<br/>hassle-free banking</span>} desc={<span>Experience simple, secure, and stress-free banking. Say goodbye<br></br> to long queues and complex procedures and hello to hassle-free <br></br> banking with Wox Bank.</span>}>
// //           <Otp/>
// //         </HomePage>
// //     </div>
// //   );
// // }

// // export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import OverView from './components/OverView';
// import Accounts from './components/Accounts';
// import Transaction from './components/Transaction';
// import Profile from './components/Profile';
// import HomePage from "./HomePage";
// import Loginform from "./components/Loginform";
// import RegForm from "./components/Reg_form";
// import Otp from "./components/Otp";
// import { Navigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Redirect "/" to "login" initially */}
//         <Route path="/" element={<Navigate replace to="/login" />} />

//         <Route path="/" element={<Layout />}>
//           {/* Login Page */}
//           <Route path="login" element={
//             <HomePage heading="Welcome Back" desc="Enter Your Details to login to your Banking Dashboard again!">
//               <Loginform />
//             </HomePage>
//           } />

//           {/* Registration Page */}
//           <Route path="register" element={
//             <HomePage heading="Experience hassle-free banking" desc="Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank.">
//               <RegForm />
//             </HomePage>
//           } />

//           {/* OTP Verification Page */}
//           <Route path="otp" element={
//             <HomePage heading="Verify Your Account" desc="Please enter the OTP sent to your email to proceed.">
//               <Otp />
//             </HomePage>
//           } />

//           {/* Dashboard Routes - Nested Layout */}
//           <Route path="dashboard/*" element={<DashboardLayout />}>
//             <Route index element={<OverView />} />
//             <Route path="overview" element={<OverView />} />
//             <Route path="accounts" element={<Accounts />} />
//             <Route path="transaction" element={<Transaction />} />
//             <Route path="profile" element={<Profile />} />
//           </Route>
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
//         <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}>Login</NavLink> | 
//         <NavLink to="/register" style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}>Register</NavLink>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

// function DashboardLayout() {
//   return (
//     <div className="flex">
//       <div className="w-64 h-full shadow-md bg-white px-5 py-10">
//         <ul>
//           <li><NavLink to="/dashboard/overview">Overview</NavLink></li>
//           <li><NavLink to="/dashboard/accounts">Accounts</NavLink></li>
//           <li><NavLink to="/dashboard/transaction">Transaction</NavLink></li>
//           <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
//         </ul>
//       </div>
//       <div className="flex-1 p-10">
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
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
        {/* Redirect "/" directly to "/login" */}

        <Route path="/" element={<Loginform/>} />

        {/* Main layout route */}
        <Route path="/" element={<Layout />}>
          <Route path="login" element={
            <HomePage heading="Welcome Back" desc="Enter Your Details to login to your Banking Dashboard again!">
              <Loginform />
            </HomePage>
          } />
          <Route path="register" element={
            <HomePage heading="Experience hassle-free banking" desc="Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank.">
              <RegForm />
            </HomePage>
          } />
          <Route path="otp" element={
            <HomePage heading="Verify Your Account" desc="Please enter the OTP sent to your email to proceed.">
              <Otp />
            </HomePage>
          } />
          <Route path="dashboard/*" element={<DashboardLayout />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {
  return (
    <div>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}>Login</NavLink> | 
        <NavLink to="/register" style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}>Register</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

function DashboardLayout() {
  return (
    <div className="flex">
      <div className="w-64 h-full shadow-md bg-white px-5 py-10">
        <ul>
          <li><NavLink to="overview" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Overview</NavLink></li>
          <li><NavLink to="accounts" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Accounts</NavLink></li>
          <li><NavLink to="transaction" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Transaction</NavLink></li>
          <li><NavLink to="profile" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Profile</NavLink></li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
