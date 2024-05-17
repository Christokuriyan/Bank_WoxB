import PlusIcon from '../../public/assets/icons/Outlet/plus.svg';
import MinusIcon from '../../public/assets/icons/Outlet/fi-sr-minus-small.svg';

const Transaction = () => {
  const accounts = [
    { id: 1, title: 'Main Account', currency: '₦', amount: '44,500' },
    { id: 2, title: 'School Savings', currency: '₦', amount: '44,500' },
    { id: 3, title: 'Holiday Plan', currency: '₦', amount: '44,500' },
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
    <div className="container px-48 pl-6">

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-14 mb-8">
        {accounts.map(account => (
          <div key={account.id} className="shadow rounded p-4 bg-[#D4F3E7]">
            <h2 className="text-sm text-[#46237A] font-bold mb-2">{account.title}</h2>
            <p className="text-3xl font-medium">{account.currency} {account.amount}</p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Transactions</h2>
        {transactions.map(transaction => (
          <div key={transaction.id} className="mb-2"> {/* Added wrapping div with margin bottom */}
            <div className="flex items-center justify-between bg-[] rounded p-2">
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
            <hr className="border-t border-gray-200 " /> {/* Added horizontal rule for separation */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transaction;