import React from 'react';

const Farming = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">

      {/* Main Container */}
      <div className="flex flex-grow">

        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="mb-8">
            <div className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold">Token Farming Pools</h1>
              <p className="mt-2 text-lg">Stake your RachCoins to earn rewards in various farming pools. Select a pool to view details, stake tokens, and claim your rewards.</p>
            </div>
            {/* Farming Pool Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pool Card (Repeat for each pool) */}
              {[
                { name: "Pool 1: RachCoin - Usdt", apr: "12%", totalStaked: "10,000 RachCoin" },
                { name: "Pool 2: RachCoin - Ton", apr: "8%", totalStaked: "5,000 RachCoin" },
                { name: "Pool 3: RachCoin - Sol", apr: "15%", totalStaked: "15,000 RachCoin" },
              ].map(pool => (
                <div className="bg-white p-6 rounded-lg shadow-md" key={pool.name}>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{pool.name}</h3>
                  <p className="text-gray-600 mb-2">APR: {pool.apr}</p>
                  <p className="text-gray-600 mb-4">Total Staked: {pool.totalStaked}</p>
                  <div className="flex justify-between items-center">
                    <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">Stake</button>
                    <button className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600">Unstake</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Current Farming Progress */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Farming Progress</h2>
            {/* Farming Progress Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="px-4 py-2">Pool</th>
                    <th className="px-4 py-2">Staked Amount</th>
                    <th className="px-4 py-2">Earned Rewards</th>
                    <th className="px-4 py-2">APR</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Progress Row */}
                  {[
                    { name: "RachCoin - TokenX", staked: "500 RachCoin", earned: "50 RachCoin", apr: "12%" },
                    { name: "RachCoin - TokenY", staked: "200 RachCoin", earned: "30 RachCoin", apr: "8%" },
                  ].map(progress => (
                    <tr key={progress.name}>
                      <td className="border px-4 py-2">{progress.name}</td>
                      <td className="border px-4 py-2">{progress.staked}</td>
                      <td className="border px-4 py-2">{progress.earned}</td>
                      <td className="border px-4 py-2">{progress.apr}</td>
                      <td className="border px-4 py-2">
                        <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Claim Rewards</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Farming;
