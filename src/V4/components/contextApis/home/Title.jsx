import React, { useContext } from 'react'
import { TitleContext, UserContext } from '../../../App'

export const Title = () => {
    // const {title} = useContext(TitleContext);
    const userInfo = useContext(UserContext);
    console.log('userInfo', userInfo);

  return (
    <div>Title </div>
  )
}
