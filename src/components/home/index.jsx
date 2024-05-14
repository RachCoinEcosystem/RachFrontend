import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./About";
import Partners from "./Partners";
import Product from "./Product";
import backgroundImage from "../../assets/bg/bg-1.jpg";


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
