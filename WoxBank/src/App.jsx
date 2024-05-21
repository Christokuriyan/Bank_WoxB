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
import FundWallet from '../src/screens/FundWallet'; // Import the FundWallet component if it's part of your project

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
           {/* Add FundWallet route */}
        </Route>
        <Route path="WithdrawForm" element={<WithdrawForm />} />
        <Route path="fundwallet" element={<FundWallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
