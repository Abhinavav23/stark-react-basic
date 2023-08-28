import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import "./App.css";
import { Orders } from "./pages/Orders";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./providers/AuthProvider";

export const App = () => {
  return (
   <>
     <AuthProvider>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<h3>Page Not Found !!</h3>} />
        </Routes>
      </main>
    </AuthProvider>
    <Footer/>
   </>
  );
};
