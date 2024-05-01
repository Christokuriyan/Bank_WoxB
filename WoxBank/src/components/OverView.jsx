




import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OverView = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [isOpen, setIsOpen] = useState(false); // State to handle the visibility of the date picker
  const [showAccountNumbers, setShowAccountNumbers] = useState(true); // State to toggle account number visibility
  const [startDate, endDate] = dateRange;

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
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="text-xl font-bold">Current Account Balance</h1>
              <button onClick={toggleAccountNumbers} className="bg-[#F0F0F0] p-2 rounded-md" style={{ width: '40px', height: '40px' }}>
                {showAccountNumbers ? (
                  <img src="../../public/assets/icons/Outlet/eye-hide-svgrepo-com.svg" alt="Hide" style={{ width: '24px', height: '24px' }} />
                ) : (
                  <img src="../../public/assets/icons/Outlet/eye-show-svgrepo-com.svg" alt="Show" style={{ width: '24px', height: '24px' }} />
                )}
              </button>
              <div className="relative">
                <button onClick={toggleCalendar} className="bg-[#F0F0F0] text-[ #555555] px-4 py-2 rounded-md ml-2 flex items-center">
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
            
                        <h1 className="text-xl font-bold mb-4">Accounts </h1>
                        
                        <div className="grid grid-cols-3 gap-4">
                            {['Main Account', 'Savings Account', 'Investment Account'].map((account, index) => (
                                <div key={index} className="bg-white p-4 shadow rounded-md text-center"style={{ backgroundColor: '#D4F3E7' }}>
                                    <h2 className="font-semibold">{account}</h2>
                                    <p className="flex justify-center items-center space-x-2">
                                        <i className="fa fa-money" aria-hidden="true"></i>
                                        <span>₦ 10,000.00</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                    </section>

                    <section>
                        <h1 className="text-xl font-bold mb-4 flex items-center space-x-2">
                            <i className="fa fa-bar-chart" aria-hidden="true"></i>
                            <span>Statistics</span>
                        </h1>
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
          {/* Placeholder or additional content goes here */}
        </div>
      </div>
    </div>
  );
}

export default OverView;



// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const OverView = () => {
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [showAccountNumbers, setShowAccountNumbers] = useState(true);
//   const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
//   const [startDate, endDate] = dateRange;

//   const toggleCalendar = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleAccountNumbers = () => {
//     setShowAccountNumbers(!showAccountNumbers);
//   };

//   const formatDateDisplay = (date) => {
//     if (!date) return 'Select Date';
//     return date.toLocaleDateString();
//   };

//   const months = [
//     { value: 1, label: 'January' },
//     { value: 2, label: 'February' },
//     { value: 3, label: 'March' },
//     { value: 4, label: 'April' },
//     { value: 5, label: 'May' },
//     { value: 6, label: 'June' },
//     { value: 7, label: 'July' },
//     { value: 8, label: 'August' },
//     { value: 9, label: 'September' },
//     { value: 10, label: 'October' },
//     { value: 11, label: 'November' },
//     { value: 12, label: 'December' }
//   ];

//   return (
//     <div className="container mx-auto px-4">
//       <div className="flex">
//         <div className="flex-1">
//           <section className="mb-8">
//             <div className="flex items-center space-x-4 mb-4">
//               <h1 className="text-xl font-bold">Current Account Balance</h1>
//               <button onClick={toggleAccountNumbers} className="bg-[#F0F0F0] p-2 rounded-md" style={{ width: '40px', height: '40px' }}>
//                 {showAccountNumbers ? (
//                   <img src="../../public/assets/icons/Outlet/eye-hide-svgrepo-com.svg" alt="Hide" style={{ width: '24px', height: '24px' }} />
//                 ) : (
//                   <img src="../../public/assets/icons/Outlet/eye-show-svgrepo-com.svg" alt="Show" style={{ width: '24px', height: '24px' }} />
//                 )}
//               </button>
//               <div className="relative">
//                 <button onClick={toggleCalendar} className="bg-[#F0F0F0] text-[ #555555] px-4 py-2 rounded-md ml-2 flex items-center">
//                   {`${formatDateDisplay(startDate)} - ${formatDateDisplay(endDate)}`}
//                   <i className="fa fa-calendar ml-2" aria-hidden="true"></i>
//                   <i className="fa fa-chevron-down ml-2" aria-hidden="true"></i>
//                 </button>
//                 {isOpen && (
//                   <div className="absolute top-full mt-2 z-10">
//                     <DatePicker
//                       selectsRange
//                       startDate={startDate}
//                       endDate={endDate}
//                       onChange={(update) => {
//                         setDateRange(update);
//                         if (update[0] && update[1]) {
//                           setIsOpen(false);
//                         }
//                       }}
//                       inline
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>

//             <section className="mb-8">
//               <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-xl font-bold">Accounts</h1>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Account</button>
//               </div>
//               {/* Existing account display code */}
//             </section>

//             <section>
//               <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-xl font-bold flex items-center space-x-2">
//                   <i className="fa fa-bar-chart" aria-hidden="true"></i>
//                   <span>Statistics</span>
//                 </h1>
//                 <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} className="form-select block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
//                   {months.map((month) => (
//                     <option key={month.value} value={month.value}>
//                       {month.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {/* Existing statistics display code */}
//             </section>
//           </section>
//         </div>
//         {/* Right Section Placeholder */}
//         <div className="flex-1">
//           {/* Placeholder or additional content goes here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverView;
