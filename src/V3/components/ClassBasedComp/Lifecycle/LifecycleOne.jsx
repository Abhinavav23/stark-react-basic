import React, { Component } from "react";

export default class LifecycleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abhinav",
      //   batch: this.props.batch
    };
    console.log("running constructor");
  }

  componentDidMount() {
    // for side effects
    //
    console.log("running component did mount");
  }

  shouldComponentUpdate() {
    console.log("running shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("running componentDidUpdate");
  }

  getSnapshotBeforeUpdate() {
    console.log("running getSnapshotBeforeUpdate");
    return null
  }

  updateName = () => {
    this.setState({
        ...this.state,
        name: "updated Name"
    })
  }

  render() {
    console.log("running render");
    // this method returns JSX code what needs to be shown in the DOM
    // required method
    return (
      <>
        <div>LifecycleOne</div>
        <div>Name: {this.state.name}</div>
        <button onClick={this.updateName}>change Name</button>
      </>
    );
  }

  static getDerivedStateFromProps() {
    // when state is dependant on props then this method is used
    // to update the value of state based on prop update
    console.log("Running getDerivedStateFromProps");
    return null;
  }
}

// const a = 20

// const b = a*40;

// const c = 40*10
