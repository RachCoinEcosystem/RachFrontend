import React from "react";
import CandleStick from "../../assets/candlestick.webp";
import Portfolio from "../../assets/portfolio.webp";
import Wallet from "../../assets/wallet-transfer.webp";
import Earn from "../../assets/earn.webp";
import Farming from "../../assets/farming.webp";


const Product = () => {
  return (
    <div className=" py-8">
      <h3 className="text-sm sm:text-6xl lg:text-5xl text-center tracking-wide mt-20">RachCoin
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
            {" "}
            Products
          </span>
        </h3>

      {/* New product showcase */}
      <div className="flex justify-center mt-10 ">
        <div
          className="rounded-lg shadow-md overflow-hidden w-1/2 h-96 p-4 border-2 border-yellow-500 backdrop-blur-md border-b border-neutral-700/60"
          style={{
            backgroundImage: `url(${Wallet})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            target="_blank"
            href="/news/blog"
          >
            <div>
              <p className="bg-blue-500 text-white py-1 px-2 inline-block rounded">
                NEW
              </p>
              <div className="text-right ml-auto">
                <h3 className="text-blue-500 text-xl font-semibold mt-2 mb-4">
                  RichSwap
                </h3>
                <p className="text-blue-600 mb-4">
                  A decentralized exchange platform for swapping
                  cryptocurrencies.
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 mb-2"></div>
            </div>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 ">
        {/* Other products showcase */}
        <div
          className="rounded-lg shadow-md overflow-hidden w-full h-96 p-4 border-2 border-yellow-500 backdrop-blur-md border-b border-neutral-700/60"
          style={{
            backgroundImage: `url(${Earn})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            target="_blank"
            href="/news/blog"
          >
            {/* Staking */}
          <h4 className="text-blue-500 text-xl font-semibold mt-2 mb-4">Staking</h4>
            <p className="text-blue-600 mb-4">
              Earn rewards by participating in the RachCoin staking protocol.
            </p>
          </a>
        </div>

        {/* Yield Farming */}
        <div
          className="rounded-lg shadow-md overflow-hidden w-full h-96 p-4 border-2 border-yellow-500 backdrop-blur-md border-b border-neutral-700/60"
          style={{
            backgroundImage: `url(${Farming})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            target="_blank"
            href="/news/blog"
          >
          <h4 className="text-blue-500 text-xl font-semibold mt-2 mb-4">Yield Farming</h4>
            <p className="text-blue-600 mb-4">
            Earn passive income by providing liquidity to the RachCoin
              liquidity pools.
            </p>
          </a>
        </div>

        {/* Play-to-Earn Games */}
        <div
          className="rounded-lg shadow-md overflow-hidden w-full h-96 p-4 border-2 border-yellow-500 backdrop-blur-md border-b border-neutral-700/60"
          style={{
            backgroundImage: `url(${CandleStick})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            target="_blank"
            href="/news/blog"
          >
          <h4 className="text-blue-500 text-xl font-semibold mt-2 mb-4">Play-to-Earn Games</h4>
            <p className="text-blue-600 mb-4">
            Engage in fun and rewarding games that let you earn RachCoin
              tokens.
            </p>
          </a>
        </div>

        {/* Governance & Voting */}
        <div
          className="rounded-lg shadow-md overflow-hidden w-full h-96 p-4 border-2 border-yellow-500 backdrop-blur-md border-b border-neutral-700/60"
          style={{
            backgroundImage: `url(${CandleStick})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            target="_blank"
            href="/news/blog"
          >
          <h4 className="text-blue-500 text-xl font-semibold mt-2 mb-4"> Governance & Voting</h4>
            <p className="text-blue-600 mb-4">
            Participate in the governance of the RachCoin ecosystem and vote
              on key proposals.
            </p>
          </a>
        </div>

        {/* RachCoin Portfolio */}
        <div
          className="rounded-lg shadow-md overflow-hidden w-full h-96 p-4 border-2 border-yellow-500 backdrop-blur-md border-b border-neutral-700/60"
          style={{
            backgroundImage: `url(${Portfolio})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            target="_blank"
            href="/news/blog"
          >
          <h4 className="text-blue-500 text-xl font-semibold mt-2 mb-4">RachCoin Portfolio</h4>
            <p className="text-blue-600 mb-4">
            Track your RachCoin investments with our comprehensive portfolio
              management tool.
            </p>
          </a>
        </div>
        {/* NFT Market */}
        <div
          className="rounded-lg shadow-md overflow-hidden w-full h-96 p-4 border-2 border-yellow-500 backdrop-blur-md border-b border-neutral-700/60"
          style={{
            backgroundImage: `url(${Portfolio})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            target="_blank"
            href="/news/blog"
          >
          <h4 className="text-blue-500 text-xl font-semibold mt-2 mb-4">NFT Market</h4>
            <p className="text-blue-600 mb-4">
            Mint and sell your Nft.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
