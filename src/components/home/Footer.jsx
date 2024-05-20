import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black-200 text-white p-4 border-b border-neutral-700/60">
      <ul className="flex justify-center items-center flex-wrap mb-4">
        <li className="mr-6">
          <strong>Our Social Media Presence</strong>
        </li>
        <li className="mr-6">
          <Link to="https://www.youtube.com/channel/#" target="_new">
            <i className="fab fa-youtube"></i>
          </Link>
        </li>
        <li className="mr-6">
          <Link to="https://web.facebook.com/#" target="_new">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li className="mr-6">
          <Link to="https://discord.com/invite/#" target="_new">
          <i className="fab fa-discord"></i>
          </Link>
        </li>
        <li className="mr-6">
          <Link to="https://twitter.com/#" target="_new">
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li className="mr-6">
          <Link to="https://t.me/#" target="_new">
            <i className="fab fa-telegram-plane"></i>
          </Link>
        </li>
        <li>
          <strong> | <Link to="https://rach-frontend-six.vercel.app/"> &copy; {new Date().getFullYear()} RachCoin Ecosystem</Link>.</strong> All rights reserved.
        </li>
      </ul>

      <div className="flex justify-center">
        <div className="mr-4">
          <Link to="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div className="mr-4">
          <Link to="/terms-of-service" className="text-sm hover:underline">
            Terms of Service
          </Link>
        </div>
        <div>
          <Link to="/feedback-form" className="text-sm hover:underline">
            Feedback Form
          </Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
