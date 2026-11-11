import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">

        <Link to="/" className="logo">
          BookNest<span>.</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/features">Features</Link>
          <Link to="/cart">Cart</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;