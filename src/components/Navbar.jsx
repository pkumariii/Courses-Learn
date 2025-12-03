import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="logo">Grow & Learn</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? "🌜" : "🌝"}

      </button>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;
