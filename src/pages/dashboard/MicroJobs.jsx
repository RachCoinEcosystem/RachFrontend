import React from 'react';

const MicroJob = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">

      {/* Main Container */}
      <div className="flex flex-grow">
        {/* Main Content */}
        <main className="flex-grow p-8">
          <section className="mb-8">
            <div className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold">Micro-Job</h1>
              <p className="mt-2 text-lg">Complete micro jobs to earn RachCoins for small tasks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Completed Jobs */}
              <div className="bg-green-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Completed Jobs</h3>
                <p className="text-2xl font-bold text-green-800">5</p>
              </div>

              {/* Pending Validation */}
              <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-yellow-700 mb-2">Pending Validation</h3>
                <p className="text-2xl font-bold text-yellow-800">2</p>
              </div>

              {/* Unfinished Jobs */}
              <div className="bg-red-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-red-700 mb-2">Unfinished Jobs</h3>
                <p className="text-2xl font-bold text-red-800">1</p>
              </div>

              {/* Current Job Progress */}
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Current Job Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-sm text-blue-700 mt-2">70% Complete</p>
              </div>
            </div>
          </section>

          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Available Micro-jobs</h2>
            <a href="create-jobs.html" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Create Micro-job</a>
          </div>

          {/* Job Listings Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Micro-job 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Title: Data Entry</h3>
              <p className="text-sm text-gray-600 mb-4">Enter 1000 data points into the provided form. Requires attention to detail.</p>
              <div className="text-sm text-gray-800 mb-4">
                <p><strong>Pay:</strong> 100 RachCoins</p>
                <p><strong>Deadline:</strong> 2 days</p>
              </div>
              <div className="space-x-4">
                <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">Apply</button>
                <button className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300">View Details</button>
              </div>
            </div>

            {/* Micro-job 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Title: Social Media Post</h3>
              <p className="text-sm text-gray-600 mb-4">Create 5 posts for our RachCoin social media accounts.</p>
              <div className="text-sm text-gray-800 mb-4">
                <p><strong>Pay:</strong> 200 RachCoins</p>
                <p><strong>Deadline:</strong> 3 days</p>
              </div>
              <div className="space-x-4">
                <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">Apply</button>
                <button className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300">View Details</button>
              </div>
            </div>

            {/* Micro-job 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Title: Blog Writing</h3>
              <p className="text-sm text-gray-600 mb-4">Write a 1000-word blog post about RachCoin's blockchain features.</p>
              <div className="text-sm text-gray-800 mb-4">
                <p><strong>Pay:</strong> 300 RachCoins</p>
                <p><strong>Deadline:</strong> 5 days</p>
              </div>
              <div className="space-x-4">
                <button className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600">Apply</button>
                <button className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300">View Details</button>
              </div>
            </div>

            {/* Add more jobs as needed */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default MicroJob;
