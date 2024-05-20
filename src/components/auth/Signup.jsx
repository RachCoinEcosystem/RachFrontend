import React, { useState } from "react";
import backgroundImage from "../../assets/bg/bg-1.jpg";
import logoImage from "../../assets/bg/flogo.png";
import { Link } from "react-router-dom";

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
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="bg-black p-8 rounded-md shadow-md">
        <div className="text-center">
        <Link to="/">
            <img
                src={logoImage}
                alt="Rachcoin-logo"
                className="Rachcoin-logo mx-auto"
              />
          </Link>
          <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="border rounded-md px-4 py-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-md px-4 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-4 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Password"
            className="border rounded-md px-4 py-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded-md px-4 py-2 w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              className="mr-2"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label htmlFor="agreeTerms" className="text-sm">
              I agree to the terms
            </label>
          </div>
        </div>
        <div className="mb-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <Link to="/auth/signin" className="text-blue-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
