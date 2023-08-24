import React, { useReducer, useState } from "react";

export const UseReducerEx = () => {
  // it is a hook which takes two arguments
  // 1. callback func / reducer Fun
  // 2. initial state

  // what it returns
  // 1. value
  // 2. setter fn/ dispatch fn

  // this will be called on every dispatch call you make

  // useCase
  // 1. when your next state is dependant on prev state then it a go to method
  const cb = (prev, action) => {
    console.log("initialVal", prev);
    console.log("action", action);
    if (action === "inc") {
      return prev + 1;
    }
    if (action === "dec") {
      return prev - 1;
    }
  };

  const [number, dispatchNumber] = useReducer(cb, 100);

  const [count, setCount] = useState(10);
  // setCount will take updated value

  const userReducer = (state, action) => {
    if (action.type === "ext-cls") {
      const { duration, classes } = state;
      const updatedDuration = duration + action.payload;
      const updatedTotalDurationInWeek = updatedDuration * classes.length;

      const updatedState = {
        ...state,
        duration: updatedDuration,
        totalDurationInWeek: updatedTotalDurationInWeek,
      };
      return updatedState;
    }
  };

  const initialState = {
    username: "abhinavInsNewton",
    role: "Instructor",
    classes: ["mon", "tue", "wed", "thurs", "fri"],
    duration: 2,
    totalDurationInWeek: 10,
    type: "hrs",
  };

  // Reducer 2
  const [user, dispatch] = useReducer(userReducer, initialState);

  //   1. show the days and increase days on button click
  //   2. disable the button when classes becoms 7
  //    3. switch to min view

  return (
    <>
      <div>UseReducerEx</div>
      <p>counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>+count</button>
      <button onClick={() => setCount(count - 1)}>-count</button>
      <p>Number: {number}</p>
      <button onClick={() => dispatchNumber("inc")}>+Number</button>
      <button onClick={() => dispatchNumber("dec")}> - Number</button>

      <section>
        <h2>User Details</h2>
        <p>User: {user.username}</p>
        <p>role: {user.role}</p>
        <p>total: {user.totalDurationInWeek}</p>
        <p>type: {user.type}</p>
        <p>duration: {user.duration}</p>

        <button
          onClick={() =>
            dispatch({
              type: "ext-cls",
              payload: 0.5,
            })
          }
        >
          extendClass by 30 min
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "ext-cls",
              payload: 0.25,
            })
          }
        >
          extendClass by 15 min
        </button>

        <button>switch to min view</button>
      </section>
    </>
  );
};

/*
const arr = [2,6,4,9];
// sum of the el of the array

const sum = arr.reduce((acc, curr) => {
    // whatever was passed from 2nd argument to reduce --> for only the first time
    // value returned from prev iteration will become the acc
    console.log('acc', acc);
    // index value from array
    console.log('curr', curr);
    console.log('returning', acc+curr);
    console.log('');
    return acc+curr //first -> 2
}, 5)

console.log('sum', sum);


// reducer Functions
// pure function  --> returns same results every time when same input is passed
// returned value is always dependant upon prev value
// it returns a single value at the end
*/
