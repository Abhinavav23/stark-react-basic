import React, { useState } from "react";

export const StateBatching = () => {
  const [name, setName] = useState("default-Name");
  const [email, setEmail] = useState("default-mail");
  const [address, setAddress] = useState("default-Address");

  const updateAll = () => {
    console.log('before', name, address, email);
    setName("new name");
    setAddress("new add");
    setEmail("new email");
    console.log('after', name, address, email);
  };
  
  console.log("rendering StateBatching");

  //  before react 18 only event handler were batching the state update calls
  // after react 18 all the calls are batched --> setTimeout, async await, fetch.then(() => {})

  return (
    <>
      <section>
        <div>StateBatching</div>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Address: {address}</div>
      </section>

      <button onClick={() => setName("new name")}>setName</button>
      <button onClick={() => setEmail("new email")}>setEmail</button>
      <button onClick={() => setAddress("new Add")}>setAddress</button>
      <button onClick={updateAll}>update All</button>
    </>
  );
};
