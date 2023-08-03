import React, { useContext } from 'react'
import { UserContext } from '../../../App'

export const Address = () => {
  const {add} = useContext(UserContext);
  return (
    <div>Address - {add}</div>
  )
}
