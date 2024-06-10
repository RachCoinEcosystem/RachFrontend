import React, { useState } from "react";

const dummyPairs = [
  { pair: "RACH/USDT", lastPrice: 1.344821, change: 0.08 },
  { pair: "RACH/STAAV", lastPrice: 63.086516, change: 1.17 },
  { pair: "ETH/USDT", lastPrice: 3700.13477, change: 0.13 },
  { pair: "WBTC/USDT", lastPrice: 69865.484246, change: 0.38 },
  { pair: "BNB/USDT", lastPrice: 647.352798, change: -3.08 },
  { pair: "XTN/USDT", lastPrice: 0.02397, change: 14.08 },

];

const Trading = () => {
  const [pairs, setPairs] = useState(dummyPairs);
  const [selectedPair, setSelectedPair] = useState(dummyPairs[0].pair);
  const [price, setPrice] = useState(dummyPairs[0].lastPrice);
  const [amount, setAmount] = useState("");
  const [notification, setNotification] = useState("");

  const handlePairChange = (e) => {
    const selectedPair = e.target.value;
    setSelectedPair(selectedPair);
    const selectedPairData = pairs.find((pair) => pair.pair === selectedPair);
    setPrice(selectedPairData.lastPrice);
  };

  const handleTrade = (tradeType) => {
    if (!price || !amount || parseFloat(amount) <= 0) {
      setNotification("Please enter valid price and amount.");
      return;
    }

    setNotification(
      `Trade successful. You ${tradeType} ${amount} ${
        selectedPair.split("/")[0]
      } at ${price} ${selectedPair.split("/")[1]}.`
    );
    setPrice("");
    setAmount("");
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Trading</h3>
      {notification && (
        <div className="mb-4 text-green-500">{notification}</div>
      )}
      <div className="mb-6">
        <label className="block text-md font-semibold mb-2">Select Pair</label>
        <select
          value={selectedPair}
          onChange={handlePairChange}
          className="p-2 border rounded w-full mb-4"
        >
          {pairs.map((pair) => (
            <option key={pair.pair} value={pair.pair}>
              {pair.pair}
            </option>
          ))}
        </select>
        <div className="mb-4">
          <label className="block text-md font-semibold mb-2">
            Price ({selectedPair.split("/")[1]})
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-semibold mb-2">
            Amount ({selectedPair.split("/")[0]})
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter amount"
          />
        </div>
        <div className="flex justify-between mb-4">
          <button
            onClick={() => handleTrade("buy")}
            className="p-2 bg-yellow-500 text-white rounded mr-2 w-full"
          >
            Buy {selectedPair.split("/")[0]}
          </button>
          <button
            onClick={() => handleTrade("sell")}
            className="p-2 bg-red-500 text-white rounded w-full"
          >
            Sell {selectedPair.split("/")[0]}
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-4">Pair Information</h4>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Pair</th>
              <th className="py-2 px-4 border">Last Price</th>
              <th className="py-2 px-4 border">Change</th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((pair) => (
              <tr key={pair.pair}>
                <td className="py-2 px-4 border">{pair.pair}</td>
                <td className="py-2 px-4 border">{pair.lastPrice}</td>
                <td
                  className={`py-2 px-4 border ${
                    pair.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {pair.change}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trading;
