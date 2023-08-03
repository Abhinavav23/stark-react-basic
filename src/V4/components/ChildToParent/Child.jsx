import React, { useState } from 'react'

export const Child = ({name, readEmail}) => {
  const [email, setEmail] = useState('');
  return (
    <>
      <div>Child - {name}</div>
      <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

      {/* call the function received from parent and pass the value as argument */}
      <button onClick={() => readEmail(email)}>Pass to parent</button>
    </>
  )
}
