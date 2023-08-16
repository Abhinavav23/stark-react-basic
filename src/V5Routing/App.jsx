import React, { useState } from "react";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Profile } from "./components/Pages/Profile";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound";
import { Navbar } from "./components/Navbar";
import './App.css';
import { DynamicProfile } from "./components/Pages/DynamicProfile";

export const App = () => {
  const [page, setPage] = useState("home");
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
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myProfile" element={<Profile />} />
        <Route path="/myProfile/:userId/myuser/:pincode/" element={<DynamicProfile />} />
        {/* default route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};
