import React, { useState } from 'react';

// Dummy data for demonstration
const dummyNfts = [
  { id: 1, name: 'NFT One', description: 'This is NFT One', price: 1.5, imageUrl: '/nft/getstarted.png' },
  { id: 2, name: 'NFT Two', description: 'This is NFT Two', price: 2.0, imageUrl: '/nft/getstarted.png' },
  { id: 3, name: 'NFT Three', description: 'This is NFT Three', price: 0.8, imageUrl: '/nft/getstarted.png' },
];

const NftMarketplace = () => {
  const [nfts, setNfts] = useState(dummyNfts);
  const [newNft, setNewNft] = useState({ name: '', description: '', price: '', imageUrl: '' });
  const [notification, setNotification] = useState('');
  const [selectedNft, setSelectedNft] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNft({ ...newNft, [name]: value });
  };

  const handleAddNft = () => {
    if (!newNft.name || !newNft.description || !newNft.price || !newNft.imageUrl) {
      setNotification('Please fill in all fields.');
      return;
    }

    const nft = {
      id: nfts.length + 1,
      ...newNft,
      price: parseFloat(newNft.price),
    };
    setNfts([...nfts, nft]);
    setNewNft({ name: '', description: '', price: '', imageUrl: '' });
    setNotification('NFT added successfully.');
  };

  const handleBuyNft = (id) => {
    setNfts(nfts.filter((nft) => nft.id !== id));
    setNotification('NFT purchased successfully.');
  };

  const handleNftClick = (nft) => {
    setSelectedNft(nft);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">NFT Marketplace</h3>
      {notification && <div className="mb-4 text-green-500">{notification}</div>}
      <div className="mb-6">
        <h4 className="text-md font-semibold mb-2">Add New NFT</h4>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newNft.name}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newNft.description}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="price"
          placeholder="Price (ETH)"
          value={newNft.price}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newNft.imageUrl}
          onChange={handleInputChange}
          className="mb-2 p-2 border rounded w-full"
        />
        <button onClick={handleAddNft} className="p-2 bg-blue-500 text-white rounded">
          Add NFT
        </button>
      </div>
      <div>
        <h4 className="text-md font-semibold mb-2">Available NFTs</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {nfts.map((nft) => (
            <div key={nft.id} className="border rounded p-4">
              <img
                src={nft.imageUrl}
                alt={nft.name}
                className="w-full h-48 object-cover mb-4 cursor-pointer"
                onClick={() => handleNftClick(nft)}
              />
              <h5 className="text-lg font-semibold">{nft.name}</h5>
              <p className="text-gray-700">{nft.description}</p>
              <p className="text-gray-900 font-semibold">Price: {nft.price} ETH</p>
              <button
                onClick={() => handleBuyNft(nft.id)}
                className="mt-2 p-2 bg-green-500 text-white rounded"
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedNft && (
        <div className="p-4 border rounded mt-6">
          <h3 className="text-lg font-semibold mb-4">NFT Details</h3>
          <img src={selectedNft.imageUrl} alt={selectedNft.name} className="w-full h-74 object-cover mb-4" />
          <p className="text-gray-700 mb-2">{selectedNft.description}</p>
          <p className="text-gray-900 font-semibold mb-4">Price: {selectedNft.price} ETH</p>
          <button
            onClick={() => handleBuyNft(selectedNft.id)}
            className="p-2 bg-green-500 text-white rounded"
          >
            Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default NftMarketplace;
