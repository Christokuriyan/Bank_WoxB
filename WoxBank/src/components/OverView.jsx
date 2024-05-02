





import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Plus from '../../public/assets/icons/Outlet/plus.svg';
const transactions = [
    { id: 1, name: "Grocery Shopping", date: "06.Mar.2023 - 09:39", amount: -10000 },
    { id: 2, name: "Salary", date: "05.Mar.2023 - 18:00", amount: 50000 },
    { id: 3, name: "Gym Membership", date: "02.Mar.2023 - 14:20", amount: -1500 }
  ];

const OverView = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [isOpen, setIsOpen] = useState(false); // State to handle the visibility of the date picker
  const [showAccountNumbers, setShowAccountNumbers] = useState(true); // State to toggle account number visibility
  const [startDate, endDate] = dateRange;
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // State for the selected month

  // Month names array
  const monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccountNumbers = () => {
    setShowAccountNumbers(!showAccountNumbers);
  };

  const formatDateDisplay = (date) => {
    if (!date) return 'Select Date';
    return date.toLocaleDateString();
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex">
        {/* Left Section */}
        <div className="flex-1">
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold">Current Account Balance</h1>
              <button onClick={toggleAccountNumbers} className="bg-[#F0F0F0] p-2 rounded-md" style={{ width: '40px', height: '40px' }}>
                {showAccountNumbers ? (
                  <img src="../../public/assets/icons/Outlet/eye-hide-svgrepo-com.svg" alt="Hide" style={{ width: '24px', height: '24px' }} />
                ) : (
                  <img src="../../public/assets/icons/Outlet/eye-show-svgrepo-com.svg" alt="Show" style={{ width: '24px', height: '24px' }} />
                )}
              </button>
              <div className="relative">
                <button onClick={toggleCalendar} className="bg-[#F0F0F0] text-[#555555] px-4 py-2 rounded-md ml-2 flex items-center">
                  {`${formatDateDisplay(startDate)} - ${formatDateDisplay(endDate)}`}
                  <i className="fa fa-calendar ml-2" aria-hidden="true"></i>
                  <i className="fa fa-chevron-down ml-2" aria-hidden="true"></i> {/* Dropdown symbol */}
                </button>
                {isOpen && (
                  <div className="absolute top-full mt-2 z-10">
                    <DatePicker
                      selectsRange
                      startDate={startDate}
                      endDate={endDate}
                      onChange={(update) => {
                        setDateRange(update);
                        if (update[0] && update[1]) {
                          setIsOpen(false); // Close picker after range is selected
                        }
                      }}
                      inline
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center bg-white p-4 shadow rounded-md" style={{ backgroundColor: '#D4F3E7' }}>
              <img src="../../public/assets/icons/Outlet/image 32.svg" alt="Logo" className="h-12 w-12 mr-4" />
              <div className="flex-grow">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h2 className="font-semibold">Current Balance</h2>
                    {showAccountNumbers && <p className="flex items-center"><i className="fa fa-money" aria-hidden="true"></i> ₦ 10,000.00</p>}
                  </div>
                  <div>
                    <h2 className="font-semibold">Income</h2>
                    {showAccountNumbers && <p className="flex items-center"><i className="fa fa-money" aria-hidden="true"></i>₦ 10,000.00</p>}
                  </div>
                  <div>
                    <h2 className="font-semibold">Expense</h2>
                    {showAccountNumbers && <p className="flex items-center"><i className="fa fa-money" aria-hidden="true"></i> ₦ 10,000.00</p>}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold">Accounts</h1>
              <button className="bg-[#F0F0F0] p-3 rounded-lg" style={{ width: '40px', height: '40px' }}>
                <img src={Plus} alt="Add" />  {/* Use the SVG as an image source */}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {['Main Account', 'Savings Account', 'Investment Account'].map((account, index) => (
                <div key={index} className="bg-white p-4 shadow rounded-md text-center" style={{ backgroundColor: '#D4F3E7' }}>
                  <h2 className="font-semibold">{account}</h2>
                  <p className="flex justify-center items-center space-x-2">
                    <i className="fa fa-money" aria-hidden="true"></i>
                    <span>₦ 10,000.00</span>
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold flex items-center space-x-2">
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
                <span>Statistics</span>
              </h1>
              <select
                className="bg-[#F0F0F0] border border-gray-300 rounded shadow p-2"
                value={selectedMonth}
                onChange={e => setSelectedMonth(e.target.value)}>
                {monthNames.map((month, index) => (
                  <option key={index} value={index}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white p-4 shadow rounded-md">
              <div className="flex items-center justify-between mb-4">
                <img src="../../public/assets/icons/Outlet/image 32.svg" alt="Logo" className="h-12 w-12 mr-4" />
                <h2 className="font-semibold">Income</h2>
                <div className="w-[15rem] bg-gray-200 h-4 rounded-full mx-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <p className="flex items-center"><i className="fa fa-money" aria-hidden="true"></i> ₦ 10,000.00</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <img src="../../public/assets/icons/Outlet/image 34.svg" alt="Logo" className="h-12 w-12 mr-4" />
                <h2 className="font-semibold">Expense</h2>
                <div className="w-[15rem] bg-gray-200 h-4 rounded-full mx-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: "20%" }}></div>
                </div>
                <p className="flex items-center"><i className="fa fa-money" aria-hidden="true"></i> ₦ 10,000.00</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Section Placeholder */}
        <div className="flex-1">
        <div className="flex-1">
          <section className="mb-8">
            <h1 className="text-xl font-bold mb-6">Transactions</h1>
            <div className="bg-white p-4 shadow rounded-md">
              {transactions.map(transaction => (
                <div key={transaction.id} className="flex justify-between items-center mb-4">
                  <span>{transaction.name}</span>
                  <span>{transaction.date}</span>
                  <span className={`font-bold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    {transaction.amount < 0 ? `- ${Math.abs(transaction.amount).toLocaleString()}` : `+ ${transaction.amount.toLocaleString()}`}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
