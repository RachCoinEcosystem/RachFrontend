import React from "react";


function AboutSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h4 className="text-sm sm:text-6xl lg:text-5xl text-center tracking-wide">
        Token Info
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
          {" "}
          & Distrib.
        </span>
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-6 ">
        <div className="py-3 px-4 rounded-md border-2 border-yellow-500 lg:col-span-full text-center">
          <h3 className="text-lg font-semibold">Smart Contract Address</h3>
          <p className="text-sm">0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82</p>
        </div>
        <div className="py-3 px-4 rounded-md border-2 border-yellow-500 text-center">
          <h3 className="text-lg font-semibold">Token Name</h3>
          <p className="text-sm">RachCoin</p>
        </div>
        <div className="py-3 px-4 rounded-md border-2 border-yellow-500 text-center">
          <h3 className="text-lg font-semibold">Token Symbol</h3>
          <p className="text-sm">RACH</p>
        </div>
        <div className="py-3 px-4 rounded-md border-2 border-yellow-500 text-center">
          <h3 className="text-lg font-semibold">Token Decimal</h3>
          <p className="text-sm">18</p>
        </div>
        <div className="py-3 px-4 rounded-md border-2 border-yellow-500 text-center">
          <h3 className="text-lg font-semibold">Initial Supply</h3>
          <p className="text-sm">100,000,000</p>
        </div>
        <div className="py-3 px-4 rounded-md border-2 border-yellow-500 text-center">
          <h3 className="text-lg font-semibold">Max Supply</h3>{" "}
          <p className="text-sm">100,000,000</p>
        </div>

        <div className="py-3 px-4 rounded-md border-2 border-yellow-500 text-center">
          <h3 className="text-lg font-semibold">Circulating Supply</h3>
          <p className="text-sm">100,000,000</p>
        </div>
        <div className="py-3 px-4 rounded-md border-2 border-yellow-500 text-center">
          <h3 className="text-lg font-semibold">
            Reserved: Dev, Farm & Marketing
          </h3>
          <p className="text-sm">0</p>
        </div>
        <div className="py-3 px-4 rounded-md border-2 border-yellow-500 text-center">
          <h3 className="text-lg font-semibold">Blockchain</h3>
          <p className="text-sm">Staava Network</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
