import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FrontPage from "./components/home";
import Dashboard from "./components/dashboard";
import Footer from "./components/home/Footer";
import LabSection from "./components/labs";
import LoginPage from "./components/auth/Login";
import SignupPage from "./components/auth/Signup";
import ResetPasswordPage from "./components/auth/ResetPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/labs/devs" element={<LabSection />} />
        <Route path="/auth/signin" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="auth/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
