import React from 'react';

const Accounts = () => {
  const accounts = [
    { id: 1, title: 'Main Account', currency: '₦', amount: '50,000' },
    { id: 2, title: 'Savings Account', currency: '₦', amount: '15,000' },
    { id: 3, title: 'Investment Account', currency: '₦', amount: '30,000' },
    { id: 4, title: 'Fixed Deposit', currency: '₦', amount: '100,000' }
  ];

  const transactions = [
    { id: 1, type: '+', name: 'Oluwaben Jamin', method: 'Bank Transfer', date: '06.Mar.2023 - 09:39', amount: '+1000', status: 'Completed' },
    { id: 2, type: '-', name: 'Adeyemi Bola', method: 'Direct Pay', date: '06.Mar.2023 - 10:00', amount: '-500', status: 'Pending' },
    { id: 3, type: '+', name: 'Chukwudi Ijele', method: 'Credit Card', date: '06.Mar.2023 - 11:21', amount: '+2000', status: 'Cancelled' }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {accounts.map(account => (
          <div key={account.id} className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-2">{account.title}</h2>
            <p className="text-lg">{account.currency} {account.amount}</p>
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Fund</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Withdraw</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Transactions</h2>
        {transactions.map(transaction => (
          <div key={transaction.id} className="flex items-center justify-between bg-white shadow rounded p-4 mb-2">
            <button className={`h-8 w-8 rounded-full ${transaction.type === '+' ? 'bg-green-500' : 'bg-red-500'} text-white flex items-center justify-center`}>
              {transaction.type}
            </button>
            <span>{transaction.name}</span>
            <span>{transaction.method}</span>
            <span>{transaction.date}</span>
            <span className={`${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {transaction.amount}
            </span>
            <button className={`py-1 px-3 rounded text-white ${transaction.status === 'Completed' ? 'bg-green-500' : transaction.status === 'Pending' ? 'bg-gray-400' : 'bg-red-500'}`}>
              {transaction.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accounts;
