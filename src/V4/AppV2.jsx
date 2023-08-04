import React from 'react'
import { MyCart } from './components/contextApis/DynamicContext/Cart/MyCart';
import { Product } from './components/contextApis/DynamicContext/Product/Product';
import { ProductList } from './components/contextApis/DynamicContext/Product/ProductList';

export const AppV2 = () => {
  return (
    <>
        <h2>Stark Shopping App</h2>
        <main style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <ProductList/>
            <MyCart/>
        </main>

    </>
  )
}
