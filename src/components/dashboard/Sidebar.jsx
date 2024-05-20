import React, { useState } from 'react';
import CandleStick from "../../assets/candlestick.webp";

const SidebarItem = ({ href, children }) => (
  <li>
    <a href={href} className="block px-4 py-2 hover:bg-gray-700 rounded flex items-center">
      {children}
    </a>
  </li>
);

const DropdownItem = ({ children }) => (
  <li className="pl-4">
    {children}
  </li>
);

const Dropdown = ({ label, iconClass, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block px-4 py-2 hover:bg-gray-700 rounded w-full text-left flex items-center"
      >
        <i className={`${iconClass} mr-2`}></i>
        {label}
      </button>
      {isOpen && (
        <ul className="space-y-2">
          {children}
        </ul>
      )}
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold">Sidebar</div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          <Dropdown label="Analytics" iconClass="fas fa-chart-line">
            <DropdownItem>
              <SidebarItem href="/dashboard/analytics/profile">
                <i className="fas fa-user-circle mr-2"></i>Profile
              </SidebarItem>
            </DropdownItem>
            <DropdownItem>
              <SidebarItem href="/dashboard/analytics/wallet">
                <i className="fas fa-wallet mr-2"></i>Wallet
              </SidebarItem>
            </DropdownItem>
            <DropdownItem>
              <SidebarItem href="/dashboard/analytics/history">
                <i className="fas fa-history mr-2"></i>Transaction
              </SidebarItem>
            </DropdownItem>
            <DropdownItem>
              <SidebarItem href="/dashboard/analytics/setting">
                <i className="fas fa-cog mr-2"></i>Setting
              </SidebarItem>
            </DropdownItem>
          </Dropdown>
          <Dropdown label="Market" iconClass="fas fa-shopping-cart">
            <DropdownItem>
              <SidebarItem href="/dashboard/market/exchange">
                <i className="fas fa-exchange-alt mr-2"></i>Exchange
              </SidebarItem>
            </DropdownItem>
            <DropdownItem>
              <SidebarItem href="/dashboard/market/nft-market">
                <i className="fas fa-palette mr-2"></i>NFT Market
              </SidebarItem>
            </DropdownItem>
            <DropdownItem>
              <SidebarItem href="/dashboard/market/buy-sell">
                <i className="fas fa-chart-line mr-2"></i>Trading
              </SidebarItem>
            </DropdownItem>
          </Dropdown>
          <Dropdown label="Earn" iconClass="fas fa-coins">
            <DropdownItem>
              <SidebarItem href="/dashboard/earn/staking">
                <i className="fas fa-layer-group mr-2"></i>Staking
              </SidebarItem>
            </DropdownItem>
            <DropdownItem>
              <SidebarItem href="/dashboard/earn/pool">
                <i className="fas fa-water mr-2"></i>Pool
              </SidebarItem>
            </DropdownItem>
            <DropdownItem>
              <SidebarItem href="/dashboard/earn/minter">
                <i className="fas fa-paint-brush mr-2"></i>Mint NFT
              </SidebarItem>
            </DropdownItem>
          </Dropdown>
          <Dropdown label="Games" iconClass="fas fa-gamepad">
            <DropdownItem>
              <SidebarItem href="/dashboard/game/rpg">
                <i className="fas fa-dice-d20 mr-2"></i>RPG
              </SidebarItem>
            </DropdownItem>
          </Dropdown>
          <Dropdown label="Govern" iconClass="fas fa-gavel">
            <DropdownItem>
              <SidebarItem href="/dashboard/govern/vote">
                <i className="fas fa-vote-yea mr-2"></i>Vote
              </SidebarItem>
            </DropdownItem>
          </Dropdown>

          {/* Ad section */}
          <li className="mt-6">
            <img src={CandleStick} alt="Ads" className="w-full rounded" />
          </li>

          <SidebarItem href="/">
            <i className="fas fa-sign-out-alt mr-2"></i>
            Logout
          </SidebarItem>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
