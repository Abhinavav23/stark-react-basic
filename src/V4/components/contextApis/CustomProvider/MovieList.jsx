import React from 'react'
import { Movies } from './Movies'

export const MovieList = () => {
  return (
    <section style={{display: 'flex', flexDirection:'column'}}>
     <div>MovieList</div>
     <Movies/>
   </section>
  )
}
