import React from 'react'

export const Colors = ({val}) => {
  console.log('rendering Colors');
  return (
    <>
      <div>Colors: {val.join(" ")}</div>
    </>
  )
}
