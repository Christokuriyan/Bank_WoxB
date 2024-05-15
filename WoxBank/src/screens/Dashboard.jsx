
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import SearchIcon from '../../public/assets/dashboard/search_icon.svg';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        event.preventDefault();
        // Implement your search logic here
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 ml-[60px] mt-[55px] ">

            <div className="flex flex-grow ">
                {/* Sidebar Navigation */}
                <div className="w-64 bg-white p-4   ">
                    <div className="flex items-center space-x-4 xl:mb-[84px]  ">
                        <img src="../../public/assets/icons/Wox Bank (1).svg" alt="App Logo" className="scale-100" />
                    </div >
                    <ul className="space-y-7 ml-8">
                        <li>
                            <Link to="/dashboard/overview" className="flex items-center space-x-4  text-gray-600 hover:text-[#33B786]">
                                <img src="../../public/assets/icons/Over.svg" alt="Overview Icon" className="h-6 w-6" />
                                <span>Overview</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard/accounts" className="flex items-center space-x-4 text-gray-600 hover:text-[#33B786]">
                                <img src="../../public/assets/icons/account.svg" alt="Accounts Icon" className="h-6 w-6" />
                                <span>Accounts</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/Transaction" className="flex items-center space-x-4 text-gray-600 hover:text-[#33B786]">
                                <img src="../../public/assets/icons/transaction.svg" alt="Transaction Icon" className="h-6 w-6" />
                                <span>Transaction</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/profile" className="flex items-center space-x-4 text-gray-600 hover:text-[#33B786]">
                                <img src="../../public/assets/icons/profile.svg" alt="Profile Icon" className="h-6 w-6" />
                                <span>Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col flex-grow bg-white justify-start xl-items-start ">

                    <div className="bg-white mb-16  flex justify-start ">

                        <div className="flex-grow flex justify-start items-center ml-8 relative">
                            <h1 className="text-3xl font-semibold">OverView</h1>
                        </div>


                        <div className="flex-grow flex justify-end items-center xl:mr-[90px] ">
                            <div className="text-right">
                                <p className="text-sm font-semibold" style={{ color: '#33B786' }}>Maureen Oguche</p>

                                <p className="text-2xl font-semibold">1234567890</p>
                            </div>
                        </div>

                        <div className="flex place-items-start space-x-6 pr-20 flex-grow">

                            <form onSubmit={handleSearch} className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-3 py-1 "
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <img src={SearchIcon} alt="Search" className="w-4 h-4 " />
                                </button>
                            </form>

                            <button className="p-2 rounded-full hover:bg-gray-200">
                                <img src="../../public/assets/icons/notification bell.svg" alt="Notifications" className="h-5 w-5" />
                            </button>

                            <button >
                            <img src="../../public/assets/icons/profilepic.png" alt="User Profile" className="h-10 w-10 rounded-full " />
                            </button>
                        </div>
                    </div>

                    {/* Content Outlet */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
