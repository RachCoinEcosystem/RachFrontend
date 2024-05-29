import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "/flogo.png";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Implement reset password logic here
    console.log("Resetting password for:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <Link to="/">
            <img
              src={logoImage}
              alt="Rachcoin-logo"
              className="w-24 h-24 mx-auto"
            />
          </Link>
          <h2 className="text-3xl font-bold mt-4 text-white">Reset Password</h2>
          <p className="text-red-500 mt-2">
            Enter your email to reset your password
          </p>
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>
        <div className="text-center">
          <Link to="/signin" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
