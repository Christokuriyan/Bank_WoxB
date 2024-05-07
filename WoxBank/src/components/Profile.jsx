import React, { useState } from 'react';
import PencilIcon from '../../public/assets/icons/bgimg/pensil.svg'; // Path to your pencil SVG icon
import HideIcon from '../../public/assets/icons/Outlet/eye-hide-svgrepo-com.svg'; // Path to your hide icon
import UnhideIcon from '../../public/assets/icons/Outlet/eye-show-svgrepo-com.svg'; // Path to your unhide icon

const Profile = () => {
  const [showAmount, setShowAmount] = useState(true);

  const account = {
    currency: '₦',
    amount: '50,000'
  };

  const profileInfo = {
    name: 'Maureen Ogu', // Example name
    email: 'oguchemaureenm@gmail.com',
    phone: '+234 803 041 1314',
    gender: 'Female'
  };

  const transactions = [
    { id: 1, name: 'Oluwaben Jamin', date: '06.Mar.2023 - 09:39', amount: '+1000' },
    { id: 2, name: 'Oluwaben Jamin', date: '06.Mar.2023 - 10:00', amount: '-500' },
    { id: 3, name: 'Oluwaben Jamin', date: '06.Mar.2023 - 09:39', amount: '+1000' },
    { id: 4, name: 'Oluwaben Jamin', date: '06.Mar.2023 - 10:00', amount: '-500' },
    { id: 5, name: 'Oluwaben Jamin', date: '06.Mar.2023 - 09:39', amount: '+1000' },
    { id: 6, name: 'Oluwaben Jamin', date: '06.Mar.2023 - 10:00', amount: '-500' },
    { id: 7, name: 'Oluwaben Jamin', date: '06.Mar.2023 - 09:39', amount: '+1000' },
    { id: 8, name: 'Oluwaben Jamin', date: '06.Mar.2023 - 10:00', amount: '-500' }
  ];

  return (
    <div className="relative">
      {/* Background Image with proper style */}
      

      <div className="container mx-auto px-8 py-10 flex flex-col md:flex-row gap-8 bg-[url('WoxBank\public\assets\registrations\new.png')] bg-cover bg-center relative z-10">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative">
            <img src="../../public/assets/profilepic/propic.jpg" alt="Profile" className="rounded-full w-32 h-32 object-cover" />
            <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full">
              <img src={PencilIcon} alt="Edit" className="w-4 h-4" />
            </button>
          </div>
          <h3 className="mt-4 text-lg font-bold">{profileInfo.name}</h3>
          <button className="mt-2 bg-[#E4D2FF] text-[#46237A] font-semibold py-2 px-4 rounded-full">Pro User</button>
          <div className="w-full pl-24 mt-6 text-justify flex flex-col justify-center">
            <h3 className="text-lg font-bold">Email</h3>
            <p className="font-semibold">{profileInfo.email}</p>
            <h3 className="text-lg font-bold mt-4">Phone Number</h3>
            <p className="font-semibold">{profileInfo.phone}</p>
            <h3 className="text-lg font-bold mt-4">Gender</h3>
            <p className="font-semibold">{profileInfo.gender}</p>
            <button className="mt-6 w-48 bg-[#33B786] text-white py-2 rounded mx-auto block">Reset Password</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 px-48 ">
          <div className="bg-[#33B786] text-white p-4 rounded flex flex-col px">
            <h2 className="text-xl font-bold">Main Account</h2>
            <div className="flex justify-between items-center mt-2">
              <p className="text-lg">
                {showAmount ? `${account.currency} ${account.amount}` : '######'}
              </p>
              <button onClick={() => setShowAmount(!showAmount)}>
                <img src={showAmount ? HideIcon : UnhideIcon} alt="Toggle" className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Transactions</h2>
            {transactions.map(transaction => (
              <div key={transaction.id} className="flex justify-between items-center bg-white p-4 rounded mb-2 shadow">
                <span>{transaction.name}</span>
                <span>{transaction.date}</span>
                <span className={`font-bold ${transaction.amount.startsWith('+') ? 'text-[#33B786]' : 'text-red-500'}`}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
