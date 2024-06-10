// src/pages/Wallet.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// Dummy data for demonstration
const dummyData = {
  totalBalance: 12000, // total balance in USD
  cryptocurrencies: [
    { name: 'Bitcoin', symbol: 'BTC', balance: 0.5, usdBalance: 20000, price: 40000, change: 5 },
    { name: 'Ethereum', symbol: 'ETH', balance: 10, usdBalance: 2000, price: 200, change: -3 },
    { name: 'Cardano', symbol: 'ADA', balance: 1000, usdBalance: 1500, price: 1.5, change: 2 },
  ],
  candlestickData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Price',
        data: [30000, 35000, 25000, 40000, 45000],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  },
};

const Wallet = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [candlestickData, setCandlestickData] = useState(dummyData.candlestickData);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCrypto, setHoveredCrypto] = useState(null);

  useEffect(() => {
    // Fetch candlestick data for the selected cryptocurrency
    // Example API call to get candlestick data
    // fetch(`api/cryptos/${selectedCrypto}/candlestick`)
    //   .then(response => response.json())
    //   .then(data => setCandlestickData(data));
  }, [selectedCrypto]);

  const filteredCryptos = dummyData.cryptocurrencies.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Wallet</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Total Balance: ${dummyData.totalBalance}</h3>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Cryptocurrencies Owned</h3>
        <input
          type="text"
          placeholder="Search token..."
          className="mb-4 p-2 border rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Token Name</th>
              <th className="py-2 px-4 border">Balance</th>
              <th className="py-2 px-4 border">USD Balance</th>
              <th className="py-2 px-4 border">Token Price (USD)</th>
              <th className="py-2 px-4 border">24hr Change</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCryptos.map((crypto) => (
              <tr
                key={crypto.symbol}
                onMouseEnter={() => setHoveredCrypto(crypto.symbol)}
                onMouseLeave={() => setHoveredCrypto(null)}
              >
                <td className="py-2 px-4 border">{crypto.name} ({crypto.symbol})</td>
                <td className="py-2 px-4 border">{crypto.balance}</td>
                <td className="py-2 px-4 border">{crypto.usdBalance} USD</td>
                <td className="py-2 px-4 border">${crypto.price}</td>
                <td className={`py-2 px-4 border ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.change}%
                </td>
                <td className="py-2 px-4 border relative">
                  {hoveredCrypto === crypto.symbol && (
                    <div className="absolute top-0 left-0 bg-white border rounded shadow-md">
                      <ul>
                        <li className="p-2 cursor-pointer hover:bg-gray-200">Withdraw</li>
                        <li className="p-2 cursor-pointer hover:bg-gray-200">Deposit</li>
                        <li className="p-2 cursor-pointer hover:bg-gray-200">Trade</li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Candlestick Analysis</h3>
        <div className="mb-4">
          <label htmlFor="crypto-select" className="mr-2">Select Cryptocurrency:</label>
          <select
            id="crypto-select"
            value={selectedCrypto}
            onChange={(e) => setSelectedCrypto(e.target.value)}
            className="p-2 border rounded"
          >
            {dummyData.cryptocurrencies.map((crypto) => (
              <option key={crypto.symbol} value={crypto.symbol}>
                {crypto.name} ({crypto.symbol})
              </option>
            ))}
          </select>
        </div>
        <Line data={candlestickData} />
      </div>
    </div>
  );
};

export default Wallet;
