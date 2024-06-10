import React, { useState } from 'react';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import profilePic from '/flogo.png';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Crypto Dashboard</h1>
      </div>
      <div className="flex items-center space-x-8 ">
        <div className="relative">
          <input
            type="text"
            className="p-2 rounded text-black"
            placeholder="Search..."
          />
          <FaSearch className="absolute top-3 right-3 text-gray-400" />
        </div>
        <FaEnvelope className="text-xl cursor-pointer hover:text-gray-300 transition duration-300" />
        <FaBell className="text-xl cursor-pointer hover:text-gray-300 transition duration-300" />
        <div className="relative">
          <img
            src={profilePic}
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
              <ul>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Settings</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

