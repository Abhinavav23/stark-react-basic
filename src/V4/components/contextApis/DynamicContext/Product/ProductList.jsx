import React from 'react'
import { Product } from './Product'

export const ProductList = () => {
  return (
    <section style={{display: 'flex', flexDirection:'column'}}>
        <div>ProductList</div>
        <Product colors={['white', 'black']} price={5000} title={"Shirt"}/>
        <Product colors={['green', 'pink']} price={3000} title={"tshirt"}/>
        <Product colors={['red', 'blue']} price={6000} title={"Jean"}/>
    </section>
  )
}
