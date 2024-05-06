import React from 'react';
import { socialMenu } from "../../constants";

const Community = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Join Us
      </h2>
      <p className="text-secondary mb-5 md:mb-8 text-center">
        Join our community and stay up to date with the latest news and updates
      </p>
      <div className="flex flex-wrap justify-center space-x-4">
        {socialMenu.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600"
          >
            <i className={item.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Community;
