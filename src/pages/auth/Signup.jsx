import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "/flogo.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignup = () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Check if terms are agreed
    if (!agreeTerms) {
      alert("Please agree to the terms");
      return;
    }

    // Implement signup logic here
    console.log("Signing up with:", name, username, email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <Link to="/">
            <img
              src={logoImage}
              alt="Rachcoin-logo"
              className="w-24 h-24 mx-auto"
            />
          </Link>
          <h2 className="text-3xl font-bold mt-4 text-white">Sign Up</h2>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              className="mr-2 focus:ring-2 focus:ring-blue-500"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="agreeTerms" className="text-blue-500">
              I agree to the terms
            </label>
          </div>
        </div>
        <div className="mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <Link to="/signin" className="text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
