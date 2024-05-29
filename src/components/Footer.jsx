import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaFacebookF,
  FaDiscord,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";

const socialMediaLinks = [
  { href: "https://www.youtube.com/channel/#", icon: FaYoutube },
  { href: "https://web.facebook.com/#", icon: FaFacebookF },
  { href: "https://discord.com/invite/#", icon: FaDiscord },
  { href: "https://twitter.com/#", icon: FaTwitter },
  { href: "https://t.me/#", icon: FaTelegramPlane },
];

const Footer = () => {
  return (
    <footer className="xl:px-24 bg-black-200 text-white p-4 border-t border-neutral-700/60">
      <div className="flex justify-center items-center flex-wrap mb-4">
        <span className="mr-6 font-bold">Our Social Media Presence</span>
        {socialMediaLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 text-2xl hover:text-yellow-500 transition-colors duration-300"
          >
            <link.icon />
          </Link>
        ))}
        <span className="font-bold">
          |{" "}
          <Link
            to="https://rach-frontend-six.vercel.app/"
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            &copy; {new Date().getFullYear()} RachCoin Ecosystem
          </Link>
          . All rights reserved.
        </span>
      </div>

      <div className="flex justify-center">
        <Link
          to="/privacy-policy"
          className="text-sm mr-4 hover:underline hover:text-yellow-500 transition-colors duration-300"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms-of-service"
          className="text-sm mr-4 hover:underline hover:text-yellow-500 transition-colors duration-300"
        >
          Terms of Service
        </Link>
        <Link
          to="/feedback-form"
          className="text-sm hover:underline hover:text-yellow-500 transition-colors duration-300"
        >
          Feedback Form
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
