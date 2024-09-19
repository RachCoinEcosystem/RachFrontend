import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBullhorn,
  FaSeedling,
  FaInbox,
  FaTasks,
  FaPalette,
  FaShoppingCart,
  FaChartBar,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa'; // Import icons
import logo from '../../../assets/logo.png';
import Ads from '../../../assets/me.png';

// Sidebar Item Component
const SidebarItem = ({ to, icon: Icon, label, isOpen }) => (
  <Link to={to} className="block py-2 px-4 rounded bg-gray-700 hover:bg-blue-600 flex items-center">
    <Icon className="mr-2" />
    {isOpen && <span>{label}</span>}
  </Link>
);

const Sidebar = () => {
  // Set the sidebar to open by default
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Toggle Button */}
            <button onClick={toggleSidebar} className="text-white mb-4">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Logo */}
            {isOpen && (
              <div className="flex flex-col items-center mb-6">
                <img src={logo} alt="RachCoin Logo" className="rounded-full w-24 h-24 mb-2" />
                <Link to="/" className="text-lg font-semibold hover:text-blue-500">
                  <h1><b>RACHCOIN</b></h1>
                </Link>
                <p className="text-sm text-gray-400">info@rachcoin.io</p>
              </div>
            )}

            {/* Navigation */}
            <nav className="space-y-2 m-4">
              <SidebarItem to="/dashboard" icon={FaHome} label="Overview" isOpen={isOpen} />
              <SidebarItem to="/dashboard/view-ads" icon={FaBullhorn} label="Broadcast Ads" isOpen={isOpen} />
              <SidebarItem to="/dashboard/farming" icon={FaSeedling} label="Farming" isOpen={isOpen} />
              <SidebarItem to="/dashboard/inbox" icon={FaInbox} label="Inbox" isOpen={isOpen} />
              <SidebarItem to="/dashboard/micro-jobs" icon={FaTasks} label="Micro-jobs" isOpen={isOpen} />
              <SidebarItem to="/dashboard/nft" icon={FaPalette} label="NFT" isOpen={isOpen} />
              <SidebarItem to="/dashboard/marketplace" icon={FaShoppingCart} label="NFT Market" isOpen={isOpen} />
              <SidebarItem to="/dashboard/stake" icon={FaChartBar} label="Stake" isOpen={isOpen} />
            </nav>
          </div>

          {/* Sponsored Ad */}
          {isOpen && (
            <div className="mt-6 m-2 p-2 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-center text-white font-semibold mb-2">Sponsored Ad</h3>
              <div className="w-full h-36 bg-gray-600 rounded-md overflow-hidden">
                <img
                  src={Ads}
                  alt="Advertisement"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Settings and Logout */}
          <div className="space-y-2 mt-6 m-4">
            <SidebarItem to="/dashboard/setting" icon={FaCog} label="Setting" isOpen={isOpen} />
            <button className="w-full py-2 px-4 bg-red-600 hover:bg-red-500 rounded flex items-center">
              <FaSignOutAlt className="mr-2" /> {isOpen && <span>Log out</span>}
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
