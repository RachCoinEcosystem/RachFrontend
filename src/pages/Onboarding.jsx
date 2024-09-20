import React, { useState, useEffect } from 'react';
// Import images
import onboardingWelcome from '../assets/onboard/onboarding-welcome.png';
import onboardingStake from '../assets/onboard/onboarding-stake.jpg';
import onboardingNFT from '../assets/onboard/onboarding-nft.jpg';
import onboardingMicrojobs from '../assets/onboard/onboarding-microjobs.png';



const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [countdown, setCountdown] = useState(30);
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  const steps = [
    {
      title: "Welcome to RachCoin!",
      description: "We are excited to have you join our platform! Let's quickly show you how RachCoin works and how you can maximize your experience.",
      image: onboardingWelcome,
    },
    {
      title: "Token Staking",
      description: "Stake your RachCoins and earn rewards. The longer you stake, the more you earn. It's that simple!",
      image: onboardingStake,
    },
    {
      title: "NFT Marketplace",
      description: "Discover, trade, and sell NFTs in our vibrant marketplace. Unlock the future of digital assets!",
      image: onboardingNFT,
    },
    {
      title: "Micro Jobs",
      description: "Earn RachCoin by completing small, easy tasks. Turn your time into earnings with Micro Jobs.",
      image: onboardingMicrojobs,
    },
    {
      title: "Read & Earn",
      description: "Here's how you can earn RachCoin by reading important messages. You can earn your $2 signup bonus by reading this welcome message.",
      isMessage: true,
    },
  ];

  useEffect(() => {
    if (currentStep === 4 && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      if (countdown === 0) {
        clearInterval(timer);
        setIsCountdownComplete(true);
      }

      return () => clearInterval(timer);
    }
  }, [currentStep, countdown]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="relative pt-1 mb-6">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div className={`flex-1 ${currentStep >= 0 ? 'bg-indigo-500' : 'bg-gray-300'}`}></div>
            <div className={`flex-1 ${currentStep >= 1 ? 'bg-indigo-500' : 'bg-gray-300'}`}></div>
            <div className={`flex-1 ${currentStep >= 2 ? 'bg-indigo-500' : 'bg-gray-300'}`}></div>
            <div className={`flex-1 ${currentStep >= 3 ? 'bg-indigo-500' : 'bg-gray-300'}`}></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Step 1</span>
            <span>Step 2</span>
            <span>Step 3</span>
            <span>Finish</span>
          </div>
        </div>

        {/* Step Content */}
        {steps[currentStep] && (
          <div className="step">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {steps[currentStep].title}
            </h2>
            <p className="text-center text-lg text-gray-700 mb-6">
              {steps[currentStep].description}
            </p>
            {steps[currentStep].image && (
              <div className="flex justify-center">
                <img src={steps[currentStep].image} alt={steps[currentStep].title} className="w-64 h-auto" />
              </div>
            )}

            {/* Special Case for Step 5: Read & Earn */}
            {steps[currentStep].isMessage && (
              <>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Welcome to RachCoin</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for joining RachCoin. You are now part of a decentralized platform where you can stake, trade NFTs, and complete tasks for rewards. Stay tuned for upcoming promotions, and remember to keep reading our messages to earn more RachCoin!
                  </p>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800">
                      Time remaining: <span>{countdown}</span> seconds
                    </p>
                  </div>
                </div>
                {isCountdownComplete && (
                  <div className="text-center">
                    <p className="text-lg text-green-500 mb-4">Congratulations! You've earned your $2 signup bonus.</p>
                    <button className="px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Claim Bonus</button>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-50"
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className={`px-4 py-2 ${currentStep === steps.length - 1 ? 'bg-green-500' : 'bg-indigo-500'} text-white rounded`}
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
