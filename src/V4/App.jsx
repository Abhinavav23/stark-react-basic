import React from 'react'
import { Home } from './components/home/Home'
import { Profile } from './components/Profile/Profile'

export const App = () => {
    const username= 'abhinav';
    const add = 'India'
  return (
    <>
        <h2>Stark App</h2>
        <Home/>
        <Profile username={username} address={add}/>
    </>
  )
}
