import React, { useState } from 'react';

// Dummy data for demonstration
const dummyUserData = {
  firstName: 'John',
  lastName: 'Doe',
  address: '1234 Blockchain Ave, Cryptocity, CryptoLand',
  username: 'john_doe',
  email: 'john@example.com',
  totalBalance: 12000, // total balance in USD
  cryptocurrencies: [
    { name: 'Bitcoin', symbol: 'BTC', balance: 0.5, usdBalance: 20000 },
    { name: 'Ethereum', symbol: 'ETH', balance: 10, usdBalance: 2000 },
    { name: 'Cardano', symbol: 'ADA', balance: 1000, usdBalance: 1500 },
  ],
  referral: {
    totalReferrals: 10,
    totalWithdrawals: 5000,
    totalDeposits: 7000,
  },
};

const Profile = () => {
  const [userData, setUserData] = useState(dummyUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  // Form state for editing profile information
  const [formState, setFormState] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    address: userData.address,
    email: userData.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    setUserData((prevData) => ({
      ...prevData,
      ...formState,
    }));
    setIsEditing(false);
    setMessage('Profile updated successfully!');
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Profile</h3>
      <div className="mb-4">
        <label className="block mb-2">First Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
        ) : (
          <p>{userData.firstName}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Last Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
        ) : (
          <p>{userData.lastName}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address:</label>
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={formState.address}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
        ) : (
          <p>{userData.address}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Username:</label>
        <p>{userData.username}</p>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
          />
        ) : (
          <p>{userData.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Total Balance:</label>
        <p>${userData.totalBalance}</p>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Cryptocurrencies Owned</h4>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Token Name</th>
              <th className="py-2 px-4 border">Balance</th>
              <th className="py-2 px-4 border">USD Balance</th>
            </tr>
          </thead>
          <tbody>
            {userData.cryptocurrencies.map((crypto) => (
              <tr key={crypto.symbol}>
                <td className="py-2 px-4 border">{crypto.name} ({crypto.symbol})</td>
                <td className="py-2 px-4 border">{crypto.balance}</td>
                <td className="py-2 px-4 border">{crypto.usdBalance} USD</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <h4 className="text-md font-semibold mb-2">Referral Information</h4>
        <div>
          <p>Total Referrals: {userData.referral.totalReferrals}</p>
          <p>Total Withdrawals: ${userData.referral.totalWithdrawals}</p>
          <p>Total Deposits: ${userData.referral.totalDeposits}</p>
        </div>
      </div>
      {isEditing ? (
        <div>
          <button onClick={handleUpdate} className="p-2 bg-blue-500 text-white rounded mr-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="p-2 bg-gray-500 text-white rounded">Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsEditing(true)} className="p-2 bg-blue-500 text-white rounded">Edit Profile</button>
      )}
      {message && <div className="mt-4 text-green-500">{message}</div>}
    </div>
  );
};

export default Profile;
