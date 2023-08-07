import React, { useContext } from 'react'
import { PriceContext } from '../../../../AppV2'

export const TotalPrice = () => {
  const {total}  = useContext(PriceContext);
  return (
    // <PriceContext.Consumer>
    //   {
    //     ({total}) => {
    //       return <div>TotalPrice = {total}</div>
    //     }
    //   }
    // </PriceContext.Consumer>
    <div>TotalPrice = {total}</div>
  )
}
