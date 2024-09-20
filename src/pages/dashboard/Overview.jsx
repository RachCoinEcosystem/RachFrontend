import React from 'react';

const Overview = ({ name }) => {
      return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
          <div className="flex flex-grow">
            {/* Main Content */}
            <main className="flex-grow p-8">
              <section className="mb-3">
                <div className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-lg">
                  <h1 className="text-2xl font-bold">Welcome {name}</h1>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <input type="text" placeholder="Search for tasks" className="w-1/2 py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <div className="space-x-4">
                    <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Create Task</button>
                    <button className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300">View Tasks</button>
                  </div>
                </div>
              </section>

              {/* Task Section */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Task List */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">New Updates Available</h3>
                  <ul className="space-y-4">
                    <li className="border-b border-gray-200 pb-2">
                      <span className="block text-gray-800 font-bold">Token farming</span>
                      <p className="text-sm text-gray-600">New task added by system</p>
                    </li>
                    <li className="border-b border-gray-200 pb-2">
                      <span className="block text-gray-800 font-bold">Staking services</span>
                      <p className="text-sm text-gray-600">Task completed successfully</p>
                    </li>
                    <li className="border-b border-gray-200 pb-2">
                      <span className="block text-gray-800 font-bold">NFT trading opportunities</span>
                      <p className="text-sm text-gray-600">Task completion confirmed</p>
                    </li>
                    <li className="border-b border-gray-200 pb-2">
                      <span className="block text-gray-800 font-bold">Ad campaign details</span>
                      <p className="text-sm text-gray-600">Task put on hold by user</p>
                    </li>
                    <li>
                      <span className="block text-gray-800 font-bold">Earned rewards summary</span>
                      <p className="text-sm text-gray-600">Task marked as done by user</p>
                    </li>
                  </ul>
                </div>

                {/* Task Details */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Token Farming Details</h3>
                  <ul className="space-y-2 mb-4">
                    <li><strong>Recipient:</strong> Myself</li>
                    <li><strong>Due Date:</strong> Now</li>
                    <li><strong>Ongoing:</strong> Confidential</li>
                    <li><strong>Urgency Level:</strong> Moderate</li>
                  </ul>
                  <div className="mb-4">
                    <h4 className="font-semibold">Attached Files List</h4>
                    <button className="py-1 px-3 bg-gray-200 rounded hover:bg-gray-300">Upload</button>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold">Related URLs</h4>
                    <button className="py-1 px-3 bg-gray-200 rounded hover:bg-gray-300">Include</button>
                  </div>
                  <div className="flex space-x-4">
                    <button className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600">Move to Archive</button>
                    <button className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Remove Task</button>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      );
    };

    export default Overview;
