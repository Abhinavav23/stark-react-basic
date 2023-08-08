import React, { useContext } from 'react'
import { EntertainmentContext } from './context/EnterTainmentProvider'

export const TvList = () => {
   const {offering} =  useContext(EntertainmentContext);
   console.log(offering);
  return (
    <div>TvList</div>
  )
}
