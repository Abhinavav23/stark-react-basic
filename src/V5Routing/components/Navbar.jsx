import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      {/* <a href="/home">Home</a> */}
      <Link to="/home">Home</Link>
      <br />

      {/* <a href="/about">About US</a> */}
      <Link to="/about">About US</Link>
      <br />

      {/* <a href="/contact">Contact US</a> */}
      <Link to="/contact">Contact US</Link>
      <br />
      {/* <a href="/myProfile">Profile</a> */}
      <Link to="/myProfile">Profile</Link>
      <br />
    </>
  );
};
