import React, { useState } from "react";

export const FormValidationV2 = () => {
  const noError = {
    email: false,
    password: false,
  };
  const [error, setError] = useState(noError);

  const [userInfo, setUserInfo] = useState({})

  const saveAndValidateInfo = (ev) => {
    if (ev.target.value === "") {
      setError({ ...error, [ev.target.name]: true });
    } else {
      setError({ ...error, [ev.target.name]: false }); //rerender your comp //1
       setUserInfo({ ...userInfo, [ev.target.name]: ev.target.value });
    }
  };

//   task -1 throw customised error messages
// empty value -> cant be empty
// invalid value -> please enter a valid value

// setstate call is same as setTimeout call 
  const signUp = (ev) => {
    ev.preventDefault();
    console.log('userInfo', userInfo);
  };
  return (
    <form onSubmit={signUp}>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        onBlur={saveAndValidateInfo}
      />
      {error.email && (
        <div style={{ color: "red", fontSize: "12px" }}>
          email cant be empty
        </div>
      )}
      <br /> <br />
      <label htmlFor="email">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        onBlur={saveAndValidateInfo}
      />
      {error.password && (
        <div style={{ color: "red", fontSize: "12px" }}>
          please enter a valid password
        </div>
      )}
      <br /> <br />
      <input type="submit" value="signUp" />
    </form>
  );
};
