import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo192x192.png";
import { navItems } from "../../constants";
import "../../assets/styles.css";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-md border-b border-neutral-700/60">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 mr-2 filter drop-shadow-md"
              src={logo}
              alt="Logo"
            />
            <span className="text-xl tracking-tight gold-text ">
              <b>RACHCOIN</b>
            </span>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href || "#"}
                  className=" py-2 px-3 text-white-700 hover:bg-yellow-600 active:bg-orange-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* <ul
            id="mainMenu"
            className="flex flex-wrap justify-center lg:justify-between"
          >
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.href || "#"} // Add a default href if none provided
                  className="text-white-700 hover:bg-orange-400 active:bg-orange-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white group-hover:text-white-700"
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <ul className="absolute hidden group-hover:block w-full bg-white shadow-md rounded-md mt-1 z-50">
                    {item.submenu.map((subitem, subindex) => (
                      <li key={subindex} className="py-1  hover:bg-orange-400">
                        <a
                          href={subitem.href}
                          className="text-gray-700 px-3 py-2 block focus:outline-none focus:text-gray-900"
                        >
                          {subitem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul> */}

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:bg-yellow-500"
            >
              Sign In
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden ">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 border rounded-md  hover:bg-yellow-500"
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
