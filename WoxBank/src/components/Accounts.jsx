import React from 'react';
import PlusIcon from '../../public/assets/icons/Outlet/plus.svg';  
import MinusIcon from '../../public/assets/icons/Outlet/fi-sr-minus-small.svg';

const Accounts = () => {
  const accounts = [
    { id: 1, title: 'Main Account', currency: '₦', amount: '50,000' },
    { id: 2, title: 'Savings Account', currency: '₦', amount: '15,000' },
    { id: 3, title: 'Investment Account', currency: '₦', amount: '30,000' },
    { id: 4, title: 'Fixed Deposit', currency: '₦', amount: '100,000' }
  ];

  const transactions = [
    { id: 1, type: '+', name: 'Oluwaben Jamin', method: 'Bank Transfer', date: '06.Mar.2023 - 09:39', amount: '+1000', status: 'Completed' },
    { id: 2, type: '-', name: 'Oluwaben Jamin', method: 'Direct Pay', date: '06.Mar.2023 - 10:00', amount: '-5000', status: 'Pending' },
    { id: 3, type: '+', name: 'Oluwaben Jamin', method: 'Credit Card', date: '06.Mar.2023 - 11:21', amount: '+2000', status: 'Cancelled' },
    { id: 4, type: '+', name: 'Oluwaben Jamin', method: 'Bank Transfer', date: '06.Mar.2023 - 09:39', amount: '+1000', status: 'Completed' },
    { id: 5, type: '+', name: 'Oluwaben Jamin', method: 'Credit Card', date: '06.Mar.2023 - 11:21', amount: '+2000', status: 'Cancelled' },
    { id: 6, type: '-', name: 'Oluwaben Jamin', method: 'Direct Pay', date: '06.Mar.2023 - 10:00', amount: '-5000', status: 'Pending' },
    { id: 7, type: '+', name: 'Oluwaben Jamin', method: 'Credit Card', date: '06.Mar.2023 - 11:21', amount: '+2000', status: 'Cancelled' }
  ];

  return (
    <div className="container mx-auto px-4  ">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {accounts.map(account => (
          <div key={account.id} className=" shadow rounded p-4 bg-[#D4F3E7]">
            <h2 className="text-sm text-[#46237A] font-bold mb-2">{account.title}</h2>
            <p className="text-3xl font-semibold">{account.currency} {account.amount}</p>
            <div className="flex justify-between mt-4">
              <button className="bg-[#33B786] hover:bg-[#33B786] text-white font-bold py-2 px-4 rounded">Fund</button>
              <button className="bg-[#D4D4D4] hover:bg-[#D4D4D4] text-[ #252525] font-bold py-2 px-4 rounded">Withdraw</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Transactions</h2>
        {transactions.map(transaction => (
          <div key={transaction.id} className="flex items-center justify-between bg-white  rounded p-2 mb-2">
             <button className={`h-8 w-8 rounded-full ${transaction.type === '+' ? 'bg-[#33B786]' : 'bg-red-500'} text-white flex items-center justify-center`}>
              <img src={transaction.type === '+' ? PlusIcon : MinusIcon} alt={transaction.type} className="w-6 h-6"/>
            </button>
            <span>{transaction.name}</span>
            <span>{transaction.method}</span>
            <span>{transaction.date}</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif",fontSize: '24px' }} className={`${transaction.amount.startsWith('+') ? 'text-[#33B786]' : 'text-red-500'}`}>
              {transaction.amount}
            </span>
            <button className={`w-32 h-10 py-1 px-3 rounded text-white ${transaction.status === 'Completed' ? 'bg-[#33B786]' : transaction.status === 'Pending' ? 'bg-gray-400' : 'bg-red-500'}`}>
    {transaction.status}
</button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accounts;
