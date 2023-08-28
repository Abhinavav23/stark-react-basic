import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dobRef = useRef(null);
  const fullNamedRef = useRef(null);
  const navigate = useNavigate();

  const saveUser = (user) => {
    // read the userList from localStorage
    const userList = localStorage.getItem("userList");
    console.log("userList", userList);
    if (!userList) {
      localStorage.setItem("userList", JSON.stringify([user]));
    }else{
        const list = JSON.parse(userList);
        list.push(user);
        localStorage.setItem("userList", JSON.stringify(list));
    }
  };

  const signUp = (e) => {
    e.preventDefault();
    const credentials = {
      [usernameRef.current.name]: usernameRef.current.value,
      [fullNamedRef.current.name]: fullNamedRef.current.value,
      [dobRef.current.name]: dobRef.current.value,
      [passwordRef.current.name]: passwordRef.current.value,
    };
    console.log(credentials);

    // save the user
    saveUser(credentials);
    navigate('/login')
  };

  return (
    <form className="login-form" onSubmit={signUp}>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username" ref={usernameRef} />
      <br />
      <br />
      <label htmlFor="fullname">Full Name: </label>
      <input type="text" name="fullname" id="fullname" ref={fullNamedRef} />
      <br />
      <br />
      <label htmlFor="dob">DOB: </label>
      <input type="date" name="dob" id="dob" ref={dobRef} />
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" ref={passwordRef} />
      <br />
      <br />
      <input type="submit" value="SignUp" />
    </form>
  );
};
