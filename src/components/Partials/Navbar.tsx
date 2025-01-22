import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            CodeTyper
          </Link>
        </div>
        {/* <ul className="flex space-x-4">
          <li className="hover:text-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
