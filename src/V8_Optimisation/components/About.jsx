import React, { memo, useRef } from "react";

export const About = memo(({ contact }) => {
  console.log("rendering About");
  const messageRef = useRef();

  const handleClick = () => {
    const { value } = messageRef.current;
    contact(value);
  };
  return (
    <section style={{ border: "1px solid #ddd", padding: "1rem" }}>
      <h3>About</h3>
      <label htmlFor="messgae">message: </label>
      <br />
      <input type="text" id="messgae" ref={messageRef} />
      <button onClick={handleClick}>contact</button>
    </section>
  );
});


// const a = () => {
//     return 10
// };
// const b = () => {
//     return 10
// };

// const a = {x: 10}
// const b = {x: 10}

// console.log(a===b);