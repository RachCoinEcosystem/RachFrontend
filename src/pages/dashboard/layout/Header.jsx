import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';


const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={logo}  alt="RachCoin Logo" className="w-10 h-10" />
        <Link to="/" className="text-xl font-bold hover:text-blue-500 ">
          <h1>RachCoin Platform</h1>
        </Link>
      </div>
      <nav className="space-x-4">
        <Link to="/" className=" hover:text-blue-500">Home</Link>
        <Link to="/dashboard" className=" hover:text-blue-500">Dashboard</Link>
        <Link to="/profile" className=" hover:text-blue-500">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
