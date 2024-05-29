import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "/flogo.png";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About", href: "#" },
  { label: "News", href: "#" },
  { label: "Developers", href: "/lab" },
  { label: "Community", href: "#" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <header className="xl:px-24 sticky top-0 z-50 py-3 backdrop-blur-md border-b border-neutral-700/60">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 mr-2 filter drop-shadow-md"
              src={logo}
              alt="Logo"
            />
            <span className="text-xl tracking-tight text-white">
              <b>RACHCOIN</b>
            </span>
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="py-2 px-3 text-white-700 hover:bg-yellow-600 active:bg-orange-600 text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="/signin" className="py-2 px-3 border rounded-md hover:bg-yellow-500 text-white border-yellow-500 ">
              Sign In
            </Link>
          </div>
          <div className="text-white lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="/signin" className="py-2 px-3 border rounded-md hover:bg-yellow-500 text-white border-yellow-500">
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
