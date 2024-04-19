import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="flex justify-evenly items-center px-8 bg-white text-black h-[84px] border">
      <ul className={`flex items-center space-x-16`}>
        <li className="navbar-link">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link
            to="/transformations"
            className="nav-link"
           
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
      <ul className={`flex items-center space-x-16`}>
        <li className="navbar-link">
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
