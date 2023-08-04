import React, { useContext } from 'react'
import { TaskContext } from '../../../App'

export const Task = () => {
    const {title, completed} = useContext(TaskContext);
  return (
   <>
     <div>Task Title --- {title}</div>
     <div>Status - {completed ? 'Done': 'Pending'}</div>
   </>
  )
}
