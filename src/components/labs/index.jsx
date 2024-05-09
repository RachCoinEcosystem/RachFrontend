import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../../constants";
import logo from "../../assets/logo192x192.png";
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
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-md border-b border-neutral-700/60">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center flex-shrink-0">
              <img
                className="h-10 w-10 mr-2 filter drop-shadow-md"
                src={logo}
                alt="Logo"
              />
              <span className="text-xl tracking-tight gold-text">
                <b>RACHCOIN</b>
              </span>
            </a>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href || "#"}
                    className="py-2 px-3 text-white-700 hover:bg-yellow-600 active:bg-orange-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href="#"
                className="py-2 px-3 border rounded-md hover:bg-yellow-500"
              >
                Sign In
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
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
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md  hover:bg-yellow-500"
                >
                  Sign In
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="flex flex-col mt-6 lg:mt-20 animate-fadeIn">
        <p className="mt-10 text-lg items-start text-neutral-100 max-w-4xl">
          RACHCOIN ECOSYSTEM LAB
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide mt-20">
          Bring Your
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
            {" "}
            Dreams Forward
          </span>
        </h1>
        <div>
          <ul className="majorLinks grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center mt-8">
            <li className="majorLink">
              <a href="#markets" className="link">
                <i className="fa fa-pencil mr-2"></i> Apply
              </a>
            </li>
            <li className="majorLink">
              <a href="#features" className="link">
                <i className="fa fa-flask mr-2"></i> Project
              </a>
            </li>
            <li className="majorLink">
              <a href="#wallets" className="link">
                <i className="fa fa-leanpub mr-2"></i> Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mb-5 aboutSection">
        <div
          className="col-span-1 md:col-span-1 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="site-section-heading">
            <h2 data-tkey="rAbout">About</h2>
          </div>
        </div>
        <div
          className="col-span-1 md:col-span-1 mt-8 md:mt-0 pl-md-8 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p data-tkey="labsAbout">
            We strive to grow a broad ecosystem by supporting the community.
            Rachcoin Labs provides developers, entrepreneurs &amp; creators with
            the jump start that they need to make vision a reality.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 align-items-center speaker">
        <div
          className="col-span-1 mb-5 md:mb-0 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="landingLabsSS">
            <img src={ideaImage} alt="Idea" className="idea-image" />
          </div>
        </div>
        <div className="col-span-1 ml-auto">
          <div className="bio pl-md-5">
            <h2
              className="text-uppercase text-primary d-block mb-3 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="300"
              data-tkey="labsIdeaTitle"
            >
              HAVE AN IDEA?
            </h2>
            <p
              className="mb-4 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Do you have a project that involves RachCoin in some way?{" "}
              <a href="#">We want to hear about it!</a>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 align-items-center speaker">
        <div
          className="col-span-1 mb-5 md:mb-0 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="landingLabsSS">
            <img src={helpImage} alt="Help" className="help-image" />
          </div>
        </div>
        <div className="col-span-1 ml-auto">
          <div className="bio pl-md-5">
            <h2
              className="text-uppercase text-primary d-block mb-3 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="300"
              data-tkey="labsIdeaTitle"
            >
              WOULD MONEY HELP?
            </h2>
            <p
              className="mb-4 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Sometimes money is just what it takes to get your idea off the
              ground. <a href="#"></a>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 align-items-center speaker">
        <div
          className="col-span-1 mb-5 md:mb-0 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="landingLabsSS">
            <img
              src={getfundImage}
              alt="Get Funded"
              className="getfund-image"
            />
          </div>
        </div>
        <div className="col-span-1 ml-auto">
          <div className="bio pl-md-5">
            <h2
              className="text-uppercase text-primary d-block mb-3 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="300"
              data-tkey="labsIdeaTitle"
            >
              GET FUNDED BY US
            </h2>
            <p
              className="mb-4 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Our creators set aside funds for the community to use for
              projects. <a href="#"></a>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 align-items-center speaker">
        <div
          className="col-span-1 mb-5 md:mb-0 order-md-2 aos-init aos-animate"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="landingLabsSS landingLabsSS4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 align-items-center speaker">
          <div
            className="col-span-1 mb-5 md:mb-0 aos-init aos-animate"
            data-aos="fade"
            data-aos-delay="100"
          >
            <div className="landingLabsSS">
              <img src={startImage} alt="Get Listed" className="start-image" />
            </div>
          </div>
          <div className="col-span-1 ml-auto">
            <div className="bio pl-md-5">
              <h2
                className="text-uppercase text-primary d-block mb-3 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="300"
                data-tkey="labsIdeaTitle"
              >
                GET LISTED BY US
              </h2>
              <p
                className="mb-4 aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Get funded by us and we will list your project here on our
                website. <a href="#"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mb-5" id="labsHeading">
        <div
          className="col-span-1 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="site-section-heading">
            <h2 data-tkey="rProjects">Projects</h2>
          </div>
        </div>
        <div
          className="col-span-1 mt-12 md:pl-12 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            Check out some of the cool projects we have funded.{" "}
            <a href="#">Apply to be next!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LabSection;
