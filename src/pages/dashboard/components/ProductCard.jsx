import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, image, link, customStyle }) => {
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden w-full h-96 p-4 border-2 border-yellow-500 backdrop-blur-md border-b border-neutral-700/60 ${customStyle}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link to={link} target="_blank">
        <div className="bg-gradient-to-t from-black via-transparent to-transparent p-4 h-full flex flex-col justify-end">
          <h4 className="text-white text-xl font-semibold mb-2">{title}</h4>
          <p className="text-white mb-4">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
