import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ image, title, description, link, linkText }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <img src={image} alt={title} className="mx-auto mb-4" />
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link to={link} className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
        {linkText}
      </Link>
    </div>
  );
};

export default FeatureCard;
