import React, { useState } from 'react';

const Settings = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [address, setAddress] = useState('123 Main St');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notification, setNotification] = useState('');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    // Logic to save profile information
    setNotification('Profile information updated successfully.');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setNotification('New passwords do not match.');
      return;
    }
    // Logic to change password
    setNotification('Password changed successfully.');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Settings</h2>
      {notification && <div className="mb-4 text-green-500">{notification}</div>}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Profile Information</h3>
        <form onSubmit={handleSaveProfile}>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Save Profile
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Change Password</h3>
        <form onSubmit={handleChangePassword}>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
