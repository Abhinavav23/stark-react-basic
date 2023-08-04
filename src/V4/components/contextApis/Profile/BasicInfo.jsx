import React, { useContext } from 'react'
import {UserContext} from '../../../App'
import { Email } from './Email';
import { Task } from './Task';
export const BasicInfo = () => {
  const {username} = useContext(UserContext)
  return (
    <section>
      <div>BasicInfo</div>
      {/* <div>UserName: {username}</div> */}
      {/* <Email/> */}
      <Task/>
    </section>
  )
}
