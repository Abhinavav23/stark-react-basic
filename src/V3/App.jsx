import { useEffect, useState } from "react"
import { SideEffectExOne } from "./components/sideEffects/SideEffectExOne"

export const App = () => {
    const [counter, setCounter] = useState(0);
    const [noType, setNoType] = useState('default');

    // runs on every render --> 1st render as well as on update 
    // 1st argument --> callback
    // 2nd argument is undefined
    useEffect(() => {
        console.log('running useEffect 1');
    });

    useEffect(() => {
        console.log('running useEffect 4');
    });

    // runs only for the first time
    // 1st argument --> callback
    // 2nd argument is empty array
    useEffect(() => {
        console.log('running useEffect 2');
    }, []);

    // runs each time when counter gets updated
    useEffect(() => {
        console.log('counter from useEffect 3', counter);
        const type =  counter %2 === 0 ? 'even': 'odd';
        setNoType(type);
    }, [counter])

    const increment = () => {
        setCounter(counter+1); //async --> Web apis
        // console.log('counter--', counter); // 0
        // const type =  counter %2 === 0 ? 'even': 'odd';
        // problem based on counter updated value we want to update no type
        // setNoType(type); //async --> even
    };

    return (
        <main>
            <h3>App V3</h3>
            <SideEffectExOne/>
            <div>count : {counter}</div>
            <button onClick={increment}>+</button>
            <div>{noType}</div>
        </main>
    )
}

// use hooks inside the FC but outside the return 
// useEffect
// 2 args
// first --> callback fn --> required
// 2nd --> array of dependencies --> optional


// onclick increment
// setCounter will run ---> rerender
// effect 3
// setType --> rerender


// o/p
// effect 1
// effect 3
// effect 1