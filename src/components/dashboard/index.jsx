import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./pages/UserProfile";
import Setting from "./pages/Setting";
import Transaction from "./pages/Transaction";
import Wallet from "./pages/Wallet";
import Staking from "./pages/Staking";
import Pool from "./pages/Pool";
import Minter from "./pages/Minter";
import Exchange from "./pages/Exchange";
import NftMarket from "./pages/NftMarket";
import Trading from "./pages/Trading";
import Vote from "./pages/Vote";
import Rpg from "./pages/Rpg";


const Dashboard = () => {
  return (
    <Router>
      <Routes>
        <Route  element={<Layout />} path="/dashboard/*">
            <Route  element={<Profile />} path="analytics/profile" />
            <Route  element={<Setting />} path="analytics/setting" />
            <Route  element={<Transaction />} path="analytics/history" />
            <Route  element={<Wallet />} path="analytics/wallet" />
            <Route  element={<Staking />} path="earn/staking" />
            <Route  element={<Pool />} path="earn/pool" />
            <Route  element={<Minter />} path="earn/minter" />
            <Route  element={<Exchange />} path="market/exchange" />
            <Route  element={<NftMarket />} path="market/nft-market" />
            <Route  element={<Trading />} path="market/buy-sell" />
            <Route  element={<Vote />} path="govern/vote" />
            <Route  element={<Rpg />} path="game/rpg" />
        </Route>
      </Routes>
    </Router>
  );
};

export default Dashboard;