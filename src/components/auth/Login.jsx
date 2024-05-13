import React, { useState } from "react";
import backgroundImage from "../../assets/bg/bg-1.jpg";
import logoImage from "../../assets/bg/flogo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
    console.log("Logging in with:", email, password, rememberMe);
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
          <img
            src={logoImage}
            alt="Rachcoin-logo"
            className="Rachcoin-logo mx-auto"
          />
          <h2 className="text-3xl font-bold mb-4">Login</h2>
        </div>
        <div className="mb-4 relative">
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-4 py-2 w-full pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Password"
            className="border rounded-md px-4 py-2 w-full pl-10"
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
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="text-center">
          <a href="/auth/reset-password" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
          <span className="mx-2">|</span>
          <a href="/auth/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
