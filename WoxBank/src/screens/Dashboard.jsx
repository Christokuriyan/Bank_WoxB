
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchIcon from '../../public/assets/dashboard/search_icon.svg';

// Define the icon paths for active and inactive states
const iconPaths = {
    overview: {
        active: "../../public/assets/icons/Outlet/overview_color.svg",
        inactive: "../../public/assets/icons/Outlet/overview_plain.svg"
    },
    accounts: {
        active: "../../public/assets/icons/Outlet/Account_color.svg",
        inactive: "../../public/assets/icons/account.svg"
    },
    transaction: {
        active: "../../public/assets/icons/Outlet/Transaction_color.svg",
        inactive: "../../public/assets/icons/transaction.svg"
    },
    profile: {
        active: "../../public/assets/icons/Outlet/Profile_color.svg",
        inactive: "../../public/assets/icons/profile.svg"
    }
};
x
const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [heading, setHeading] = useState("Overview");

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = location.pathname;
        if (path.includes('/dashboard/accounts')) {
            setHeading("Accounts");
        } else if (path.includes('/dashboard/transaction')) {
            setHeading("Transaction");
        } else if (path.includes('/dashboard/profile')) {
            setHeading("Profile");
        } else {
            setHeading("Overview");
        }
    }, [location.pathname]);

    const handleSearch = (event) => {
        event.preventDefault();
        // Implement your search logic here
        console.log("Searching for:", searchTerm);
    };

    const handleLogout = () => {
        navigate('/LogoutConfirmation');
    };

    return (
        <div className="flex flex-col min-h-screen bg-red-100 ml-0 sm:ml-[60px] mt-[55px]">
            <div className="flex flex-grow">
                {/* Sidebar Navigation */}
                <div style={{ backgroundColor: '#f5fcf9' }} className="hidden md:flex w-64 p-4 flex-col justify-between">
                    <div>
                        <div className="flex items-center space-x-4 xl:mb-[84px] sm:mb-[80px]">
                            <img src="../../public/assets/icons/Wox Bank (1).svg" alt="App Logo" className="scale-100" />
                        </div>
                        <ul className="space-y-7 ml-8">
                            <li>
                                <NavLink
                                    to="/dashboard/overview"
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 ${isActive ? 'text-[#33B786]' : 'text-gray-600'} hover:text-[#33B786]`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <img src={isActive ? iconPaths.overview.active : iconPaths.overview.inactive} alt="Overview Icon" className="h-6 w-6" />
                                            <span>Overview</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/accounts"
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 ${isActive ? 'text-[#33B786]' : 'text-gray-600'} hover:text-[#33B786]`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <img src={isActive ? iconPaths.accounts.active : iconPaths.accounts.inactive} alt="Accounts Icon" className="h-6 w-6" />
                                            <span>Accounts</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/transaction"
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 ${isActive ? 'text-[#33B786]' : 'text-gray-600'} hover:text-[#33B786]`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <img src={isActive ? iconPaths.transaction.active : iconPaths.transaction.inactive} alt="Transaction Icon" className="h-6 w-6" />
                                            <span>Transaction</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/profile"
                                    className={({ isActive }) =>
                                        `flex items-center space-x-4 ${isActive ? 'text-[#33B786]' : 'text-gray-600'} hover:text-[#33B786]`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            <img src={isActive ? iconPaths.profile.active : iconPaths.profile.inactive} alt="Profile Icon" className="h-6 w-6" />
                                            <span>Profile</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        </ul>
                        <div className='pt-64 ml-8'>
                            <button 
                                onClick={handleLogout} 
                                className="flex items-center space-x-4 text-gray-600 hover:text-[#33B786]"
                            >
                                <img src="../../public/assets/icons/Outlet/fi-rr-arrow-left.svg" alt="Logout Icon" className="h-6 w-6" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-grow bg-[#f5fcf9] justify-start xl-items-start">
                    <div className="hidden md:flex bg-[#f5fcf9] mb-16 justify-start">
                        <div className="flex-grow flex justify-start items-center ml-8 relative">
                            <h1 className="text-3xl font-semibold">{heading}</h1>
                        </div>
                        <div className="hidden md:flex flex-grow justify-end items-center xl:mr-[90px]">
                            <div className="text-right">
                                <p className="text-sm font-semibold" style={{ color: '#33B786' }}>Maureen Oguche</p>
                                <p className="text-2xl font-semibold">1234567890</p>
                            </div>
                        </div>
                        <div className="hidden md:flex place-items-start space-x-6 pr-20 flex-grow">
                            <form onSubmit={handleSearch} className="relative" style={{ backgroundColor: '#f5fcf9' }}>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-3 py-1 bg-[#f5fcf9]"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <img src={SearchIcon} alt="Search" className="w-4 h-4" />
                                </button>
                            </form>
                            <button className="p-2 rounded-full hover:bg-gray-200">
                                <img src="../../public/assets/icons/notification bell.svg" alt="Notifications" className="h-5 w-5" />
                            </button>
                            <button>
                                <img src="../../public/assets/icons/profilepic.png" alt="User Profile" className="h-10 w-10 rounded-full" />
                            </button>
                        </div>
                    </div>
                    {/* Content Outlet  */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
