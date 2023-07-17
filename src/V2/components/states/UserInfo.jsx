import { useState } from "react"

export const UserInfo = () => {

    // const [name, setName] = useState('Abhinav');
    // const [email, setEmail] = useState('abhinav@mail');
    // const [batch, setBatch] = useState('stark');


    const [user, setUser] = useState({
        name: 'Abhinav',
        email: 'abhinav@mail',
        batch: 'Stark'
    })

    const [days, setDays] = useState(['Mon', 'Tue', 'Wed'])

    const updateName = () => {
        // setName('New Name')
        // setUser({
        //     name: 'new Name',
        //     email: 'abhinav@mail',
        //     batch: 'Stark'
        // });
       
        /*
        in react while updating the state you shoulod always pass the new referenece to the state
        to see the changes getting affected
        
        // wont work
        console.log('user before', user);
        user.name = 'new name';
        console.log('user after', user);
        setUser(user);
        */

        // update the reference
        setUser({
            ...user,
            name: 'new Name',
        })
    }
    const updateEmail = () => {
        // setUser({
        //     email: 'NewEmail@google.com',
        //     name: 'new Name',
        //     batch: 'Stark'
        // })

        setUser({
            ...user,
            email: 'NewEmail@google.com',
        })
    }

    const addClass = () => {
        console.log('days before', days);
        // days.push('Thurs');
        console.log('days after', days);
        // as we pushing to an array and updating it which will be same ref
        setDays([...days, 'Thurs']);
    }
    
    return (
        <section>
            <h3>UserInfo</h3>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Batch: {user.batch}</p>
            <p>classes: {days.join(", ")}</p>
            <button onClick={updateName}>update name</button>
            <br />
            <button onClick={updateEmail}>update Email</button>
            <br />
            <button onClick={addClass}>add Class</button>
        </section>
    )
}


/*
initially
user ---> {
        name: 'Abhinav',
        email: 'abhinav@mail',
        batch: 'Stark'
    }

after calling setUser({name: 'new Name'})
user --> {name: 'new Name'}
*/



// const obj = {
//     username: 'abhinav',
//     email: 'myemail',
//     username: 'new user',
//     email: "new email"
// }
// console.log('obj', obj);