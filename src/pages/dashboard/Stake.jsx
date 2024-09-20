import React from 'react';

const Staking = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">

      {/* Main Container */}
      <div className="flex flex-grow">

        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="mb-8">
            <div className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold">Staking</h2>
              <p className="mt-2 text-lg">
                Stake your RachCoins to earn rewards. View your staked tokens and staking options below.
              </p>
            </div>
          </section>

          {/* Current Staked Tokens */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Staked Tokens</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Staked RachCoin */}
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">RachCoin</h4>
                <p className="text-2xl font-bold text-blue-800">5000</p>
                <p className="text-gray-600">APY: 10%</p>
              </div>

              {/* Staked Other Token Example */}
              <div className="bg-green-100 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-green-700 mb-2">Other Token</h4>
                <p className="text-2xl font-bold text-green-800">1200</p>
                <p className="text-gray-600">APY: 8%</p>
              </div>
            </div>
          </div>

          {/* Available Staking Options */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Staking Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Staking Option 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Stake RachCoin</h4>
              <p className="text-sm text-gray-600 mb-4">Earn 10% APY by staking your RachCoin tokens.</p>
              <p className="text-sm text-gray-800 mb-2"><strong>Minimum Stake:</strong> 100 RachCoin</p>
              <p className="text-sm text-gray-800 mb-4"><strong>Lockup Period:</strong> 30 days</p>
              <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Stake Now</button>
            </div>

            {/* Staking Option 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Stake Other Token</h4>
              <p className="text-sm text-gray-600 mb-4">Earn 8% APY by staking other tokens.</p>
              <p className="text-sm text-gray-800 mb-2"><strong>Minimum Stake:</strong> 50 Tokens</p>
              <p className="text-sm text-gray-800 mb-4"><strong>Lockup Period:</strong> 45 days</p>
              <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">Stake Now</button>
            </div>

            {/* Staking Option 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Special Token Staking</h4>
              <p className="text-sm text-gray-600 mb-4">Earn up to 12% APY on special token staking.</p>
              <p className="text-sm text-gray-800 mb-2"><strong>Minimum Stake:</strong> 200 Tokens</p>
              <p className="text-sm text-gray-800 mb-4"><strong>Lockup Period:</strong> 60 days</p>
              <button className="py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600">Stake Now</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Staking;
