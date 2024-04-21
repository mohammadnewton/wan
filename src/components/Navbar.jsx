import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import wan from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex sticky justify-evenly items-center px-8 bg-white text-black h-[84px] border font-inter">
      <ul
        className={`flex items-center space-x-16 ${
          isOpen ? "" : "hidden lg:flex"
        }`}
      >
        <li className="navbar-link">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link
            to="/transformations"
            className={`nav-link ${location.pathname === '/transformations' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Transformations
          </Link>
        </li>
      </ul>
      <div className="navbar-logo lg:static absolute left-2">
        <img
          src={wan}
          alt="Company Logo"
          className="w-20 h-auto"
        />
      </div>
      <ul
        className={`flex items-center space-x-16 ${
          isOpen ? "" : "hidden lg:flex"
        }`}
      >
        <li className="navbar-link">
          <Link
            to="/services"
            className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
        </li>
        <li className="navbar-link">
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        className={`lg:hidden ${isOpen ? "fixed right-4" : "absolute right-4"}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
