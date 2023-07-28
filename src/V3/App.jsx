import React, { useState } from "react";
import { SideEffectExOne } from "./components/sideEffects/SideEffectExOne";
import { AsyncEffect } from "./components/sideEffects/AsyncEffect";
import { Posts } from "./components/FetchDataFromAPi/Posts";
import { Albums } from "./components/FetchDataFromAPi/Albums";
import { CommentsWithLoader } from "./components/FetchDataFromAPi/CommentsWithLoader";
import { ClassCompExOne } from "./components/ClassBasedComp/ClassCompExOne";

export const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h3>App</h3>
      {/* <SideEffectExOne/> */}
      {/* {show && <AsyncEffect />} */}
      {/* <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}

      {/* <Posts/> */}
      {/* <Albums/> */}
      {/* <CommentsWithLoader/> */}
      <ClassCompExOne username={"Abhinav"} batch={"Stark"}/>
    </div>
  );
};
