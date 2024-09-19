import React from 'react';

const Messages = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">

      {/* Main Container */}
      <div className="flex flex-grow">

        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="mb-8">
            <div className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold">Inbox - Pay to Read Messages</h1>
              <p className="mt-2 text-lg">Earn RachCoins by reading messages and get rewarded!</p>
            </div>
          </section>

          {/* Message List with Pagination */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Messages</h2>

              {/* Messages */}
              {[
                {
                  title: 'Welcome to RachCoin Platform',
                  body: 'Thank you for joining RachCoin. Click to read and earn RachCoin!',
                  reward: 2,
                },
                {
                  title: 'Exclusive Staking Offer',
                  body: 'Earn double rewards by staking your RachCoins now!',
                  reward: 1,
                },
              ].map((message, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{message.title}</h3>
                  <p className="text-gray-600 mt-2">{message.body}</p>
                  <p className="text-indigo-500 font-semibold mt-2">Reward: {message.reward} RachCoin</p>
                  <button className="px-4 py-2 mt-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Read Message</button>
                </div>
              ))}

              {/* Pagination */}
              <div className="mt-6 flex justify-between items-center">
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">Previous</button>
                <span className="text-gray-700">Page 1 of 5</span>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">Next</button>
              </div>
            </div>
          </section>

          {/* Advertiser Broadcast Section */}
          <section>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Broadcast Your Message</h2>
              <p className="text-gray-700 mb-4">Advertise your product to users and pay them RachCoin to read your message.</p>

              <form id="broadcastForm">
                {/* Message */}
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea id="message" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="4" placeholder="Write your message here..."></textarea>
                </div>

                {/* Optional Link */}
                <div className="mb-4">
                  <label htmlFor="link" className="block text-sm font-semibold text-gray-700">Optional Link</label>
                  <input type="url" id="link" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="https://your-link.com" />
                </div>

                {/* Amount to Pay */}
                <div className="mb-4">
                  <label htmlFor="payment" className="block text-sm font-semibold text-gray-700">Amount to Pay (RachCoin per message)</label>
                  <input type="number" id="payment" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., 1 RachCoin" />
                </div>

                {/* Total Audience Calculation */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700">Total Audience</label>
                  <p id="audienceCalculation" className="text-indigo-500">You can reach <span className="font-bold">0</span> people with your current RachCoin balance.</p>
                </div>

                {/* Submit Broadcast */}
                <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Broadcast Message</button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Messages;
