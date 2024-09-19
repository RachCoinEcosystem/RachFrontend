import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-indigo-600 text-white text-center py-6">
        <p className="text-lg"> © {currentYear}RachCoin - Empowering users with blockchain technology.</p>
        <nav className="mt-4">
          <Link to="/privacy-policy" className="mx-2 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="mx-2 hover:underline">
            Terms of Service
          </Link>
          <Link to="/contact-us" className="mx-2 hover:underline">
            Contact Us
          </Link>
        </nav>
      </footer>
  );
}

export default Footer;
