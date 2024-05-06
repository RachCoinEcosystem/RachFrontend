import React from 'react';
import { PartnersContent } from '../../constants';

const Partners = () => {
  const { title, ITEMS } = PartnersContent;

  return (
    <div className="container mx-auto mt-6 lg:mt-20">
      <h4 className="text-sm sm:text-6xl lg:text-5xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
          {title}
        </span>
      </h4>
      <p className="text-secondary mb-5 md:mb-8 text-center">Our partners are the best in the industry</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center mt-8">
        {ITEMS.map((partner, index) => (
          <div key={index} className="p-3 border-2 border-yellow-500 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{partner.title}</h3>
            <img src={partner.image} alt={partner.title} className="mt-4 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
