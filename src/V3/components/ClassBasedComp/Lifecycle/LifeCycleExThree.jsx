import React, { Component } from 'react'

export default class LifeCycleExThree extends Component {
  constructor(props){
    super(props)
    console.log('constructor LifeCycleExThree'); //3
  }

  componentDidMount(){
    console.log('componentDidMount LifeCycleExThree'); //5
  }

  render() {
    console.log('render LifeCycleExThree'); //4

    return (
      <div>LifeCycleExThree</div>
    )
  }
}
