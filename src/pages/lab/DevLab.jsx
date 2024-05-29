import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaFlask, FaLeanpub } from 'react-icons/fa';
import ideaImage from '../../assets/labs/idea.png';
import helpImage from '../../assets/labs/needmoney.png';
import getfundImage from '../../assets/labs/getfund.png';
import startImage from '../../assets/labs/getstarted.png';

const DevLab = () => {
  const features = [
    {
      image: ideaImage,
      title: 'HAVE AN IDEA?',
      description: 'Do you have a project that involves RachCoin in some way? We want to hear about it!',
    },
    {
      image: helpImage,
      title: 'WOULD MONEY HELP?',
      description: 'Sometimes money is just what it takes to get your idea off the ground.',
    },
    {
      image: getfundImage,
      title: 'GET FUNDED BY US',
      description: 'Our creators set aside funds for the community to use for projects.',
    },
    {
      image: startImage,
      title: 'GET LISTED BY US',
      description: 'Get funded by us and we will list your project here on our website.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 xl:px-24">
      <header className="text-center mb-16">
        <h4 className="text-4xl text-neutral-100 mb-6">RACHCOIN ECOSYSTEM LAB</h4>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-neutral-100 mb-6">
          Bring Your <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">Dreams Forward</span>
        </h1>
        <p className="text-lg text-neutral-100 max-w-4xl mx-auto">
          We strive to grow a broad ecosystem by supporting the community. Rachcoin Labs provides developers, entrepreneurs & creators with the jump start that they need to make vision a reality.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={feature.image} alt={feature.title} className="w-32 h-32 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">{feature.title}</h3>
            <p className="text-lg text-neutral-100">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center mb-16">
        <h3 className="text-4xl text-neutral-100 mb-10">Projects</h3>
        <p className="text-lg text-neutral-100 mb-10">
          Check out some of the cool projects we have funded. <Link to="#" className="text-yellow-500">Apply to be next!</Link>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Add your project items here */}
        </div>
      </section>

      <footer className="text-center mb-16">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="#markets" className="link text-neutral-100 hover:text-yellow-500 transition duration-300 flex items-center">
              <FaPencilAlt className="mr-2" /> Apply
            </Link>
          </li>
          <li>
            <Link to="#features" className="link text-neutral-100 hover:text-yellow-500 transition duration-300 flex items-center">
              <FaFlask className="mr-2" /> Project
            </Link>
          </li>
          <li>
            <Link to="#wallets" className="link text-neutral-100 hover:text-yellow-500 transition duration-300 flex items-center">
              <FaLeanpub className="mr-2" /> Learn More
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default DevLab;
