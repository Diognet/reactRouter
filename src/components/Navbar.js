import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink style={navlinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navlinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navlinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navlinkStyles} to="/profile">
        Profile
      </NavLink>
    </nav>
  );
};
