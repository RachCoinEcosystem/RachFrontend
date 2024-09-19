import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">

      {/* Main Container */}
      <div className="flex flex-grow">
        <main className="flex-grow p-8">
          <section className="mb-8">
            <div className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold">Settings</h1>
              <p className="mt-2 text-lg">Manage your account, privacy, and preferences.</p>
            </div>
          </section>

          {/* Settings Form */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
              <form id="settingsForm">
                <div className="mb-4">
                  <label htmlFor="username" className="block text-sm font-semibold text-gray-700">Username</label>
                  <input type="text" id="username" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your username" defaultValue="RachCoinUser" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your email" defaultValue="info@rachcoin.io" />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your full name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your phone number (optional)" />
                </div>
                <div className="mb-4">
                  <label htmlFor="dob" className="block text-sm font-semibold text-gray-700">Date of Birth</label>
                  <input type="date" id="dob" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700">Country</label>
                  <input type="text" id="country" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your country" />
                </div>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Save Changes</button>
              </form>
            </div>
          </section>

          {/* Password Update Form */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Change Password</h2>
              <form id="passwordForm">
                <div className="mb-4">
                  <label htmlFor="currentPassword" className="block text-sm font-semibold text-gray-700">Current Password</label>
                  <input type="password" id="currentPassword" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Current password" />
                </div>
                <div className="mb-4">
                  <label htmlFor="newPassword" className="block text-sm font-semibold text-gray-700">New Password</label>
                  <input type="password" id="newPassword" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="New password" />
                </div>
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">Confirm Password</label>
                  <input type="password" id="confirmPassword" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Confirm new password" />
                </div>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Update Password</button>
              </form>
            </div>
          </section>

          {/* Privacy Settings Form */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Privacy Settings</h2>
              <form id="privacyForm">
                <div className="mb-4">
                  <label htmlFor="twoFactorAuth" className="block text-sm font-semibold text-gray-700">Two-Factor Authentication</label>
                  <select id="twoFactorAuth" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="disabled">Disabled</option>
                    <option value="enabled">Enabled</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="dataSharing" className="block text-sm font-semibold text-gray-700">Data Sharing</label>
                  <select id="dataSharing" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="none">None</option>
                    <option value="basic">Basic Data</option>
                    <option value="full">Full Data</option>
                  </select>
                </div>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Update Privacy</button>
              </form>
            </div>
          </section>

          {/* Notification Settings Form */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
              <form id="notificationForm">
                <div className="mb-4">
                  <label htmlFor="emailNotifications" className="block text-sm font-semibold text-gray-700">Email Notifications</label>
                  <select id="emailNotifications" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="all">All</option>
                    <option value="important">Important Only</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="smsNotifications" className="block text-sm font-semibold text-gray-700">SMS Notifications</label>
                  <select id="smsNotifications" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="all">All</option>
                    <option value="important">Important Only</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="pushNotifications" className="block text-sm font-semibold text-gray-700">Push Notifications</label>
                  <select id="pushNotifications" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="all">All</option>
                    <option value="important">Important Only</option>
                    <option value="none">None</option>
                  </select>
                </div>
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Update Notifications</button>
              </form>
            </div>
          </section>

          {/* Account Deletion Section */}
          <section>
            <div className="bg-red-100 border border-red-300 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Delete Account</h2>
              <p className="text-red-600 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                Delete My Account
              </button>
            </div>
          </section>

        </main>
      </div>

    </div>
  );
};

export default Profile;
