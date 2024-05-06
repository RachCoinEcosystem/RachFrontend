import "../../assets/styles.css";
import { socialMenuItems } from "../../constants";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 animate-fadeIn">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        RACHCOIN
        <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
          {" "}
          ECOSYSTEM
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-100 max-w-4xl animate-slideUp">
        Rachcoin Ecosystem empowers you to take control of your finances and
        safeguard your interactions. We're a leading platform for
        privacy-protected DeFi (decentralized finance) and encrypted
        communication. Experience the freedom to buy, earn, hold, and build
        within a user-friendly environment powered by blockchain technology.
        Join us and redefine the future of finance and communication, where
        privacy and control go hand-in-hand.!
      </p>
      <div className="flex justify-center my-10 animate-bounce">
        <a
          href="#"
          className="bg-gradient-to-r from-yellow-500 to-yellow-700 py-3 px-4 mx-3 rounded-md hover:text-gray-800"
        >
          Sign Up
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border hover:bg-gray-200 hover:text-gray-800"
        >
          Documentation
        </a>
      </div>
      <div>
        <ul className="majorLinks grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center mt-8">
          <li className="majorLink">
            <a href="#markets" className="link">
              <i className="fa fa-shopping-cart mr-2"></i> Buy
            </a>
          </li>
          <li className="majorLink">
            <a href="#features" className="link">
              <i className="fa fa-money-bill-alt mr-2"></i> Earn
            </a>
          </li>
          <li className="majorLink">
            <a href="#wallets" className="link">
              <i className="fa fa-wallet mr-2"></i> Hodl
            </a>
          </li>
          <li className="majorLink">
            <a
              href="https://RachCoin.com/labs/"
              target="_blank"
              rel="noopener"
              className="link"
            >
              <i className="fa fa-building mr-2"></i> Build
            </a>
          </li>
        </ul>
      </div>
      <div id="socialMenu" className="list-none fixed top-1/2 right-3 transform -translate-y-1/2">
      <ul>
        {socialMenuItems.map((item, index) => (
          <li key={index} className="pb-2">
            <a
              href={item.href}
              target="_blank"
              rel="noopener"
              className="flex items-center space-x-2"
            >
              <span className="relative text-white-700">{item.label}</span>
              <i className={`${item.icon} text-yellow-500`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default HeroSection;