import React from 'react'
import { Colors } from './Colors'
import { Price } from './Price'

export const Product = ({colors, price, title}) => {
  return (
    <section style={{display: 'flex', flexDirection:'column'}}>
      <h3 >{title}</h3>
      <Colors val={colors}/>
      <br />
      <Price val={price}/>
    </section>
  )
}
