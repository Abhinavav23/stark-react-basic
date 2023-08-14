import React from 'react'

export const Contact = () => {
  return (
    <form>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
        <br />
        <br />
        <label htmlFor="feedback">feedback:</label>
        <textarea name="" id="feedback" cols="30" rows="10"></textarea>
        <br />
        <br />
        <button>send</button>
    </form>
  )
}
