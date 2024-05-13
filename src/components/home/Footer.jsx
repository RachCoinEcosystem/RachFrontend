import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black-200 text-white p-4 border-b border-neutral-700/60">
      <ul className="flex justify-center items-center flex-wrap mb-4">
        <li className="mr-6">
          <strong>Our Social Media Presence</strong>
        </li>
        <li className="mr-6">
          <a href="https://www.youtube.com/channel/#" target="_new">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li className="mr-6">
          <a href="https://web.facebook.com/#" target="_new">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="mr-6">
          <a href="https://discord.com/invite/#" target="_new">
          <i className="fab fa-discord"></i>
          </a>
        </li>
        <li className="mr-6">
          <a href="https://twitter.com/#" target="_new">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="mr-6">
          <a href="https://t.me/#" target="_new">
            <i className="fab fa-telegram-plane"></i>
          </a>
        </li>
        <li>
          <strong> | <a href="https://rach-frontend-six.vercel.app/"> &copy; {new Date().getFullYear()} RachCoin Ecosystem</a>.</strong> All rights reserved.
        </li>
      </ul>

      <div className="flex justify-center">
        <div className="mr-4">
          <a href="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </a>
        </div>
        <div className="mr-4">
          <a href="/terms-of-service" className="text-sm hover:underline">
            Terms of Service
          </a>
        </div>
        <div>
          <a href="/feedback-form" className="text-sm hover:underline">
            Feedback Form
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
