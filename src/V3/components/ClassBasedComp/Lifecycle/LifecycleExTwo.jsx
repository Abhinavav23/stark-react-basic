import React, { Component } from "react";
import LifeCycleExThree from "./LifeCycleExThree";

export default class LifecycleExTwo extends Component {
  constructor(props) {
    super(props);
    console.log("constructor LifecycleExTwo"); //1
  }
  componentDidMount() {
    console.log("componentDidMount LifecycleExTwo"); //6
  }
  render() {
    console.log("render LifecycleExTwo"); //2
    return (<>
        <div>LifecycleExTwo</div>
        <LifeCycleExThree/>
    </>);
  }
}


// total 6 logs
// 


// function b(){
//     console.log('3');
// }
// function a(){
//     console.log('1');
//     b();
//     console.log('2');
// }
// a(); // 1 3 2