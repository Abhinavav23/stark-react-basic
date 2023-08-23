import React, { createRef, useRef, useState } from 'react'
import { Products } from './Products'
import { Navbar } from './Navbar'

export const Home = () => {
  // after updating the comp, if we have updated the value of below variable then we will loose it
  // even after updating it will not cause a re render
  let name = 'default name';



  // we want to update the value and persist it between re renders
  // we don't want to cause a re render on updating it
  // using Refs

  // by calling useRef returns an object which will have current as a prop

  // 1st method
  const ref = useRef(0);

  // used in class comp mostly
  // const ref2 = createRef();

  const updateName = () => {
    name = 'new Name';
    // setting the ref directly
    ref.current = 100;
    
    console.log('name', name);
    console.log('ref', ref);
    console.log('address', address);
    console.log('email', email);
    
  };

  // on updating it will cause a re render
  // it will also persist its value between rerenders
  const[email, setEmail] = useState('default email');
  const[address, setAddress] = useState('default address');

  // console.log('email -->', email);
  // console.log('name --> ', name);
  // console.log('address --> ', address);
  // console.log('ref', ref);

  // console.log('');
  
  return (
    <section>
        <Navbar/>
        <br />
        <br />
        <Products/>
        <br />
        <br />
        <button onClick={updateName}>update Name</button>
        <button onClick={() => setEmail('new Email')}>update email</button>
        <button onClick={() => setAddress('new address')}>update address</button>
    </section>
  )
}
