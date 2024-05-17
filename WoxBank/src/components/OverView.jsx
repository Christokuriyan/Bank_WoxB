
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Plus from '../../public/assets/icons/Outlet/plus.svg';
import bgImage from '../../public/assets/icons/bgimg/Rectangle 167.jpg'; // Example path, adjust as necessary
import '../../src/screens/transactionStyle.css';


const transactions = [
  { id: 1, name: "Oluwaben Jamin", date: "05.Mar.2023 - 18:00", amount: -10000 },
  { id: 2, name: "Oluwaben Jamin", date: "05.Mar.2023 - 18:00", amount: 10000 },
  { id: 3, name: "Oluwaben Jamin", date: "05.Mar.2023 - 18:00", amount: -10000 },
  { id: 4, name: "Oluwaben Jamin", date: "05.Mar.2023 - 18:00", amount: +10000 },
  { id: 5, name: "Oluwaben Jamin", date: "05.Mar.2023 - 18:00", amount: -10000 },
  { id: 6, name: "Oluwaben Jamin", date: "05.Mar.2023 - 18:00", amount: -10000 },
  { id: 7, name: "Oluwaben Jamin", date: "05.Mar.2023 - 18:00", amount: +10000 },
  { id: 8, name: "Oluwaben Jamin", date: "05.Mar.2023 - 18:00", amount: +10000 },
];

const OverView = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [isOpen, setIsOpen] = useState(false);
  const [showAccountNumbers, setShowAccountNumbers] = useState(true);
  const [startDate, endDate] = dateRange;
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

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
    <div className="container mx-auto px-9 bg-[#f5fcf9]">
      <div className="flex flex-col md:flex-row xl:gap-[100px]">
        {/* Left Section */}
        <div className="flex-1">
          <section className="mb-8">
            <div className="flex justify-end mb-6 ">
              <h1 className="text-lg font-bold mr-auto ">Current Account Balance</h1>

              <div className="flex items-center">
                <button onClick={toggleAccountNumbers} className="bg-[#F0F0F0] p-1 rounded-md" style={{ width: '32px', height: '32px' }}>
                  {showAccountNumbers ? (
                    <img src="../../public/assets/icons/Outlet/eye-hide-svgrepo-com.svg" alt="Hide" style={{ width: '20px', height: '20px' }} />
                  ) : (
                    <img src="../../public/assets/icons/Outlet/eye-show-svgrepo-com.svg" alt="Show" style={{ width: '20px', height: '20px' }} />
                  )}
                </button>
              </div>

              <div className="relative">
                <button onClick={toggleCalendar} className="bg-[#F0F0F0] text-[#555555] px-1 py-1 rounded-md ml-2 flex items-center">
                  {`${formatDateDisplay(startDate)} - ${formatDateDisplay(endDate)}`}
                  <i className="fa fa-calendar ml-2" aria-hidden="true"></i>
                  <i className="fa fa-chevron-down ml-2" aria-hidden="true"></i>
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
                          setIsOpen(false);
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <h1 className="font-semibold text-sm text-[#46237A]">Current Balance</h1>

                    {showAccountNumbers && (
                      <p className="flex items-center" style={{
                        fontFamily: 'Lato',
                        fontSize: '20px',
                        fontWeight: 550,
                        lineHeight: '32.4px',
                        textAlign: 'left'
                      }}>
                        <i className="fa fa-money" aria-hidden="true"></i> ₦ 44,500.00
                      </p>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-sm text-[#46237A]">Income</h2>
                    {showAccountNumbers && (
                      <p className="flex items-center" style={{
                        fontFamily: 'Lato',
                        fontSize: '20px',
                        fontWeight:550,
                        lineHeight: '32.4px',
                        textAlign: 'left'
                      }}>
                        <i className="fa fa-money" aria-hidden="true"></i> ₦ 10,000.00
                      </p>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold text-sm text-[#46237A]">Expense</h2>
                    {showAccountNumbers && (
                      <p className="flex items-center" style={{
                        fontFamily: 'Lato',
                        fontSize: '20px',
                        fontWeight: 550,
                        lineHeight: '32.4px',
                        textAlign: 'left'
                      }}>
                        <i className="fa fa-money" aria-hidden="true"></i> ₦ 10,000.00
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold">Accounts</h1>
              <button className="bg-[#F0F0F0] p-1 rounded-lg" style={{ width: '30px', height: '30px' }}>
                <img src={Plus} alt="Add" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm ">
              {['Main Account', 'School Savings', 'Holiday Plan'].map((account, index) => (
                <div key={index} className="bg-white p-4 shadow rounded-md text-left" style={{ backgroundColor: '#D4F3E7' }}>
                  <h2 className={`font-semibold ${index === 0 ? 'text-[#46237A]' : index === 1 ? 'text-[#46237A]' : index === 2 ? 'text-[#46237A]' : ''}`}>{account}</h2>
                  <p className=" ">
                    <i className="fa fa-money" aria-hidden="true"></i>
                    <p style={{
                      
                      fontFamily: 'Lato',
                      fontSize: '20px',
                      fontWeight: 600,
                      lineHeight: '32.4px',
                     
                    }}>
                       ₦ 10,000.00
                    </p>
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
              <select className="bg-[#F0F0F0] rounded  p-1" value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
                {monthNames.map((month, index) => (
                  <option key={index} value={index}>{month}</option>
                ))}
              </select>
            </div>
            <div className="bg-white p-4  rounded-md">
              <div className="flex items-center justify-between mb-4">
                <img src="../../public/assets/icons/Outlet/image 32.svg" alt="Logo" className="h-12 w-12 mr-4" />
                <h2 className="font-semibold">Income</h2>
                <div className="w-[10rem] bg-gray-200 h-4 rounded-full mx-4">
                  <div className="bg-[#33B786] h-4 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <p className="flex items-center text-[#555555]" style={{
                  fontFamily: 'Lato',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '32.4px',
                  textAlign: 'left',
                  
                }}>
                   ₦ 10,000.00
                </p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <img src="../../public/assets/icons/Outlet/image 34.svg" alt="Logo" className="h-12 w-12 mr-4" />
                <h2 className="font-semibold">Expense</h2>
                <div className="w-[10rem] bg-gray-200 h-4 rounded-full mx-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: "20%" }}></div>
                </div>
                <p className="flex items-center text-[#555555]" style={{
                  fontFamily: 'Lato',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '32.4px',
                  textAlign: 'left'
                }}>
                  <i className="fa fa-money" aria-hidden="true"></i> ₦ 10,000.00
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Section */}
        <div className="flex-1 ">
          <section className="mb-8 xl:mr-44 ">
            <h1 className="text-xl font-bold mb-6 ">Transactions</h1>
            <div className="">
              {transactions.map(transaction => (
                <div key={transaction.id} className="flex justify-between items-center mb-4">
                  <span className="transaction-details">{transaction.name}</span>
                  <span className="transaction-details">{transaction.date}</span>
                  <span className={`font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`} style={{ fontFamily: 'Bebas Neue' }}>
  {transaction.amount < 0 ? `- ${Math.abs(transaction.amount).toLocaleString()}` : `+ ${transaction.amount.toLocaleString()}`}
</span>

                </div>
              ))}
            </div>

            {/* Upgrade to PRO button */}
            <div className="mt-8 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-cover bg-center p-8 text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <h2 className="text-2xl font-bold">Upgrade to PRO</h2>
                <p>Sign in on more than one device</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default OverView;
