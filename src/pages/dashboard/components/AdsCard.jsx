import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAd } from "react-icons/fa";
import blacklogo from "/1.jpg"; // Ensure this path is correct

const Ads = ({ toggleSidebar }) => {
  const location = useLocation();

  return (
    <div id="ads" className="p-4 bg-gray-800 shadow rounded ">
      <Link
        to="/dashboard/ads"
        className={`flex flex-col items-center md:flex-row md:items-start md:justify-start border border-yellow-500 ${
          location.pathname === "/dashboard/ads" ? "bg-blue-700" : ""
        } p-2 rounded transition duration-300`}
        onClick={toggleSidebar}
      >
        <div className="mt-2 w-full">
          <img
            src={blacklogo}
            alt="Dummy Ad"
            className="w-full rounded mb-4"
          />
          <p className="text-white">
            This is a dummy ad content. Click the link above to manage your
            ads in the dashboard.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Ads;
