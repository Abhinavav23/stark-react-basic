import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter2 = () => {
  const { increment, decrement, counter, reset } = useCounter(10);
  return (
    <>
      <p>Counter-2: {counter}</p>
      <button onClick={() => increment(2)}>inc</button>
      <button onClick={() => decrement(2)}>dec</button>
      <button onClick={() => reset(50)}>reset</button>
    </>
  );
};

function testCar(carName) {
  return `testing ${carName}`;
}

testCar("BMW");
testCar("XUV");
testCar("Creta");
