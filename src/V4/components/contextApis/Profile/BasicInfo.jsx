import React, { useContext } from 'react'
import {UserContext} from '../../../App'
import { Email } from './Email';
export const BasicInfo = () => {
  const {username} = useContext(UserContext)
  return (
    <section>
      <div>BasicInfo</div>
      <div>UserName: {username}</div>
      <Email/>
    </section>
  )
}
