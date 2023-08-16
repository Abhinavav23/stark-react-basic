import React from "react";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      {/* <a href="/home">Home</a> */}
      {/* <Link to="/home">Home</Link> */}
      <NavLink to="/home">Home</NavLink>
      <br />

      {/* <a href="/about">About US</a> */}
      {/* <Link to="/about">About US</Link> */}
      <NavLink to="/about">About</NavLink>
      <br />

      {/* <a href="/contact">Contact US</a> */}
      {/* <Link to="/contact">Contact US</Link> */}
      <NavLink to="/contact">Contact US</NavLink>
      <br />
      
      {/* <a href="/myProfile">Profile</a> */}
      {/* <Link to="/myProfile">Profile</Link> */}
      <NavLink to="/myProfile">Profile</NavLink>

      <br />

      {/* <a href="https://www.flipkart.com"> flipkart</a> */}
    </>
  );
};
