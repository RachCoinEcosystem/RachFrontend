import React from "react";
import Navbar from "./home/Navbar";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/About";
import Partners from "./home/Partners";
import Product from "./home/Product";
import backgroundImage from "../assets/bg/bg-1.jpg";

const frontPage = () => (
  <div>
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Product />
      <Partners />
    </div>

  </div>
);

export default frontPage;
