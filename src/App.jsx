import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./components/home";
import Footer from "./components/home/Footer";
import LabSection from "./components/labs";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ResetPassword from "./components/auth/ResetPassword";
import Dashboard from "./components/dashboard";


//analytics
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/labs/devs" element={<LabSection />} />
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
