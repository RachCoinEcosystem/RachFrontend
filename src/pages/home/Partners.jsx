import React from 'react';
import Metamask from '../../assets/partnerimg/metamask.svg';
import Trustwallet from '../../assets/partnerimg/trustwallet.svg';
import Binancelab from '../../assets/partnerimg/binance-lab.svg';
import Gemini from '../../assets/partnerimg/gemini.svg';
import Mew from '../../assets/partnerimg/mew.svg';
import Atoken from '../../assets/partnerimg/atoken.svg';
import Dappradar from '../../assets/partnerimg/dappradar.svg';
import Staker from '../../assets/partnerimg/staker.svg';

const Partners = () => {
  const PartnersContent = {
    title: "Partners and stakeholders",
    ITEMS: [
      { link: "https://metamask.io/", image: Metamask, title: "Metamask" },
      { link: "https://trustwallet.com/", image: Trustwallet, title: "Trust Wallet" },
      { link: "https://labs.binance.com/", image: Binancelab, title: "Binance Labs" },
      { link: "https://www.gemini.com/frontier-fund", image: Gemini, title: "Gemini" },
      { link: "https://www.myetherwallet.com/", image: Mew, title: "MyEtherWallet" },
      { link: "https://www.atoken.com/", image: Atoken, title: "A Token" },
      { link: "https://dappradar.com/", image: Dappradar, title: "DappRadar" },
      { link: "https://staker.app/", image: Staker, title: "Staker" },
    ],
  };

  const { title, ITEMS } = PartnersContent;

  return (
    <div className="container mx-auto py-8 xl:px-24">
      <h4 className="text-sm sm:text-6xl lg:text-5xl text-center tracking-wide mt-8">
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
          {title}
        </span>
      </h4>
      <p className="mb-8 text-center text-lg text-white">
        Our partners are the best in the industry
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-3">
        {ITEMS.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
          >
            <img src={partner.image} alt={partner.title} className="w-3/4 mx-auto mt-4" />
            <h3 className="text-lg font-semibold mt-4">{partner.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
