import React, { createContext, useEffect, useState } from "react";
import { Home } from "./components/contextApis/home/Home";
import { Profile } from "./components/contextApis/Profile/Profile";
import { Parent } from "./components/ChildToParent/Parent";

// Step - 1 create a context
// default value of context is Default user
// default user will be a available as a value to the component which are not wrapped with bUseContext
export const UserContext = createContext("Default User");
export const TitleContext = createContext();
export const TaskContext = createContext();

export const App = () => {
  const username = "abhinav";
  const email = "abhinav@mail";
  const add = "India";
  const title = "Mobile";

  // let task = {title: 'test'};

  const [task, setTask] = useState({title: 'test'})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then((res) => res.json())
    .then((data) => {
      // task = data
      setTask(data)
      console.log('task', task);
    })
  }, [])

  return (
    // <>
    //   <h2>Stark App</h2>

    //   <TitleContext.Provider value={{title, price: 5000}}>
    //     {/* <UserContext.Provider value={"Abhi nav"}> */}
    //     <Home />
    //     {/* </UserContext.Provider> */}
    //   </TitleContext.Provider>

    //   {/* <Profile username={username} address={add}/> */}

    //   {/* step - 2 provide the context */}

    // <UserContext.Provider value={{ username, add, email }}>
    //   <TitleContext.Provider value={title}>
    //     <Profile />
    //   </TitleContext.Provider>
    // </UserContext.Provider>
    // </>

    // <>
    //   <h1>App V4</h1>
    //   <Parent/>
    // </>


    // <TaskContext.Provider value={task}>
    //   <Profile />
    // </TaskContext.Provider>
    <></>
  );
};

// {
//   username: username,
//   add: add
// }

// {username, add} ---> same as above
