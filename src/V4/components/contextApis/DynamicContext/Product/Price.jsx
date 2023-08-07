import React, { useContext } from 'react'
import { PriceContext } from '../../../../AppV2'

export const Price = ({val}) => {
  const {sendPrice} = useContext(PriceContext);
  return (
    <>
        <div>Price - {val}</div>
        <button onClick={() => sendPrice(val)}>buy</button>
    </>
  )
}
