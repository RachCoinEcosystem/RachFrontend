import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/flogo.png";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaExchangeAlt,
  FaHistory,
  FaCoins,
  FaUser,
  FaPaintBrush,
  FaStore,
  FaWater,
  FaChartLine,
  FaVoteYea,
  FaGamepad,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import Ads from "./AdsCard";

const menuItems = [
  { path: "/dashboard/", label: "Home", icon: <FaHome /> },
  {
    path: "/dashboard/currency-exchange",
    label: "Currency Exchange",
    icon: <FaExchangeAlt />,
  },
  {
    path: "/dashboard/history",
    label: "Transaction History",
    icon: <FaHistory />,
  },
  { path: "/dashboard/stake", label: "Staking", icon: <FaCoins /> },
  { path: "/dashboard/profile", label: "Profile", icon: <FaUser /> },
  {
    path: "/dashboard/nft-minter",
    label: "NFT Minter",
    icon: <FaPaintBrush />,
  },
  { path: "/dashboard/nft-market", label: "NFT Market", icon: <FaStore /> },
  { path: "/dashboard/pool", label: "Pool", icon: <FaWater /> },
  { path: "/dashboard/trading", label: "Trading", icon: <FaChartLine /> },
  { path: "/dashboard/vote", label: "Vote", icon: <FaVoteYea /> },
  { path: "/dashboard/game", label: "Games", icon: <FaGamepad /> },
];

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="md:hidden text-black p-4" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64 w-15 bg-gray-800 text-white min-h-screen p-4`}
      >
        <nav>
          <div className="flex items-center mb-8">
            <Link
              to="/"
              className="btn text-yellow btn-ghost normal-case text-xl flex items-center"
              onClick={toggleSidebar}
            >
              <img src={logo} className="w-10 h-10" alt="Logo" />
              <span className="ml-2 hidden md:block text-yellow-500">
                RachCoin
              </span>
            </Link>
          </div>
          <ul className="space-y-2 mb-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center justify-center md:justify-start hover:text-lg ${
                    location.pathname === item.path ? "bg-blue-700 text-lg" : ""
                  } p-2 rounded`}
                  onClick={toggleSidebar}
                >
                  <span className="mr-2">{item.icon}</span>
                  <span className="hidden md:block">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {/* <div id="ads" className="p-4 bg-gray-800 shadow rounded">
            <Link
              to="/dashboard/ads"
              className={`flex items-center justify-center md:justify-start ${
                location.pathname === "/dashboard/ads"
                  ? "bg-blue-700 "
                  : ""
              } p-2 rounded transition duration-300`}
              onClick={toggleSidebar}
            >
              <span className="mr-2">
                <FaAd />
              </span>
              <span className="hidden md:block text-yellow-500"><b>Ads</b></span>
              <div className="mt-2">
              <img
                src={blacklogo}
                alt="Dummy Ad"
                className="w-full rounded mb-4"
              />
              <p className="text-white">
                This is a dummy ad content. Click the link above to manage your
                ads in the dashboard.
              </p>
            </div>
            </Link>
          </div> */}
          <Ads toggleSidebar={toggleSidebar} />

          <ul className="space-y-2 mt-6 mb-8">
            <li>
              <Link
                to="/dashboard/settings"
                className={`flex items-center justify-center md:justify-start hover:text-lg ${
                  location.pathname === "/dashboard/settings"
                    ? "bg-gray-700"
                    : ""
                } p-2 rounded`}
                onClick={toggleSidebar}
              >
                <span className="mr-2">
                  <FaCog />
                </span>
                <span className="hidden md:block">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="flex items-center justify-center md:justify-start hover:text-lg p-2 rounded"
                onClick={toggleSidebar}
              >
                <span className="mr-2">
                  <FaSignOutAlt />
                </span>
                <span className="hidden md:block">Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
