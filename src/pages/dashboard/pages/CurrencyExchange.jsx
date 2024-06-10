import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

// Dummy data for demonstration
const cryptocurrencies = [
  { name: 'Bitcoin', symbol: 'BTC', rate: 40000 },
  { name: 'Ethereum', symbol: 'ETH', rate: 2500 },
  { name: 'Litecoin', symbol: 'LTC', rate: 150 },
];

const CurrencyExchange = () => {
  const [fromCrypto, setFromCrypto] = useState('BTC');
  const [toCrypto, setToCrypto] = useState('ETH');
  const [amount, setAmount] = useState('');
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSwap = async () => {
    const fromCryptoData = cryptocurrencies.find((crypto) => crypto.symbol === fromCrypto);
    const toCryptoData = cryptocurrencies.find((crypto) => crypto.symbol === toCrypto);

    const fromRate = fromCryptoData.rate;
    const toRate = toCryptoData.rate;

    if (parseFloat(amount) <= 0 || isNaN(amount)) {
      setErrorMessage('Invalid amount');
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const calculatedReceivedAmount = (parseFloat(amount) * fromRate) / toRate;
      setReceivedAmount(calculatedReceivedAmount);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('An error occurred during the swap. Please try again.');
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  useEffect(() => {
    // Fetch live exchange rates here if needed
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-4">Swap</h3>
        <div className="mb-4">
          <label htmlFor="from-crypto-select" className="block text-sm font-medium text-gray-700 mb-2">
            From:
          </label>
          <select
            id="from-crypto-select"
            value={fromCrypto}
            onChange={(e) => setFromCrypto(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            {cryptocurrencies.map((crypto) => (
              <option key={crypto.symbol} value={crypto.symbol}>
                {crypto.name} ({crypto.symbol})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="to-crypto-select" className="block text-sm font-medium text-gray-700 mb-2">
            To:
          </label>
          <select
            id="to-crypto-select"
            value={toCrypto}
            onChange={(e) => setToCrypto(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
          >
            {cryptocurrencies.map((crypto) => (
              <option key={crypto.symbol} value={crypto.symbol}>
                {crypto.name} ({crypto.symbol})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Amount to Swap:
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Amount to swap"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        </div>
        <button
          onClick={handleSwap}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          {loading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            'Swap'
          )}
        </button>
        {receivedAmount > 0 && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-md">
            <p className="text-green-700 font-semibold">
              Estimated Received Amount: {receivedAmount.toFixed(6)} {toCrypto}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyExchange;
