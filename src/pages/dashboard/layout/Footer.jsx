import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white  shadow-md py-4 px-6 text-center">
      <div className="mb-2">
        <Link to="/privacy-policy" className="mx-2 hover:underline">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="mx-2 hover:underline">
          Terms of Service
        </Link>
        <Link to="/contact-us" className="mx-2 hover:underline">
          Contact Us
        </Link>
      </div>
      <p>© {currentYear} RachCoin Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
