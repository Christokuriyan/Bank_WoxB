// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
                <img src="/logo192.png" alt="App Logo" className="h-8 w-8" />
                <span className="text-lg font-bold text-gray-800">MyApp</span>
            </div>

            {/* Search Bar */}
            <div className="flex-grow mx-4">
                <input 
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Profile Section */}
            <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-blue-500 hover:text-blue-700">Profile</Link>
                <img src="/user-avatar.png" alt="User Profile" className="h-10 w-10 rounded-full border-2 border-blue-500" />
            </div>
        </div>
    );
};

export default Dashboard;
