import React, { useState } from 'react';

const dummyPools = [
  {
    id: 1,
    name: 'ETH/USDT Pool',
    liquidity: 100000,
    apr: 15,
  },
  {
    id: 2,
    name: 'BTC/ETH Pool',
    liquidity: 200000,
    apr: 10,
  },
  {
    id: 3,
    name: 'DAI/USDC Pool',
    liquidity: 150000,
    apr: 8,
  },
];

const Pool = () => {
  const [pools, setPools] = useState(dummyPools);
  const [selectedPool, setSelectedPool] = useState(null);
  const [liquidityAmount, setLiquidityAmount] = useState('');
  const [notification, setNotification] = useState('');

  const handlePoolClick = (pool) => {
    setSelectedPool(pool);
  };

  const handleAddLiquidity = () => {
    if (!liquidityAmount || parseFloat(liquidityAmount) <= 0) {
      setNotification('Please enter a valid amount.');
      return;
    }

    setPools(pools.map(pool =>
      pool.id === selectedPool.id
        ? { ...pool, liquidity: pool.liquidity + parseFloat(liquidityAmount) }
        : pool
    ));

    setLiquidityAmount('');
    setNotification('Liquidity added successfully.');
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Liquidity Pools</h3>
      {notification && <div className="mb-4 text-green-500">{notification}</div>}
      <div>
        <h4 className="text-md font-semibold mb-2">Available Pools</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pools.map((pool) => (
            <div
              key={pool.id}
              className="border rounded p-4 cursor-pointer"
              onClick={() => handlePoolClick(pool)}
            >
              <h5 className="text-lg font-semibold">{pool.name}</h5>
              <p className="text-gray-700">Total Liquidity: ${pool.liquidity}</p>
              <p className="text-gray-900 font-semibold">APR: {pool.apr}%</p>
            </div>
          ))}
        </div>
      </div>
      {selectedPool && (
        <div className="p-4 border rounded mt-6">
          <h3 className="text-lg font-semibold mb-4">Pool Details</h3>
          <h4 className="text-md font-semibold mb-2">{selectedPool.name}</h4>
          <p className="text-gray-700">Total Liquidity: ${selectedPool.liquidity}</p>
          <p className="text-gray-900 font-semibold mb-4">APR: {selectedPool.apr}%</p>
          <div>
            <h4 className="text-md font-semibold mb-2">Add Liquidity</h4>
            <input
              type="number"
              placeholder="Amount"
              value={liquidityAmount}
              onChange={(e) => setLiquidityAmount(e.target.value)}
              className="mb-2 p-2 border rounded w-full"
            />
            <button onClick={handleAddLiquidity} className="p-2 bg-blue-500 text-white rounded">
              Add Liquidity
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pool;
