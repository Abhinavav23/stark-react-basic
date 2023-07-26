import React, { useEffect, useState } from "react";

export const SideEffectExOne = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(10);

  useEffect(() => {
    console.log('running effect each time');
  })

  useEffect(() => {
    console.log('running only once');
  }, [])

  useEffect(() => {
    console.log('running on counter 1 and counter 2 update');
  }, [counter1, counter2])

  useEffect(() => {
    console.log('running on counter 1 update');
  }, [counter1])

  

  return (
    <>
      <div>counter 1: {counter1}</div>
      <button onClick={() => setCounter1(counter1 + 1)}>+counter1</button>
      <br />
      <div>counter 2: {counter2}</div>
      <button onClick={() => setCounter2(counter2 + 1)}>+counter2</button>
    </>
  );
};
