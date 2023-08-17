import React, { useState } from "react";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Profile } from "./components/Pages/Profile";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { DynamicProfile } from "./components/Pages/DynamicProfile";
import { Login } from "./components/Pages/Login";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    // <main>
    //   <h2>Stark App</h2>
    //   <button >Home</button>
    //   <button onClick={() => setPage('about')}>About Us</button>
    //   <button onClick={() => setPage('contact')}>Contact US</button>
    //     <br />
    //     <br />
    //     <br />
    //   {page === "home" && <Home />}
    //   {page === "about" && <About />}
    //   {page === "contact" && <Contact />}
    // </main>
    <main>
      <h3>Stark App</h3>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>

      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={loggedIn ? "/home": '/login'} />} />
        <Route path="/home" element={loggedIn ? <Home/> : <Navigate to="/login"/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myProfile" element={<Profile />} />
        <Route
          path="/myProfile/:userId/myuser/:pincode/"
          element={<DynamicProfile />}
        />
        <Route path="/login" element={<Login />} />

        {/* default route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
