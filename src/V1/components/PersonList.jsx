import { Logo } from "./Logo";

export const PersonList = () => {
  const today = new Date();
  console.log("today", today);
  console.log("today", today.getFullYear());
  const year = today.getFullYear();
  const loginStatus = false;
  const username = "Abhinav";

  // const value = loginStatus ? username : 'Guest';
  // console.log(value);

  const numbers = [100, 101, 102, 103];
  const names = [
    "Abhinav",
    "Ujjwal",
    "Aswath",
    "Vipin",
    "Shubham",
    "Suraj",
    "Sumit",
    "Vipin",
    "Shubham",
  ];

  return (
    <div>
      <br />
      
     
      <div>Welcome {loginStatus ? username : "Guest"} !</div>
      {/* <div>{numbers}</div> */}
      {/* <div>{names}</div> */}

      {/* repeating code  */}
      {/* <div>Person- 1: {names[0]}</div>
      <div>Person- 2: {names[1]}</div>
      <div>Person- 3: {names[2]}</div> */}

      <div>
        <h3>Person List</h3>
        {/* we have to loop using JS */}
        {names.map((el, i) => {
          return (
            // key prop is required when we render a list of elements
            // the value for key prop should be unique
            // this key prop is used by React internally
            <div key={`id-${i}`}>
              Person - {i + 1} : {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ternary
// condition ? 'true case' : 'false case'

// Welcome Abhinaav
// Welcome Guest

// create a tag in HTML
// select that tag
// calculate value
// insert calculated value in tag

// Person-1 : 'Abhinav'
// Person-2 : 'Abhinav'
// Person-3 : 'Abhinav'

// <div>Person - 1 : Abhinav </div>


// const arr  = [1,5,8,3];

// const doubleArr = arr.map((el) => {
//     return el*2
// })

// console.log(doubleArr);

// 

{true ? <div>123</div> : null}
