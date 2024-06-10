import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "/bg-1.jpg";

function Main() {
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
  }, []);

  return (
    <div className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
