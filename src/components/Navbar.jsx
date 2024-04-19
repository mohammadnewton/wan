import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex sticky justify-evenly items-center px-8 bg-white text-black h-[84px] border font-inter">
      <ul className={`flex items-center space-x-16 ${isOpen ? 'hidden' : 'lg:flex'}`}>
        <li className="navbar-link">
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link
            to="/transformations"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Transformations
          </Link>
        </li>
      </ul>
      <div className="navbar-logo lg:static absolute left-2">
        <img
          src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3xlbnwwfDB8MHx8fDA%3D"
          alt="Company Logo"
          className="w-20 h-auto"
        />
      </div>
      <ul className={`flex items-center space-x-16 ${isOpen ? 'lg:hidden' : 'lg:flex'}`}>
        <li className="navbar-link">
          <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
      <button
        className={`lg:hidden ${isOpen ? 'fixed right-4' : 'absolute right-4'}`}
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
