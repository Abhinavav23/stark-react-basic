import React, { useContext } from 'react'
import { useAuth } from '../providers/AuthProvider';
// import { AuthContext } from '../providers/AuthProvider';

export const Profile = () => {
    // const {user} = useContext(AuthContext);
    const { user } = useAuth();
    console.log('user', user);
  return (
   <section>
        <h3>Profile</h3>
        <p>Full Name: {user.fullname}</p>
        <p>User Name:{user.username} </p>
        <p>DOB: {user.dob}</p>
   </section>
  )
}
