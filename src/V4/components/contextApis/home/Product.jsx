import React, { useContext } from 'react'
import { Title } from './Title'
import { UserContext } from '../../../App'
import Price from './Price';

export const Product = () => {
  const user = useContext(UserContext);
  console.log('user', user);
  return (
   <>
     <div>Product</div>
     <Title/>
     <Price/>
   </>
  )
}
