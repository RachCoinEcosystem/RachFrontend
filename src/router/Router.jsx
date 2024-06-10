import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Lab from "../pages/lab/Lab";
import backgroundImage from "/bg-1.jpg";
import Login from "../pages/auth/Login";
import ResetPassword from "../pages/auth/ResetPassword";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/layout/Dashboard";
import Wallet from "../pages/dashboard/pages/Wallet";
import CurrencyExchange from "../pages/dashboard/pages/CurrencyExchange";
import Profile from "../pages/dashboard/pages/Profile";
import History from "../pages/dashboard/pages/Transaction";
import Staking from "../pages/dashboard/pages/Staking";
import NftMinter from "../pages/dashboard/pages/Minter";
import NftMarketplace from "../pages/dashboard/pages/NftMarket";
import Pool from "../pages/dashboard/pages/Pool";
import Trading from "../pages/dashboard/pages/Trading";
import Vote from "../pages/dashboard/pages/Vote";
import Games from "../pages/dashboard/pages/Rpg";
import Ads from "../pages/dashboard/pages/Ads";
import Setting from "../pages/dashboard/pages/Setting";


const BackgroundWrapper = ({ children }) => (
  <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
    }}
  >
    {children}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "lab",
        element: <Lab />,
      },
    ],
  },
  {
    path: "signin",
    element: (
      <BackgroundWrapper>
        <Login />
      </BackgroundWrapper>
    ),
  },
  {
    path: "reset-password",
    element: (
      <BackgroundWrapper>
        <ResetPassword />
      </BackgroundWrapper>
    ),
  },
  {
    path: "signup",
    element: (
      <BackgroundWrapper>
        <Signup />
      </BackgroundWrapper>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Wallet />,
      },
      {
        path: "currency-exchange",
        element: <CurrencyExchange />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "stake",
        element: <Staking />,
      },
      {
        path: "nft-minter",
        element: <NftMinter />,
      },
      {
        path: "nft-market",
        element: <NftMarketplace />,
      },
      {
        path: "pool",
        element: <Pool />,
      },
      {
        path: "trading",
        element: <Trading />,
      },
      {
        path: "vote",
        element: <Vote />,
      },
      {
        path: "game",
        element: <Games />,
      },
      {
        path: "ads",
        element: <Ads />,
      },
      {
        path: "settings",
        element: <Setting />,
      },

    ],
  },
]);

export default router;

