
import PlusIcon from '../../public/assets/icons/Outlet/plus.svg';
import MinusIcon from '../../public/assets/icons/Outlet/fi-sr-minus-small.svg';


import YourIcon from '../../public/assets/icons/Outlet/nw-arr.svg'

const Accounts = () => {
  const accounts = [
    { id: 1, title: 'Main Account', currency: '₦', amount: '50,000' },
    { id: 2, title: 'Savings Account', currency: '₦', amount: '15,000' },
    { id: 3, title: 'Investment Account', currency: '₦', amount: '30,000' },
    { id: 4, title: 'Add Account', currency: '₦', amount: '00,000.00', custom: true } // Custom box for adding an account
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
    <div className="container mx-auto px-48 pl-2   ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {accounts.map(account => (
          <div key={account.id} className={`shadow rounded p-7 ${account.custom ? 'bg-[#F0F0F0BF]' : 'bg-[#D4F3E7]'} `}>
            {account.custom ? ( // Render custom box for adding account
              <>
                <div className="flex items-center gap-8">
                  <img src={PlusIcon} alt="Add" className="w-8 h-8" />
                  <h2 className="text-xs text-gray-600 font-bold mr-2">Add Account</h2>

                </div>
                <p className="text-2xl mt-6 font-bold text-gray-600">{account.currency} {account.amount}</p>
              </>
            ) : (
              <>
                <h2 className="text-xs text-[#46237A] font-bold mb-1">{account.title}</h2>
                <p className="text-2xl font-bold">{account.currency} {account.amount}</p>
                <div className="flex justify-start gap-4 mt-2">
                  <button className="bg-[#33B786] hover:bg-[#33B786] text-white font-bold py-2 px-4 rounded text-xs">Fund</button>
                  <button className="bg-[#D4D4D4] hover:bg-[#D4D4D4] text-[#252525] font-bold py-2 px-4 rounded text-xs">Withdraw</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mb-8">
  <div className="mb-8 flex items-center justify-between">
    <h2 className="text-lg font-bold mb-4">Transactions</h2>
    <button className="text-sm text-[#33B786] hover:text-[#33B786] flex items-center gap-1">
      View All
      <img src={YourIcon} alt="Icon" className="w-7" />
    </button>
  </div>

  {transactions.map(transaction => (
    <div key={transaction.id} className="mb-2">
      <div className="flex items-start justify-between bg-[#f5fcf9] rounded p-2">
        <button className={`h-8 w-8 rounded-full ${transaction.type === '+' ? 'bg-[#33B786]' : 'bg-red-500'} text-white flex items-center justify-center`}>
          <img src={transaction.type === '+' ? PlusIcon : MinusIcon} alt={transaction.type} className="w-6 h-6" />
        </button>
        <span className="text-base w-[10rem] text-[#8C8C8C] font-semibold">{transaction.name}</span>
        <span className="text-base w-[10rem] text-[#8C8C8C] font-semibold">{transaction.method}</span>
        <span className="text-base w-[10rem] text-[#8C8C8C] font-semibold">{transaction.date}</span>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px' }} className={`${transaction.amount.startsWith('+') ? 'text-[#33B786]' : 'text-red-500'}`}>
          {transaction.amount}
        </span>
        <button className={`w-36 h-8 py-1 px-2 rounded text-xs ${transaction.status === 'Completed' ? 'bg-[#33B786] text-white text-sm font-bold' : transaction.status === 'Pending' ? 'bg-[#D4D4D4] text-[#555555] text-xs font-bold' : 'bg-[#E74F5B] text-white text-xs font-bold'}`}>
          {transaction.status}
        </button>
      </div>
      <hr className="border-t border-gray-200 " />
    </div>
  ))}
</div>

    </div>
  );
}

export default Accounts;
