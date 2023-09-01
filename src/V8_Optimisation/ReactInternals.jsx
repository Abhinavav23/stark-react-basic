import React, { createElement, useState } from "react";

export const ReactInternals = () => {
    const [name, setName] = useState('default')
  return (
    <div className='test'>
        <p>React Internals</p>
        <div>Name-{name}</div>
        <button onClick={() => setName('new Name')}>update</button>
    </div>
    // createElement(
    //   "div",
    //   { className: "test", id: "myId" },
    //   createElement("p", null, "React Internals")
    // )
  );
};

const h3El = createElement('h3', {className: 'test', key: '123'}, 'product');
console.log('h3El', h3El);
