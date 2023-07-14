import { useState } from "react";

export const Name = () => {

    // using normal JS variable
    let username = 'default user';
    const printName = () => {
        console.log('before logging ', username);
        username = 'Abhinav'
        console.log('after logging ', username);
    }

    // using states
    let [user, setUser] = useState('Guest'); //[val1, val2]
    // console.log('val', val);
    let [email, setEmail] = useState('defalt@mail')

    const updateName = () => {
        console.log('updating name');
        // user = 'Shubham'
        setUser('shubham');
    }

    const updateEmail = () => {
        setEmail('abhimav@mail')
    }

    const updateEmailAndUser = () => {
        setEmail('newEmail@mail.com');
        setUser('updated user');
    }


    return (
        <section style={{margin: '20px'}}>
            <p>Name</p>
            <button onClick={printName}>login</button>
            <p>{ username }</p>

            <br/>
            <br/>
            <br/>

            {/* using state */}
            <p> user: { user }</p>
            <button onClick={updateName}>login using state</button>
            <br/>
            <p>Email: {email}</p>
            <button onClick={updateEmail}>update Email</button>
            <br/>
            <button onClick={updateEmailAndUser}>update both</button>
        </section>
    )
}

// const printName = () => {
//     console.log('printing name');
// }

// button.addEventListener('click', () => {

// })

// let name = 'default'

// const nameEl = document.getElementById('name');
// nameEl.textContent = name

// name = 'Abhinav'
// nameEl.textContent = name



const arr = [1,2]

const [a,b] = arr