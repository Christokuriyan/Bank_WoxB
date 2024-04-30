import React from 'react';

import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const OverView = () => {
  const [dateRange, setDateRange] = useState([null, null]);
    const [isOpen, setIsOpen] = useState(false); // State to handle the visibility of the date picker
    const [startDate, endDate] = dateRange;

    // Function to toggle date picker visibility
    const toggleCalendar = () => {
        setIsOpen(!isOpen);
    };

    // Helper function to format the date for the button display
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
                            <button className="ml-auto">
                                <i className="fa fa-eye-slash" aria-hidden="true"></i> {/* Hide button */}
                            </button>
                            <div className="relative">
                                <button onClick={toggleCalendar} className="bg-green-300 text-white px-4 py-2 rounded-md ml-2 flex items-center">
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
                    </section>

                    <section className="mb-8">
                        <h1 className="text-xl font-bold mb-4">Accounts</h1>
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
//     const [dateRange, setDateRange] = useState([null, null]);
//     const [isOpen, setIsOpen] = useState(false); // State to handle the visibility of the date picker
//     const [startDate, endDate] = dateRange;

//     // Function to toggle date picker visibility
//     const toggleCalendar = () => {
//         setIsOpen(!isOpen);
//     };

//     // Helper function to format the date for the button display
//     const formatDateDisplay = (date) => {
//         if (!date) return 'Select Date';
//         return date.toLocaleDateString();
//     };

//     return (
//         <div className="container mx-auto px-4">
//             <div className="flex">
//                 {/* Left Section */}
//                 <div className="flex-1">
//                     <section className="mb-8">
//                         <div className="flex items-center space-x-4 mb-4">
//                             <i className="fa fa-dollar" aria-hidden="true"></i>
//                             <h1 className="text-xl font-bold">Current Account Balance</h1>
//                             <button className="ml-auto">
//                                 <i className="fa fa-eye-slash" aria-hidden="true"></i> {/* Hide button */}
//                             </button>
//                             <div className="relative">
//                                 <button onClick={toggleCalendar} className="bg-green-300 text-white px-4 py-2 rounded-md ml-2 flex items-center">
//                                     {`${formatDateDisplay(startDate)} - ${formatDateDisplay(endDate)}`}
//                                     <i className="fa fa-calendar ml-2" aria-hidden="true"></i>
//                                     <i className="fa fa-chevron-down ml-2" aria-hidden="true"></i> {/* Dropdown symbol */}
//                                 </button>
//                                 {isOpen && (
//                                     <div className="absolute top-full mt-2 z-10">
//                                         <DatePicker
//                                             selectsRange
//                                             startDate={startDate}
//                                             endDate={endDate}
//                                             onChange={(update) => {
//                                                 setDateRange(update);
//                                                 if (update[0] && update[1]) {
//                                                     setIsOpen(false); // Close picker after range is selected
//                                                 }
//                                             }}
//                                             inline
//                                         />
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                         {/* Content remains the same */}
//                     </section>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OverView;
