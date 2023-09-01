import React, { createElement, memo } from 'react'

export const Product = memo(({info}) => {
    console.log('rendering product');
  return (
    <>
        <h3 className='test'>Product</h3>
        <div>name: {info.name}</div>
        <div>price: {info.price}</div>
    </>
  )
})