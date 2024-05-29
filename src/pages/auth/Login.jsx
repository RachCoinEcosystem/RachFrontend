import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "/flogo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
    console.log("Logging in with:", email, password, rememberMe);
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
          <h2 className="text-3xl font-bold mt-4 text-white">Login</h2>
        </div>
        <div className="mb-4 relative">
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
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe" className="text-blue-500">
            Remember Me
          </label>
        </div>
        <div className="mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="text-center">
          <Link to="/reset-password" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
          <span className="mx-2">|</span>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
