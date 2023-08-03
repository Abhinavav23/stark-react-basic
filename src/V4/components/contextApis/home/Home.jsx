import React, { useContext } from 'react'
import { Product } from './Product'
import {TitleContext} from '../../../App';
export const Home = () => {
  const {title} = useContext(TitleContext);
  return (
    <>
      <h3>Home-{title}</h3>
      <Product/>
      <br />
    </>
  )
}
