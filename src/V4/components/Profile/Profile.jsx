import React from 'react'
import { BasicInfo } from './BasicInfo'
import { Address } from './Address'

export const Profile = ({username, address}) => {
  return (
    <>
      <h3>Profile</h3>
      <BasicInfo name={username}/>
      <Address address={address}/>
    </>
  )
}
