import React from 'react';
import logo from '../assets/logo.png';
import Footer from './layout/Footer';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 min-h-screen flex flex-col justify-between items-center text-white">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow space-y-8 text-center">
        {/* RachCoin Logo */}
        <div>
          <img src={logo} alt="RachCoin Logo" className="w-40 h-40 md:w-60 md:h-60 object-cover" />
        </div>

        {/* Catchy Headline */}
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to RachCoin</h1>
        <p className="max-w-md text-lg md:text-xl font-light text-gray-200">
          Empowering users with blockchain technology. Stake, earn, trade, and grow your assets in a decentralized future.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
        <Link to="/login" className="bg-blue-600 px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">Login</Link>
          <Link to="/explore" className="bg-purple-600 px-6 py-3 rounded-md text-lg hover:bg-purple-700 transition">Explore</Link>
        </div>
      </main>

      {/* Attraction Section */}
      <section className="w-full bg-white text-black py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Token Staking */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Token Staking</h3>
            <p className="text-gray-600">
              Stake your RachCoin and earn rewards daily. A secure way to grow your assets over time.
            </p>
          </div>

          {/* Feature 2: NFT Marketplace */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">NFT Marketplace</h3>
            <p className="text-gray-600">
              Buy, sell, and trade unique digital assets. Discover exclusive NFTs and build your collection.
            </p>
          </div>

          {/* Feature 3: Micro Jobs */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Micro Jobs</h3>
            <p className="text-gray-600">
              Earn RachCoin by completing simple tasks. Turn your skills into earnings with micro jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
