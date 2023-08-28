import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>SignUp</NavLink>
    </nav>
  );
};
