import React, { useState } from "react";
import backgroundImage from "../../assets/bg/bg-1.jpg";
import logoImage from "../../assets/bg/flogo.png";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Implement reset password logic here
    console.log("Resetting password for:", email);
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
          <h2 className="text-3xl font-bold mb-4">Reset Password</h2>
          <p className="text-secondary mb-5 md:mb-8 text-center">
            Enter your email to reset your password
          </p>
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
        <div className="mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>
        <div className="text-center">
          <Link to="/auth/signin" className="text-blue-500 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
