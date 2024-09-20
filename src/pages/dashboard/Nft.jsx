import React from 'react';
import FutureCarImg from '../../assets/nft/nft-owned1.png';
import EmeraldEyeImg from '../../assets/nft/nft-owned2.png';
import GalaxyImg from '../../assets/nft/nft-owned3.png';
import DigitalImg from '../../assets/nft/nft-owned9.png';

import NftCard from './components/NftCard';

const NftFarming = () => {
  const handleSell = (title) => {
    console.log(`Selling ${title}`);
    // Add sell logic here
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      {/* Main Container */}
      <div className="flex flex-grow">
        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="mb-8">
            <div className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold">NFT Creation</h1>
              <p className="mt-2 text-lg">Create NFTs on our platform to earn RachCoins.</p>
            </div>
          </section>

          {/* NFT Creation Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Your NFT</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form>
                <div className="mb-4">
                  <label htmlFor="nft-name" className="block text-sm font-medium text-gray-700">NFT Name</label>
                  <input type="text" id="nft-name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="nft-description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea id="nft-description" rows="4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="nft-image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                  <input type="file" id="nft-image" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                </div>
                <div className="mb-4">
                  <label htmlFor="nft-price" className="block text-sm font-medium text-gray-700">Price (in RachCoin)</label>
                  <input type="number" id="nft-price" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Mint NFT</button>
              </form>
            </div>
          </section>

          {/* Your NFTs Section (List owned NFTs) */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your NFTs</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-4">Select the NFT you want to sell from the list of your NFTs:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <NftCard
                  image={FutureCarImg}
                  title="Future Car"
                  description="A futuristic, low-slung sports car with a sleek, aerodynamic design."
                  price="100"
                  buttonText="Sell"
                  onButtonClick={() => handleSell('Future Car')}
                />
                <NftCard
                  image={EmeraldEyeImg}
                  title="Emerald Eye"
                  description="A digital entity, born of ones and zeros, manifests itself as a luminous green creature."
                  price="200"
                  buttonText="Sell"
                  onButtonClick={() => handleSell('Emerald Eye')}
                />
              </div>
            </div>
          </section>

          {/* HOT NFT Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">HOT NFT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NftCard
                image={GalaxyImg}
                title="Galaxy Collection"
                description="A breathtaking collection of celestial-themed NFTs."
                price="500"
                buttonText="Buy Now"
                onButtonClick={() => console.log('Buying Galaxy Collection')}
              />
              <NftCard
                image={DigitalImg}
                title="Digital Landscape"
                description="A stunning representation of a serene landscape captured in a digital format."
                price="300"
                buttonText="Buy Now"
                onButtonClick={() => console.log('Buying Digital Landscape')}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default NftFarming;
