
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex flex-grow">
                {/* Sidebar Navigation */}
                <div className="w-64 bg-white p-4 shadow-md">
                    <div className="flex items-center space-x-4 mb-8">
                        <img src="../../public/assets/icons/Wox Bank (1).svg" alt="App Logo" className="scale-75" />
                    </div>
                    <ul className="space-y-4">
                        <li>
                            <Link to="/dashboard/overview" className="flex items-center space-x-2 text-gray-600 hover:text-[#33B786]">
                                <img src="../../public/assets/icons/Over.svg" alt="Overview Icon" className="h-6 w-6"/>
                                <span>Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/accounts" className="flex items-center space-x-2 text-gray-600 hover:text-[#33B786]">
                                <img src="../../public/assets/icons/account.svg" alt="Accounts Icon" className="h-6 w-6"/>
                                <span>Accounts</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/Transaction" className="flex items-center space-x-2 text-gray-600 hover:text-[#33B786]">
                                <img src="../../public/assets/icons/transaction.svg" alt="Transaction Icon" className="h-6 w-6"/>
                                <span>Transaction</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/profile" className="flex items-center space-x-2 text-gray-600 hover:text-[#33B786]">
                                <img src="../../public/assets/icons/profile.svg" alt="Profile Icon" className="h-6 w-6"/>
                                <span>Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                
                <div className="flex flex-col flex-grow bg-white ">
                    
                    <div className="bg-white p-4  flex justify-between items-center">
                        
                        <div className="flex-grow flex justify-start items-center ml-4">
                            <h1 className="text-lg font-bold">OverView</h1>
                        </div>

                        
                        <div className="flex-grow flex justify-end items-center mr-4">
                            <div className="text-right">
                            <p className="text-sm" style={{ color: '#33B786' }}>Maureen Oguche</p>

                                <p className="text-lg font-bold">1234567890</p>
                            </div>
                        </div>

                       
                        <div className="flex items-center space-x-4">
                            
                            <input 
                                type="text"
                                placeholder="Search..."
                                className="hidden md:block px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            
                            <button className="p-2 rounded-full hover:bg-gray-200">
                                <img src="../../public/assets/icons/notification bell.svg" alt="Notifications" className="h-6 w-6" />
                            </button>
                            
                          
                            <img src="../../public/assets/icons/profilepic.png" alt="User Profile" className="h-10 w-10 rounded-full border-2 border-blue-500" />
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
