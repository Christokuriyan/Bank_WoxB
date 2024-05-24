// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoginNew from './screens/LoginNew';
// import RegNew from './screens/RegNew';
// import OtpNew from './screens/OtpNew';
// import Dashboard from './screens/Dashboard';
// import Overview from './components/OverView';
// import Accounts from './components/Accounts';
// import Transaction from './components/Transaction';
// import Profile from './components/Profile';
// import WithdrawForm from './screens/WithdrawForm';
// import FundWallet from '../src/screens/FundWallet'; 
// import SuccessMessage from './components/SuccessMessage';
// import AddAccountForm from '../src/screens/AddAccountForm'
// import LogoutConfirmation from '../src/screens/LogoutConfirmation'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginNew />} />
//         <Route path="/login" element={<LoginNew />} />
//         <Route path="/register" element={<RegNew />} />
//         <Route path="/otp" element={<OtpNew />} />
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route index element={<Overview />} />
//           <Route path="overview" element={<Overview />} />
//           <Route path="accounts" element={<Accounts />} />
//           <Route path="transaction" element={<Transaction />} />
//           <Route path="profile" element={<Profile />} />
         
          
          
//         </Route>
//         <Route path="WithdrawForm" element={<WithdrawForm />} />
//         <Route path="fundwallet" element={<FundWallet />} />
//         <Route path="SuccessMessage" element={<SuccessMessage/>} />
//         <Route path="AddAccountForm" element={<AddAccountForm/>} />
//         <Route path="LogoutConfirmation" element={<LogoutConfirmation/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginNew from './screens/LoginNew';
import RegNew from './screens/RegNew';
import OtpNew from './screens/OtpNew';
import Dashboard from './screens/Dashboard';
import Overview from './components/OverView';
import Accounts from './components/Accounts';
import Transaction from './components/Transaction';
import Profile from './components/Profile';
import WithdrawForm from './screens/WithdrawForm';
import FundWallet from './screens/FundWallet'; 
import SuccessMessage from './components/SuccessMessage';
import AddAccountForm from './screens/AddAccountForm';
import LogoutConfirmation from './screens/LogoutConfirmation';
import ResetPassword from './screens/ResetPassword';
import OTPPage from './screens/OTPPage';
import ChangePassword from './screens/ChangePassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginNew />} />
        <Route path="/login" element={<LoginNew />} />
        <Route path="/register" element={<RegNew />} />
        <Route path="/otp" element={<OtpNew />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/withdrawform" element={<WithdrawForm />} />
        <Route path="/fundwallet" element={<FundWallet />} />
        <Route path="/successmessage" element={<SuccessMessage />} />
        <Route path="/addaccountform" element={<AddAccountForm />} />
        <Route path="/logoutconfirmation" element={<LogoutConfirmation />} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/OTPPage" element={<OTPPage/>} />
        <Route path="/ChangePassword" element={<ChangePassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
