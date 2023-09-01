import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import { About } from "./components/About";
import { Product } from "./components/Product";
import { StateBatching } from "./components/StateBatching";
import { ReactInternals } from "./ReactInternals";

export const App = () => {
  const [counter, setCounter] = useState(10);
  const [username, setUserName] = useState("default");
  console.log("rendering App");

  //   useCallback and useMemo
  //   hook that helps us in memoizing a function
  //   it takes the callback function as a first args
  //   2nd argument which is dep array
  // returns a memoized version of function

  const contactUs = useCallback((message) => {
    console.log(message);
  }, []);

  //   decressing from 0
  const decrement = useCallback(() => {
    // console.log("calling decrement");
    // console.log("counter", counter);
    setCounter(counter - 1);
  }, [counter]);

  //   useMemo is used to memoize the value
  //   first argument could be the func
  //   2nd arg could be dep array which will recalculate the value on changing the var
  //   returns the memoized value if nothing changes in dep array
  const userInfo = useMemo(() => {
    // console.log("calling use memo");
    // console.log("counter", counter);
    // loop that runs 10000 times
    // complex calculation which can take time --> 10 sec
    return { name: "Mobile", price: counter * 1000 };
  }, []);

  return (
    <>
      {/* <section>
        <h2>App</h2>
        <p>count: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setUserName("New user")}>update username</button>
      </section> */}
      <br />
      <main style={{ display: "flex", gap: "2rem" }}>
        {/* <Home username={username} /> */}
        {/* <About contact={contactUs} decrementCount={decrement} /> */}
        {/* <Product info={userInfo} /> */}
        {/* <StateBatching/> */}
        <ReactInternals/>
        <section>section 2</section>
      </main>
    </>
  );
};

// state update causing re render
// parent re rendering is always re rendering the child

// function test(){
//     console.log('test');
// }

// test()

// const userInfo1 = { name: "Mobile", price: 25000 };
// const userInfo2 = { name: "Mobile", price: 25000 };

// console.log(userInfo1 === userInfo2); //true
