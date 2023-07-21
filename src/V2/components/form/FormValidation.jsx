import React, { useState } from "react";

export const FormValidation = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    batch:'',
    remember: false,
  };
  const [userInfo, setUserInfo] = useState(initialState);
  // const [isError, setIsError] = useState(false);
  const [error, setError] = useState([]);
  const [isSubmitted , setIsSubmitted] = useState(false);

  const saveInfo = (ev) => {
    const { name, value } = ev.target;
    if (name === "remember") {
      userInfo[name] = ev.target.checked;
    } else {
      userInfo[name] = value;
    }
    setUserInfo({ ...userInfo });
  };

  const signUp = (ev) => {
    ev.preventDefault();

    const result = Object.values(userInfo);
    const shouldShowError = result.includes("");
  
    // const errors =  Object.entries(userInfo);

    let errorArr = []
    for(let key in userInfo){
      // checking which all fields for which we need to display error
      if(userInfo[key] === ''){
        errorArr.push(key)
      }
    }
    console.log('error', errorArr);
    setError(errorArr);

    setIsSubmitted(true);

    // scenario 1
    // write the fields name which has to be filled

    // scenario 2
    // firstname --> 3
    // lastname --> 3
    // email --> 7
    // batch --> 2

  };

  return (
    <>
      <form onSubmit={signUp}>
        <label htmlFor="firstName">first Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={userInfo.firstName}
          onChange={saveInfo}
        />
        <br /> <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={userInfo.lastName}
          onChange={saveInfo}
        />
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={userInfo.email}
          onChange={saveInfo}
        />
        <br /> <br />

        <label htmlFor="batch">Batch: </label>
        <input
          type="text"
          name="batch"
          id="batch"
          value={userInfo.batch}
          onChange={saveInfo}
        />
        <br /> <br />
        <input
          type="checkbox"
          name="remember"
          id="remember"
          value="remember"
          checked={userInfo.remember}
          onChange={saveInfo}
        />
        <label htmlFor="remember">Remember Me</label>
        <br /> <br />
        {/* select */}
        {/* textarea */}
        {/*  */}
        <input type="submit" value="signUp" />
      </form>
      {/* {isError && (
        <h3 style={{ color: "red" }}>Please fill all the fields correctly</h3>
      )} */}

      {/* {
        error.map((err, i) => {
          return <div key={i} style={{color: 'red'}}>{err} cant be empty</div>
        })
      } */}

      {
        error.length > 0 ?  error.map((err, i) => {
          return <div key={i} style={{color: 'red'}}>{err} cant be empty</div>
        }) :  isSubmitted &&( <div style={{color: 'green'}}>Success</div>)
      }

    </>
  );
};
