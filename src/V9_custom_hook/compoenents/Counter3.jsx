import React from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter3 = () => {
  const { counter, increment } = useCounter(50);
  return (
    <>
      <p>Counter-3: {counter}</p>
      <button onClick={() => increment(5)}>add</button>
    </>
  );
};
