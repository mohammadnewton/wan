import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center py-4 px-8 bg-white text-black">
      <ul className="flex items-center space-x-16">
        <li className="navbar-link">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/transformations" className="nav-link">
            Transformations
          </Link>
        </li>
      </ul>
      <div className="navbar-logo">
        <img
          src="your-logo-url"
          alt="Company Logo"
          className="w-20 h-auto"
        />
      </div>
      <ul className="flex items-center space-x-16">
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
