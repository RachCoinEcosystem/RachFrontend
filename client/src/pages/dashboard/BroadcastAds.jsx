import React, { useState, useCallback } from 'react';
import AdPopup from './components/AdPopup';

import AmazingImg from '../../assets/bads/ad-banner1.png';
import OfferImg from '../../assets/bads/ad-banner2.png';
import ExclusiveImg from '../../assets/bads/ad-banner3.jpg';

const BroadcastAds = () => {
  const [countdownValue, setCountdownValue] = useState(30);
  const [adModalVisible, setAdModalVisible] = useState(false);
  const [closeEnabled, setCloseEnabled] = useState(false);
  const [currentAdImage, setCurrentAdImage] = useState(null);
  const [currentAdLink, setCurrentAdLink] = useState(null);

  const openAdPopup = useCallback((imgSrc, imgLink) => {
    setCurrentAdImage(imgSrc);
    setCurrentAdLink(imgLink);
    setAdModalVisible(true);
    setCloseEnabled(false);
    let countdown = 30;
    setCountdownValue(countdown);

    const timer = setInterval(() => {
      countdown -= 1;
      setCountdownValue(countdown);

      if (countdown === 0) {
        clearInterval(timer);
        setCloseEnabled(true);
      }
    }, 1000);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        setCountdownValue(countdown);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(timer);
    };
  }, []);

  const closeAdPopup = useCallback(() => {
    setAdModalVisible(false);
    alert('You earned RachCoins for viewing the ad!');
  }, []);

  const AdBanner = ({ imgSrc, title, description, reward, imgLink }) => (
    <div className="ad bg-gray-100 p-4 rounded-lg shadow mb-4 flex justify-between items-center">
      <img src={imgSrc} alt={title} className="w-32 h-20 object-cover rounded" />
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-indigo-500 font-semibold mt-2">Reward: {reward} RachCoin</p>
      </div>
      <button onClick={() => openAdPopup(imgSrc, imgLink)} className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
        View Ad
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <main className="flex-grow p-8">
        <section className="mb-8">
          <div className="bg-indigo-600 text-white text-center py-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">Broadcast Ads</h1>
            <p className="mt-2 text-lg">View ads, click on banners, and earn RachCoins!</p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Available Ads</h2>
            <AdBanner
              imgSrc={AmazingImg}
              title="Amazing Product!"
              description="Click to explore this amazing product and earn RachCoins."
              reward={1}
              imgLink="https://example.com/amazing-product"
            />
            <AdBanner
              imgSrc={OfferImg}
              title="Exclusive Offer!"
              description="Check out this exclusive offer and earn RachCoins."
              reward={2}
              imgLink="https://example.com/exclusive-offer"
            />
            <AdBanner
              imgSrc={ExclusiveImg}
              title="Exclusive Offer!"
              description="Check out this exclusive offer and earn RachCoins."
              reward={2}
              imgLink="https://example.com/exclusive-offer"
            />
            <div className="mt-6 flex justify-between items-center">
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">Previous</button>
              <span className="text-gray-700">Page 1 of 3</span>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">Next</button>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Post Your Ad</h2>
            <p className="text-gray-700 mb-4">Advertise your product to users and pay them RachCoin to view your ad.</p>
            <form>
              <div className="mb-4">
                <label htmlFor="adTitle" className="block text-sm font-semibold text-gray-700">Ad Title</label>
                <input type="text" id="adTitle" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your ad title" />
              </div>

              <div className="mb-4">
                <label htmlFor="adImage" className="block text-sm font-semibold text-gray-700">Upload Image</label>
                <input type="file" id="adImage" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>

              <div className="mb-4">
                <label htmlFor="adLink" className="block text-sm font-semibold text-gray-700">Ad Link</label>
                <input type="url" id="adLink" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="https://your-link.com" />
              </div>

              <div className="mb-4">
                <label htmlFor="adPayment" className="block text-sm font-semibold text-gray-700">Amount to Pay (RachCoins)</label>
                <input type="number" id="adPayment" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter amount in RachCoins" />
              </div>

              <button type="submit" className="w-full py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Post Ad</button>
            </form>
          </div>
        </section>
      </main>

      <AdPopup
        adModalVisible={adModalVisible}
        countdownValue={countdownValue}
        closeEnabled={closeEnabled}
        closeAdPopup={closeAdPopup}
        imgSrc={currentAdImage}
        imgLink={currentAdLink} 
      />
    </div>
  );
};

export default BroadcastAds;
