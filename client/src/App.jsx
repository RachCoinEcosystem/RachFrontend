import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import ResetPassword from './pages/auth/ResetPassword';
import ForgetPassword from './pages/auth/ForgetPassword';
import Explore from './pages/Explore';
import Onboarding from './pages/Onboarding';
import BroadcastAds from './pages/dashboard/BroadcastAds';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/Setting';
import ViewAds from './pages/dashboard/BroadcastAds';
import Overview from './pages/dashboard/Overview';
import Farming from './pages/dashboard/Farming';
import Messages from './pages/dashboard/Inbox';
import NftFarming from './pages/dashboard/Nft';
import MicroJob from './pages/dashboard/MicroJobs';
import MarketPlace from './pages/dashboard/Marketplace';
import Staking from './pages/dashboard/Stake';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/broadcast-ads" element={<BroadcastAds />} />

        {/* Dashboard route with child routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="view-ads" element={<ViewAds />} />
          <Route path="farming" element={< Farming/>} />
          <Route path="inbox" element={<Messages />} />
          <Route path="micro-jobs" element={<MicroJob />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="nft" element={<NftFarming />} />
          <Route path="stake" element={<Staking />} />
          <Route path="setting" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
