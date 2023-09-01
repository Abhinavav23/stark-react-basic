import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter1 = () => {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <p>Counter-1: {counter}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>reset</button>
    </>
  );
};
