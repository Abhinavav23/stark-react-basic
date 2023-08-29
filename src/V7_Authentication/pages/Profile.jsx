import React, { useContext, useEffect } from 'react'
import { useAuth } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';

export const Profile = () => {
    // const {user} = useContext(AuthContext);
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log('user', user);
    // useEffect(() => {
    //     if(!user.username){
    //         navigate('/login');
    //     }
    // }, []);
    // console.log('rendering profile');
  return (
   <section>
        <h3>Profile</h3>
        <p>Full Name: {user.fullname}</p>
        <p>User Name:{user.username} </p>
        <p>DOB: {user.dob}</p>
   </section>
  )
}
