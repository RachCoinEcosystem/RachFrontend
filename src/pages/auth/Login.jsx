import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Login to RachCoin</h2>

        {/* Login Form */}
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <input type="checkbox" id="remember-me" className="mr-1" />
              <label htmlFor="remember-me" className="text-sm text-gray-700">Remember me</label>
            </div>
            <Link to="/forget-password" className="text-sm text-blue-500 hover:underline">Forget password?</Link>
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
        </form>

        {/* OR Divider */}
        <div className="my-6 text-center text-gray-500">OR</div>

        {/* Social Login Options */}
        <div className="space-y-3">
          <button className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Login with Google</button>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Login with Telegram</button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
