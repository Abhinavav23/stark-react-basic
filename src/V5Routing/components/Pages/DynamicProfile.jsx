import React from 'react'
import { useParams } from 'react-router-dom'

export const DynamicProfile = () => {
    const params = useParams();
    console.log('params', params);

    const userList = [
        {
            username: 'abhinav',
            fullName: 'Abhinav Kumar',
            role: 'Instructor'
        },
        {
            username: 'Aswath',
            fullName: 'Aswath S',
            role: 'Student'
        },
        {
            username: 'Ujjwal',
            fullName: 'Ujjwal Kumar',
            role: 'student'
        }
    ]

    const pinCodeList = [
        {
            pin: 110011,
            city: 'Bangalore'
        },
        {
            pin: 560100,
            city: 'Hyderabad'
        }
    ]

    // find the user from userList based on params and render it below
  return (
   <aside>
        <p>Profile Info</p>
        <div>userName: {params.userId}</div>


        <p>User Address</p>
        {/* render address here */}
   </aside>
  )
}
