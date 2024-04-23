// import RegForm from "../src/components/Reg_form";

// const HomePage = ({ children, heading, desc }) => {
//   return (
//     <div className="bg-[#D4F3E7] flex flex-col md:flex-row">
//       {/* First section */}
//       <div className="relative flex-1">
//         {/* Background image */}
//         <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10" />
//         {/* Content in the first section */}
//         <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-black">
//           {/* Small heading */}
//           <div className="mb-4">
//             <p className="text-sm font-semibold text-[#33B786]">Wox Bank</p>
//           </div>
//           {/* Main heading */}
//           <h1 className="text-4xl font-bold mb-4">
//             {heading}
//           </h1>
//           {/* <h1 className="text-4xl font-bold mb-4">hassle-free banking</h1> */}
//           <p className="text-lg font-sans text-left mb-4"> {/* Added font-serif and text-left classes */}
//             {desc}
//             {/* 
//             Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank. */}
//           </p>
//           {/* Social media icons */}
//           <div className="flex mt-4">
//             <a href="#" className="mr-2"><img src="../public/assets/icons/facebook 2.svg" alt="Facebook" className="w-6 h-6" /></a>
//             <a href="#" className="mr-2"><img src="../public/assets/icons/instagram 2.svg" alt="Instagram" className="w-6 h-6" /></a>
//             <a href="#" className="mr-2"><img src="../public/assets/icons/twitter 2.svg" alt="Twitter" className="w-6 h-6" /></a>
//           </div>
//         </div>
//       </div>
//       {/* Second section */}
//       <div className="relative flex-1">
//         {/* Background image with decreased opacity */}
//         <img src="../public/assets/registrations/new.png" alt="Background Image" className="absolute inset-0 w-full h-full object-cover opacity-10 hidden md:block" />
//         {/* Registration form */}
//         <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//           {/* <RegForm /> */}
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import OverView from './components/OverView';
import Accounts from './components/Accounts';
import Transaction from './components/Transaction';
import Profile from './components/Profile';
import HomePage from "./HomePage";
import Loginform from "../src/components/Loginform";
import RegForm from "./components/Reg_form";
import Otp from "../../WoxBank/src/components/Otp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Set Login as the initial page */}
          <Route index element={
            <HomePage heading="Welcome Back" desc="Enter Your Details to login to your Banking Dashboard again!">
              <Loginform />
            </HomePage>
          } />
          <Route path="login" element={
            <HomePage heading="Welcome Back" desc="Enter Your Details to login to your Banking Dashboard again!">
              <Loginform />
            </HomePage>
          } />
          <Route path="register" element={
            <HomePage heading={<span>Experience hassle-free banking</span>} desc={<span>Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank.</span>}>
              <RegForm />
            </HomePage>
          } />
          <Route path="otp" element={
            <HomePage heading={<span>Experience hassle-free banking</span>} desc={<span>Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Wox Bank.</span>}>
              <Otp />
            </HomePage>
          } />
          {/* Dashboard Routes with nested layout */}
          <Route path="dashboard/*" element={<DashboardLayout />}>
            <Route index element={<OverView />} />
            <Route path="overview" element={<OverView />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

// Layout Component for the main structure, including navigation
function Layout() {
  return (
    <div>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}>Login</NavLink> | {" "}
        <NavLink to="/register" style={({ isActive }) => ({ color: isActive ? 'blue' : 'grey' })}>Register</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

// DashboardLayout for nested dashboard routes
function DashboardLayout() {
  return (
    <div className="flex">
      <div className="w-64 h-full shadow-md bg-white px-5 py-10">
        <ul>
          <li className="mb-6"><NavLink to="/dashboard/overview" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Overview</NavLink></li>
          <li className="mb-6"><NavLink to="/dashboard/accounts" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Accounts</NavLink></li>
          <li className="mb-6"><NavLink to="/dashboard/transaction" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Transaction</NavLink></li>
          <li className="mb-6"><NavLink to="/dashboard/profile" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Profile</NavLink></li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
