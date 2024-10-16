import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-name">SIMA'S SPA</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/quotes">Quotes</Link>
        <Link to="/books">Books</Link>
        <Link to="/songs">Songs</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
 