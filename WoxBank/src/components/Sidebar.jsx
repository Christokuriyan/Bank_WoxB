import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiDollarSign, FiLogOut, FiBriefcase } from 'react-icons/fi'; // Import icons

const Sidebar = () => {
    return (
        <div className="w-64 bg-white shadow-md p-4 flex flex-col">
            <ul className="space-y-4">
                <li>
                    <Link to="/dashboard/overview" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                        <FiHome className="text-lg" />
                        <span>Overview</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/accounts" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                        <FiBriefcase className="text-lg" />
                        <span>Accounts</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/transactions" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                        <FiDollarSign className="text-lg" />
                        <span>Transactions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/profile" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                        <FiUser className="text-lg" />
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/logout" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
                        <FiLogOut className="text-lg" />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
