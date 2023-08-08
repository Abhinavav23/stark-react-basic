import React, { useContext } from 'react'
import { PriceContext } from '../../../../AppV2'

export const Price = ({val}) => {
  const {sendPrice} = useContext(PriceContext);
  console.log('rendering Price');
  return (
    <>
        <div>Price - {val}</div>
        <button onClick={() => sendPrice((prev) => prev+val)}>buy</button>
    </>
  )
}
