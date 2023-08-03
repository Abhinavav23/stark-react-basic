import React from 'react'
import { Child } from './Child'

export const Parent = () => {
  const name = 'Abhinav';

  // create a function in parent
  const getEmail = (email) => {
    console.log('Email', email);
  }
  return (
    <>
        <div>Parent</div>
        {/* pass function as prop to child */}
        <Child name={name} readEmail={getEmail}/>
    </>
  )
}
