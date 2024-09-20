import React from 'react';
import NftCard from './components/NftCard';

import ChronotImg from '../../assets/nft/nft-owned4.png';
import BonanzaImg from '../../assets/nft/nft-owned10.png';
import CrusaderImg from '../../assets/nft/nft-owned14.png';

const MarketPlace = () => {
  const nftData = [
    {
      image: ChronotImg,
      title: "Chronotigris",
      description: "A majestic tiger-like creature with a striking golden circular frame adorning its head...",
      price: 100,
    },
    {
      image: BonanzaImg,
      title: "Bitcoin Bonanza",
      description: "A vibrant and dynamic scene depicting the world of Bitcoin...",
      price: 200,
    },
    {
      image: CrusaderImg,
      title: "Crypto Crusader",
      description: "A mysterious figure, cloaked in darkness and wielding a staff...",
      price: 150,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Main Container */}
      <div className="flex flex-grow">
        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="mb-8">
            <div className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold">Explore NFTs</h2>
              <p className="mt-2 text-lg">
                Browse through the latest NFTs available on the marketplace. You can view, buy, and explore various tokens created by users on the platform.
              </p>
            </div>
          </section>

          {/* Search Bar */}
          <div className="flex justify-between mb-6">
            <input type="text" placeholder="Search NFTs..." className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            <button className="ml-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Search</button>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nftData.map((nft, index) => (
              <NftCard
                key={index}
                image={nft.image}
                title={nft.title}
                description={nft.description}
                price={nft.price}
                buttonText="Buy"
                onButtonClick={() => console.log(`Buying ${nft.title}`)}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-between items-center">
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">Previous</button>
            <span className="text-gray-700">Page 1 of 5</span>
            <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MarketPlace;
