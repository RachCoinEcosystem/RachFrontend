import React from "react";
import CandleStick from "../../assets/images/candlestick.webp";
import Portfolio from "../../assets/images/portfolio.webp";
import Wallet from "../../assets/images/wallet-transfer.webp";
import Earn from "../../assets/images/earn.webp";
import Farming from "../../assets/images/farming.webp";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";


const Products = () => {
  return (
    <div className="container mx-auto py-8 xl:px-24">
      <h3 className="text-sm sm:text-6xl lg:text-5xl text-center tracking-wide mt-20 text-white">
        RachCoin
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
          {" "}Products
        </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <ProductCard
          title="Staking"
          description="Earn rewards by participating in the RachCoin staking protocol."
          image={Earn}
          link="#"
          customStyle="bg-purple-500 hover:bg-purple-700"
        />
        <ProductCard
          title="Yield Farming"
          description="Earn passive income by providing liquidity to the RachCoin liquidity pools."
          image={Farming}
          link="#"
          customStyle="bg-green-500 hover:bg-green-700"
        />
        <ProductCard
          title="Play-to-Earn Games"
          description="Engage in fun and rewarding games that let you earn RachCoin tokens."
          image={CandleStick}
          link="#"
          customStyle="bg-blue-500 hover:bg-blue-700"
        />
        <ProductCard
          title="Governance & Voting"
          description="Participate in the governance of the RachCoin ecosystem and vote on key proposals."
          image={CandleStick}
          link="#"
          customStyle="bg-red-500 hover:bg-red-700"
        />
        <ProductCard
          title="RachCoin Portfolio"
          description="Track your RachCoin investments with our comprehensive portfolio management tool."
          image={Portfolio}
          link="#"
          customStyle="bg-yellow-500 hover:bg-yellow-700"
        />
        <ProductCard
          title="NFT Market"
          description="Mint and sell your NFTs."
          image={Portfolio}
          link="#"
          customStyle="bg-pink-500 hover:bg-pink-700"
        />
      </div>
    </div>
  );
};

export default Products;
