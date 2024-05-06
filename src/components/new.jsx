import React from "react";
import Navbar from "../components/home/Navbar";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/About";
import Partners from "../components/home/Partners";
import Product from "../components/home/Product";
import Community from "../components/home/Community";
import Footer from "../components/home/Footer";
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
      <Community />
      <Footer />
    </div>

  </div>
);

export default frontPage;
