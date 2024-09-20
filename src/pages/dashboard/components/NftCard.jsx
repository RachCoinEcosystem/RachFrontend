import React from 'react';

const NftCard = ({ image, title, description, price, buttonText, onButtonClick }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-800 font-semibold">Price: {price} RachCoin</p>
        <button
          className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NftCard;
