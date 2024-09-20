import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './layout/Footer';
import Card from '../components/FeatureCard';

// Importing images
import tokenFarmImg from '../assets/explore/tokenfarm.png';
import stakingImg from '../assets/explore/staking.png';
import microJobImg from '../assets/explore/micro-job.png';
import nftImg from '../assets/nft/nft-owned1.png';
import earnRachCoinImg from '../assets/explore/paidread1.png';
import paidReadImg from '../assets/explore/broadcast.png';

function Explore() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-indigo-600 text-white text-center py-6">
        <h1 className="text-4xl font-bold">Explore RachCoin Opportunities</h1>
        <p className="mt-2 text-lg">Maximize your earnings with our diverse offerings!</p>
        <div className="space-x-4 space-y-4 pt-3">
          <Link to="/login" className="px-4 py-2 bg-white text-indigo-600 rounded hover:bg-indigo-500 transition">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-white text-indigo-600 rounded hover:bg-indigo-500 transition">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Explore Section */}
      <section className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          image={tokenFarmImg}
          title="Token Farming"
          description="Participate in farming to earn RachCoins by staking your tokens."
          link="/dashboard/farming"
          linkText="Start Farming"
        />
        <Card
          image={stakingImg}
          title="Staking"
          description="Stake your RachCoins to earn rewards and secure the network."
          link="/dashboard/stake"
          linkText="Start Staking"
        />
        <Card
          image={microJobImg}
          title="Micro-Jobs"
          description="Complete micro jobs to earn RachCoins for small tasks."
          link="/dashboard/micro-jobs"
          linkText="Find Jobs"
        />
        <Card
          image={nftImg}
          title="NFT Creation/Trading"
          description="Create and trade NFTs on our platform to earn RachCoins."
          link="/dashboard/nft"
          linkText="Start Creating"
        />
        <Card
          image={paidReadImg}
          title="Paid to Read Ads"
          description="Broadcast your ads to our audience and pay with RachCoins."
          link="/dashboard/inbox"
          linkText="Broadcast Ads"
        />
        <Card
          image={earnRachCoinImg}
          title="Earn RachCoin"
          description="Earn RachCoins by completing tasks, referrals, and more."
          link="/dashboard/friends"
          linkText="Start Earning"
        />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Explore;
