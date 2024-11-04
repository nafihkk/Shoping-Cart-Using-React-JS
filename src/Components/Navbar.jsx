import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoMdHome } from "react-icons/io";
import { IoMdCart } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Shopping App</h1>
      <ul>
        <li><Link to="/"><IoMdHome className='icon'  />Home</Link></li>
        <li><Link to="/cart"><IoMdCart className='icon'  />My Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
