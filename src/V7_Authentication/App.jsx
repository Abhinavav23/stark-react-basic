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
import { AuthProvider, useAuth } from "./providers/AuthProvider";
import { Logout } from "./pages/Logout";
import { AuthNavigator } from "./navigator/AuthNavigator";

export const App = () => {
  // const {user} = useAuth();
  // console.log('user', user);
  return (
    <>
      <AuthProvider>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/profile"
              element={
                <AuthNavigator>
                  <Profile />
                </AuthNavigator>
              }
            />
            <Route
              path="/orders"
              element={
                <AuthNavigator>
                  <Orders />
                </AuthNavigator>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<h3>Page Not Found !!</h3>} />
          </Routes>
        </main>
      </AuthProvider>
      <br />
      <br />
      <Footer />
    </>
  );
};
