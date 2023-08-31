import React, { useState } from "react";

import { memo } from "react";

const Home = (props) => {
    console.log('props', props);
  const [login, setLogin] = useState(false);

  console.log("rendering Home");
  return (
    <section style={{ border: "1px solid #ddd", padding: "1rem" }}>
      <h3>Home -- {props.username}</h3>
      <p> {login ? "Welcome" : "Please login"}</p>
      <button onClick={() => setLogin(!login)}>
        {login ? "logout" : "login"}
      </button>
    </section>
  );
};

export default memo(Home);
// export default Home;

// memo restricts the unesessary re render
// comparing the props passed previously and currently
// if there is no change then it will not rerender the comp

// memo
// takes comp as argument
// returns a memoized version of that comp




// function Home(){
//     return 'Home'
// }


// Home();
// Home();

// function multiply(a,b){
//     return a*b
// }

// function TenMultiply(x){
//     return multiply(10,x)
// }

// TenMultiply();