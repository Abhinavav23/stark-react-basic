import React, { useRef } from "react";

export const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const credentials = {
      [usernameRef.current.name]: usernameRef.current.value,
      [passwordRef.current.name]: passwordRef.current.value,
    };
    console.log(credentials);
    // get list of users in localstorage --> getItem
    // find the user in the list of users --> array.find()
    // if yes --> user is valid
        // match the password that user has entered and user created while signup
        // if yes- > move the user to home page
        // if no --> wrong password !! --> validation error
    // if no --> not a valid user --> validation error
  };

  return (
    <form className="login-form" onSubmit={submitForm}>
      <label htmlFor="username">Username: </label>
      <input type="text" name="username" id="username" ref={usernameRef} />
      <br />
      <br />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" ref={passwordRef} />
      <br />
      <br />
      <input type="submit" value="Login" />
    </form>
  );
};
