import { useState } from "react";

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (no=1) => {
    setCounter(counter + no);
  };
  const decrement = (no=1) => {
    setCounter(counter - no);
  };
  const reset = (no=initialValue) => {
    setCounter(no);
  };

  return { counter, increment, decrement, reset };
};
