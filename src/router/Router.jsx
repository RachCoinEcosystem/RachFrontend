import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Lab from "../pages/lab/Lab";
import backgroundImage from "/bg-1.jpg";
import Login from "../pages/auth/Login";
import ResetPassword from "../pages/auth/ResetPassword";
import Signup from "../pages/auth/Signup";

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
]);

export default router;
