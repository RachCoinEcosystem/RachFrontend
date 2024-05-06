import React from "react";
// Section7
import Sec7Image1 from "../assets/section7/api.webp";
import Sec7Image2 from "../assets/section7/grant-program.webp";
// Section11
import Near from "../assets/section11/near.svg";
import Metamask from "../assets/section11/metamask.svg";
import Trustwallet from "../assets/section11/trustwallet.svg";
import Opium from "../assets/section11/opium.svg";
import Zerion from "../assets/section11/zerion.svg";
import Revolut from "../assets/section11/revolut.svg";
import Pantera from "../assets/section11/pantera.svg";
import Binancelab from "../assets/section11/binance-lab.svg";
import Dragonflycapital from "../assets/section11/dragonfly-capital.svg";
import Galaxydigital from "../assets/section11/galaxy-digital.svg";
import Paraficapital from "../assets/section11/parafi-capital.svg";
import Gemini from "../assets/section11/gemini.svg";
import Mew from "../assets/section11/mew.svg";
import Atoken from "../assets/section11/atoken.svg";
import Dappradar from "../assets/section11/dappradar.svg";
import Graph from "../assets/section11/graph.svg";
import Staker from "../assets/section11/staker.svg";
import Bitpay from "../assets/section11/bitPay.svg";

export const navItems = [
  { label: "Roadmap", href: "#" },
  { label: "News", href: "#" },
  { label: "Developers", href: "#" },
  { label: "Community", href: "#" },
];

export const socialMenuItems = [
  {
    label: "Documentation",
    href: "#",
    icon: "fab fa-wikipedia-w",
  },
  {
    label: "Discord",
    href: "http://discord.RachCoinEcosystem",
    icon: "fab fa-discord",
  },
  {
    label: "Telegram",
    href: "#",
    icon: "fab fa-telegram",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/RachCoinEcosystem",
    icon: "fab fa-twitter",
  },
  {
    label: "Youtube",
    href: "#",
    icon: "fab fa-youtube",
  },
  {
    label: "Medium",
    href: "#",
    icon: "fab fa-medium",
  },
  {
    label: "Facebook",
    href: "#",
    icon: "fab fa-facebook",
  },
  {
    label: "Github",
    href: "https://github.com/RachCoinEcosystem",
    icon: "fab fa-github",
  },
  {
    label: "Bridge",
    href: "#",
    icon: "fas fa-archway",
  },
];
export const socialMenu = [
  {
    label: "Discord",
    href: "http://discord.RachCoinEcosystem",
    icon: "fab fa-discord",
  },
  {
    label: "Telegram",
    href: "#",
    icon: "fab fa-telegram",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/RachCoinEcosystem",
    icon: "fab fa-twitter",
  },
  {
    label: "Facebook",
    href: "#",
    icon: "fab fa-facebook",
  },
];



export const rachcoinEcosystemEarnings = {
  title: "Earn within the Rachcoin Ecosystem",
  subtitle: "Explore opportunities to grow your Rachcoin (RACH) holdings",
  ITEMS: [
    {
      title: "RachSwap (Coming Soon)",
      subtitle: "Provide liquidity and earn fees by facilitating token swaps on the Rachcoin decentralized exchange.",
      image: Sec7Image2,
    },
    {
      title: "Staking (Coming Soon)",
      subtitle: "Stake your RACH tokens to secure the network and earn rewards.",
      image: Sec7Image2,
    },
    {
      title: "Yield Farming (Coming Soon)",
      subtitle: "Deposit your RACH tokens into liquidity pools on DeFi platforms to earn additional rewards from transaction fees.",
      image: Sec7Image2,
    },
    {
      title: "Play-to-Earn Games (Coming Soon)",
      subtitle: "Earn RACH tokens by playing games built on the Rachcoin blockchain.",
      image: Sec7Image2,
    },
    {
      title: "Governance & Voting (Coming Soon)",
      subtitle: "Hold RACH tokens to participate in Rachcoin's governance and vote on proposals that shape the future of the ecosystem. This may offer indirect earning potential through increased token value.",
      image: Sec7Image2,
    },
  ],
};


export const PartnersContent = {
  title: "Partners and stakeholders",
  ITEMS: [

    {
      link: "https://metamask.io/",
      image: Metamask,
    },
    {
      link: "https://trustwallet.com/",
      image: Trustwallet,
    },
    {
      link: "https://labs.binance.com/",
      image: Binancelab,
    },
    {
      link: "https://www.gemini.com/frontier-fund",
      image: Gemini,
    },
    {
      link: "https://www.myetherwallet.com/",
      image: Mew,
    },
    {
      link: "https://www.atoken.com/",
      image: Atoken,
    },
    {
      link: "https://dappradar.com/",
      image: Dappradar,
    },

    {
      link: "https://staker.app/",
      image: Staker,
    },
  ],
};
const footerContent = {
  protocols: {
    title: "Protocols",
    links: [
      { title: "Liquidity Protocol" },
      { title: "Aggregation Protocol" },
      { title: "Limit Order Protocol" },
    ],
  },
  governance: {
    title: "Governance",
    links: [
      { title: "RachCoin DAO" },
      { title: "RachCoin token" },
      { title: "Forum" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { title: "Help center" },
      { title: "Press room" },
      { title: "Bug report", subtitle: "by Hacker one" },
      { title: "Contacts" },
    ],
  },
  developers: {
    title: "Developers",
    links: [
      { title: "Documentation" },
      { title: "GitHub" },
      { title: "Audit" },
      { title: "Bug bounty" },
    ],
  },
  subscribe: {
    title: "Subscribe to RachCoin newsletter",
    subtitle: "Get the latest news and updates",
  },
  copyright: {
    left: "© 2024 RachCoin, All Rights Reserved.",
    center: "ENS: RachCoin.com",
    right: "BUILD @RachCoin 2024",
  },
};