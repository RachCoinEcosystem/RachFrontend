import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../../constants";
import logo from "../../assets/bg/flogo.png";
import backgroundImage from "../../assets/bg/bg-1.jpg";
import ideaImage from "../../assets/labs/idea.png";
import helpImage from "../../assets/labs/needmoney.png";
import getfundImage from "../../assets/labs/getfund.png";
import startImage from "../../assets/labs/getstarted.png";
import "../../assets/styles.css";

const LabSection = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-md border-b border-neutral-700/60">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2 filter drop-shadow-md" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight gold-text"><b>RACHCOIN</b></span>
            </a>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href || "#"} className="py-2 px-3 text-white-700 hover:bg-yellow-600 active:bg-orange-600">{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 border rounded-md hover:bg-yellow-500">Sign In</a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md  hover:bg-yellow-500">Sign In</a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="container mx-auto">
        <div className="text-center">
          <h4 className="text-4xl text-neutral-100 mb-10">RACHCOIN ECOSYSTEM LAB</h4>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-10">
            Bring Your <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">Dreams Forward</span>
          </h1>
          <div className="mt-10 text-lg text-neutral-100 max-w-4xl mb-16 align-item-center">
            <p>
              We strive to grow a broad ecosystem by supporting the community. Rachcoin Labs provides developers, entrepreneurs &amp; creators with the jump start that they need to make vision a reality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center justify-center">
            <img src={ideaImage} alt="Idea" className="w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">HAVE AN IDEA?</h3>
            <p className="text-lg text-center text-neutral-100">Do you have a project that involves RachCoin in some way? We want to hear about it!</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={helpImage} alt="Need Money" className="w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">WOULD MONEY HELP?</h3>
            <p className="text-lg text-center text-neutral-100">Sometimes money is just what it takes to get your idea off the ground.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={getfundImage} alt="Get Funded" className="w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">GET FUNDED BY US</h3>
            <p className="text-lg text-center text-neutral-100">Our creators set aside funds for the community to use for projects.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={startImage} alt="Get Started" className="w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">GET LISTED BY US</h3>
            <p className="text-lg text-center text-neutral-100">Get funded by us and we will list your project here on our website.</p>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-4xl text-neutral-100 mb-10">Projects</h3>
          <p className="text-lg text-center text-neutral-100 mb-10">Check out some of the cool projects we have funded. <a href="#">Apply to be next!</a></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Add your project items here */}
          </div>
        </div>
        <div className="text-center mb-16">
          <ul className="majorLinks flex justify-center space-x-8">
            <li>
              <a href="#markets" className="link"><i className="fa fa-pencil mr-2"></i>Apply</a>
            </li>
            <li>
              <a href="#features" className="link"><i className="fa fa-flask mr-2"></i>Project</a>
            </li>
            <li>
              <a href="#wallets" className="link">  <i className="fa fa-leanpub mr-2"></i>Learn More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LabSection;
