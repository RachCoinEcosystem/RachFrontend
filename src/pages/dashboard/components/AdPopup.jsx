import React, { useEffect } from 'react';

const AdPopup = ({ adModalVisible, countdownValue, closeEnabled, closeAdPopup, imgSrc, imgLink, onOpenLink }) => {
  if (!adModalVisible) return null; 

  const handleOpenLink = () => {
    if (imgLink) {
      window.open(imgLink, '_blank');
      closeAdPopup();
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause countdown logic if needed
      } else {
        // Resume countdown logic if needed
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Ad Popup</h2>
        {imgSrc && <img src={imgSrc} alt="Ad" className="w-full mb-4" />}
        <p className="text-gray-700 mb-2">
          Thank you for viewing this ad. Your reward will be credited shortly.
        </p>
        <p className="text-indigo-500 font-semibold mb-4">Reward: 1 RachCoin</p>
        <p className="text-red-500 mb-4">
          Please wait {countdownValue} seconds before closing the ad.
        </p>
        <button
          onClick={closeEnabled ? handleOpenLink : undefined}
          className={`w-full py-2 px-4 rounded ${closeEnabled ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          disabled={!closeEnabled}
        >
          {closeEnabled ? 'Open Ad Link' : 'Close Ad Disabled'}
        </button>
      </div>
    </div>
  );
};

export default AdPopup;
