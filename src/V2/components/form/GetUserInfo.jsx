import { useState } from "react";

export const GetUSerInfo = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const saveInfo = (ev) => {
        const {name, value} = ev.target;
        let convertedValue;
        if( name === 'email'){
            convertedValue = value.toLowerCase();
        }else{
            convertedValue = value.toUpperCase();
        }
        // let convertedValue = name === 'email' ? value.toLowerCase() : value.toUpperCase()
        userInfo[name] = convertedValue;
        setUserInfo({...userInfo});
    }

    const signUp = (ev) => {
      ev.preventDefault();
      console.log(userInfo);
    };
  
    return (
      <form onSubmit={signUp}>
        <label htmlFor="firstName">first Name: </label>
        <input type="text" name="firstName" id="firstName" value={userInfo.firstName} onChange={saveInfo} />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input type="text" name="lastName" id="lastName" value={userInfo.lastName} onChange={saveInfo} />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" value={userInfo.email} onChange={saveInfo} />
        <br />
        {/* <button onClick={signUp}>signUp</button> */}
        <input type="submit" value="signUp" />
      </form>
    );
  };
  