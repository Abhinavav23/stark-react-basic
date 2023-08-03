import React, { useContext } from 'react'
import { TitleContext, UserContext } from '../../../App';

export const Email = () => {
    const {email} = useContext(UserContext);
    const title = useContext(TitleContext);
    console.log('title', title);
  return (
    <div>Email -{email} </div>
  )
}
