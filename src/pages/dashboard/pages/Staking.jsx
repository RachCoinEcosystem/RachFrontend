import React, { useState } from 'react';

// Dummy data for demonstration
const dummyStakingData = [
  { name: 'Bitcoin', symbol: 'BTC', staked: 0.1, rewardRate: 5 },
  { name: 'Ethereum', symbol: 'ETH', staked: 2, rewardRate: 7 },
];

const stakingPeriods = [
  { label: '45 days', value: 45 },
  { label: '90 days', value: 90 },
  { label: '180 days', value: 180 },
  { label: '360 days', value: 360 },
];

const Staking = () => {
  const [stakingData, setStakingData] = useState(dummyStakingData);
  const [stakeAmount, setStakeAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [selectedPeriod, setSelectedPeriod] = useState(45);
  const [errorMessage, setErrorMessage] = useState('');
  const [reward, setReward] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const handleStake = () => {
    const amount = parseFloat(stakeAmount);
    if (isNaN(amount) || amount < 50) {
      setErrorMessage('Minimum staking amount is 50 coins');
      return;
    }

    setStakingData((prevData) =>
      prevData.map((crypto) =>
        crypto.symbol === selectedCrypto
          ? { ...crypto, staked: crypto.staked + amount }
          : crypto
      )
    );

    setStakeAmount('');
    setReward(0);
    setErrorMessage('');
    setSuccessMessage(`Successfully staked ${amount} ${selectedCrypto}`);
  };

  const handleCalculateReward = (amount) => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 50) {
      setErrorMessage('Minimum staking amount is 50 coins');
      setReward(0);
      return;
    } else {
      setErrorMessage('');
    }

    const selectedCryptoData = stakingData.find((crypto) => crypto.symbol === selectedCrypto);
    const daysInYear = 365;
    const periodInYears = selectedPeriod / daysInYear;
    const calculatedReward = (parsedAmount * selectedCryptoData.rewardRate / 100) * periodInYears;
    setReward(calculatedReward);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Staking</h3>
      <div className="mb-4 p-4 bg-blue-100 border border-blue-500 rounded">
        <p>Note: Minimum staking amount is 50 coins</p>
      </div>
      <div className="mb-4">
        <label htmlFor="crypto-select" className="mr-2">Select Cryptocurrency:</label>
        <select
          id="crypto-select"
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
          className="p-2 border rounded"
        >
          {dummyStakingData.map((crypto) => (
            <option key={crypto.symbol} value={crypto.symbol}>
              {crypto.name} ({crypto.symbol})
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="period-select" className="mr-2">Select Staking Period:</label>
        <select
          id="period-select"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(parseInt(e.target.value))}
          className="p-2 border rounded"
        >
          {stakingPeriods.map((period) => (
            <option key={period.value} value={period.value}>
              {period.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Amount to stake"
          value={stakeAmount}
          onChange={(e) => {
            setStakeAmount(e.target.value);
            handleCalculateReward(e.target.value);
          }}
          className="p-2 border rounded w-full"
        />
        {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      </div>
      <button onClick={handleStake} className="p-2 bg-blue-500 text-white rounded">Stake</button>
      {successMessage && <div className="text-green-500 mt-2">{successMessage}</div>}
      <div className="mt-6 mb-4">
        <h4 className="text-md font-semibold mb-2">Reward Calculator</h4>
        {reward > 0 && (
          <div className="mt-4">
            <p>Estimated Reward: {reward.toFixed(2)} {selectedCrypto}</p>
          </div>
        )}
      </div>
      <div className="mt-6">
        <h4 className="text-md font-semibold mb-2">Staking Summary</h4>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Token Name</th>
              <th className="py-2 px-4 border">Staked Amount</th>
              <th className="py-2 px-4 border">Reward Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            {stakingData.map((crypto) => (
              <tr key={crypto.symbol}>
                <td className="py-2 px-4 border">{crypto.name} ({crypto.symbol})</td>
                <td className="py-2 px-4 border">{crypto.staked}</td>
                <td className="py-2 px-4 border">{crypto.rewardRate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Staking;
