import React from 'react'
import { TotalPrice } from './TotalPrice'
import { Address } from './Address'

export const MyCart = () => {
  return (
   <section style={{display: 'flex', flexDirection:'column'}}>
    <h3>My cart</h3>
    <TotalPrice/>
    <Address/>
   </section>
  )
}
