import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaWikipediaW,
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaFacebookF,
  FaGithub,
  FaArchway,
  FaShoppingCart,
  FaMoneyBillAlt,
  FaWallet,
  FaBuilding,
  FaBell,
} from 'react-icons/fa';

const socialMenuItems = [
  { label: "Documentation", href: "#", icon: FaWikipediaW },
  { label: "Discord", href: "http://discord.RachCoinEcosystem", icon: FaDiscord },
  { label: "Telegram", href: "#", icon: FaTelegramPlane },
  { label: "Twitter", href: "https://twitter.com/RachCoinEcosystem", icon: FaTwitter },
  { label: "Youtube", href: "#", icon: FaYoutube },
  { label: "Medium", href: "#", icon: FaMedium },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Github", href: "https://github.com/RachCoinEcosystem", icon: FaGithub },
  { label: "Bridge", href: "#", icon: FaArchway },
];

const HeroSection = () => {
  const [showSocialMenu, setShowSocialMenu] = useState(false);

  const toggleSocialMenu = () => {
    setShowSocialMenu(!showSocialMenu);
  };

  return (
    <div className="flex flex-col items-center mt-8 lg:mt-24 animate-fadeIn xl:px-24">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide font-extrabold text-white">
        RACHCOIN
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
          {" "}
          ECOSYSTEM
        </span>
      </h1>
      <p className="mt-8 text-xl text-center text-neutral-100 max-w-3xl animate-slideUp leading-relaxed">
        Rachcoin Ecosystem empowers you to take control of your finances and
        safeguard your interactions. We're a leading platform for
        privacy-protected DeFi (decentralized finance) and encrypted
        communication. Experience the freedom to buy, earn, hold, and build
        within a user-friendly environment powered by blockchain technology.
        Join us and redefine the future of finance and communication, where
        privacy and control go hand-in-hand!
      </p>
      <div className="flex justify-center mt-12 animate-bounce space-x-4">
        <Link
          to="/signup"
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 py-3 px-6 rounded-md text-lg font-semibold hover:text-gray-800 transition duration-300"
        >
          Sign Up
        </Link>
        <Link
          to="https://github.com/RachCoinEcosystem/Rachcoin-Documentation"
          className="py-3 px-6 text-white rounded-md border border-yellow-500 text-lg font-semibold hover:bg-gray-200 hover:text-gray-800 transition duration-300"
        >
          Documentation
        </Link>
      </div>
      <div>
        <ul className="majorLinks grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mt-8">
          {[
            { label: "Buy", icon: FaShoppingCart, href: "#markets" },
            { label: "Earn", icon: FaMoneyBillAlt, href: "#features" },
            { label: "Hodl", icon: FaWallet, href: "#wallets" },
            { label: "Build", icon: FaBuilding, href: "#build" },
          ].map((item, index) => (
            <li
              key={index}
              className="majorLink p-4 bg-neutral-800 rounded-md hover:bg-yellow-500 transition-all duration-300 ease-in-out border border-yellow-500"
            >
              <Link
                to={item.href}
                className="link flex items-center text-lg text-white "
              >
                <item.icon className="mr-2 text-2xl" /> {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed top-1/2 right-3 transform -translate-y-1/2">
        <button onClick={toggleSocialMenu} className="bg-neutral-800 p-4 rounded-lg shadow-lg">
          <FaBell className="text-2xl text-yellow-500" />
        </button>
        {showSocialMenu && (
          <div id="socialMenu" className="list-none mt-4 bg-neutral-800 p-4 rounded-lg shadow-lg">
            <ul className="space-y-4">
              {socialMenuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-yellow-500 transition-colors duration-300"
                  >
                    <item.icon className="text-2xl text-yellow-500" />
                    <span className="text-lg text-white">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
