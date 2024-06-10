import React, { useState } from 'react';

const NftMinter = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [mintingStatus, setMintingStatus] = useState('');
  const [nftData, setNftData] = useState(null);
  const [nftHistory, setNftHistory] = useState([]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleMint = async () => {
    if (!name || !description || !image) {
      setMintingStatus('Please fill in all fields and upload an image.');
      return;
    }

    setMintingStatus('Minting in progress...');

    // Dummy function to mimic minting NFT
    const mintNFT = async (name, description, image) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            name,
            description,
            imageUrl: URL.createObjectURL(image),
            tokenId: Math.floor(Math.random() * 100000),
            date: new Date().toLocaleString(),
          });
        }, 2000);
      });
    };

    try {
      const nft = await mintNFT(name, description, image);
      setNftData(nft);
      setNftHistory((prevHistory) => [...prevHistory, nft]);
      setMintingStatus('Minting successful!');
    } catch (error) {
      setMintingStatus('Minting failed. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Mint a New NFT</h3>
      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Description:</label>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <button onClick={handleMint} className="p-2 bg-blue-500 text-white rounded">
        Mint NFT
      </button>
      {mintingStatus && <div className="mt-4">{mintingStatus}</div>}
      {nftData && (
        <div className="mt-4">
          <h4 className="text-md font-semibold">Minted NFT Details:</h4>
          <p>Name: {nftData.name}</p>
          <p>Description: {nftData.description}</p>
          <img src={nftData.imageUrl} alt={nftData.name} className="mt-2 w-48 h-48 object-cover" />
          <p>Token ID: {nftData.tokenId}</p>
          <p>Minted On: {nftData.date}</p>
        </div>
      )}
      <div className="mt-6">
        <h4 className="text-md font-semibold mb-2">Minted NFT History:</h4>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Token ID</th>
              <th className="py-2 px-4 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {nftHistory.map((nft, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{nft.name}</td>
                <td className="py-2 px-4 border">{nft.description}</td>
                <td className="py-2 px-4 border">
                  <img src={nft.imageUrl} alt={nft.name} className="w-16 h-16 object-cover" />
                </td>
                <td className="py-2 px-4 border">{nft.tokenId}</td>
                <td className="py-2 px-4 border">{nft.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NftMinter;
