import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
// import { AuthContext } from "../providers/AuthProvider";

export const Navbar = () => {
  //   const { user } = useContext(AuthContext);
  const { user } = useAuth();
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/orders">my orders</NavLink>
      {!user.username && <NavLink to="/login">Login</NavLink>}
      {!user.username && <NavLink to="/signup">SignUp</NavLink>}
    </nav>
  );
};
