import React from "react";

function AboutSection() {
  return (
    <div className="flex flex-col items-center mt-8 lg:mt-24 xl:px-24 animate-fadeIn">
      <h4 className="text-4xl sm:text-5xl lg:text-6xl text-center font-extrabold tracking-wide mb-8 text-white">
        Token Info
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
          & Distrib.
        </span>
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-4xl">
        <div className="py-4 px-6 rounded-lg border-2 border-yellow-500 lg:col-span-2 text-center bg-neutral-800">
          <h3 className="text-xl font-semibold text-yellow-500">Smart Contract Address</h3>
          <p className="text-base text-white mt-2">0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82</p>
        </div>
        <div className="py-4 px-6 rounded-lg border-2 border-yellow-500 text-center bg-neutral-800">
          <h3 className="text-xl font-semibold text-yellow-500">Token Name</h3>
          <p className="text-base text-white mt-2">RachCoin</p>
        </div>
        <div className="py-4 px-6 rounded-lg border-2 border-yellow-500 text-center bg-neutral-800">
          <h3 className="text-xl font-semibold text-yellow-500">Token Symbol</h3>
          <p className="text-base text-white mt-2">RACH</p>
        </div>
        <div className="py-4 px-6 rounded-lg border-2 border-yellow-500 text-center bg-neutral-800">
          <h3 className="text-xl font-semibold text-yellow-500">Token Decimal</h3>
          <p className="text-base text-white mt-2">18</p>
        </div>
        <div className="py-4 px-6 rounded-lg border-2 border-yellow-500 text-center bg-neutral-800">
          <h3 className="text-xl font-semibold text-yellow-500">Initial Supply</h3>
          <p className="text-base text-white mt-2">100,000,000</p>
        </div>
        <div className="py-4 px-6 rounded-lg border-2 border-yellow-500 text-center bg-neutral-800">
          <h3 className="text-xl font-semibold text-yellow-500">Max Supply</h3>
          <p className="text-base text-white mt-2">100,000,000</p>
        </div>
        <div className="py-4 px-6 rounded-lg border-2 border-yellow-500 text-center bg-neutral-800">
          <h3 className="text-xl font-semibold text-yellow-500">Circulating Supply</h3>
          <p className="text-base text-white mt-2">100,000,000</p>
        </div>
        <div className="py-4 px-6 rounded-lg border-2 border-yellow-500 text-center bg-neutral-800">
          <h3 className="text-xl font-semibold text-yellow-500">Reserved: Dev, Farm & Marketing</h3>
          <p className="text-base text-white mt-2">0</p>
        </div>
        <div className="py-4 px-6 rounded-lg border-2 border-yellow-500 text-center bg-neutral-800">
          <h3 className="text-xl font-semibold text-yellow-500">Blockchain</h3>
          <p className="text-base text-white mt-2">Staava Network</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
