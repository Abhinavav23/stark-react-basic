import { useState } from "react"

export const PrevState = () => {
    const [count, setCount] = useState(0);

    const increment = (no) => {
        // my state update call is based on prev state value
        // we will the setter function a callback function
        // it will give you prev value of state in the arguments

        for(let i=1; i<=no;i++){
            // setCount(count+i)
            setCount((prevValue) => {
                return prevValue+i
            })
        }

        // setCount((prevValue) => {
        //     console.log('from count 1', prevValue);
        //     return prevValue+1
        // })
        // setCount((prevValue) => {
        //     console.log('from count 2', prevValue);
        //     return prevValue+2
        // })
        // setCount((prevValue) => {
        //     console.log('from count 3', prevValue);
        //     return prevValue+3
        // })
        


        // setCount(count+1) --> 1
        // setCount(count+2) --> 3
        // setCount(count+3) --> 6
    }

    // const increment5 = () => {
    //     setCount(count+1)
    //     setCount(count+2)
    //     setCount(count+3)
    //     setCount(count+4)
    //     setCount(count+5)
    // }

    console.log('rendering PrevState component');

    return (
        <>  
            <p>count: {count}</p>
            <button onClick={() => increment(3)}>+3</button>
            <button onClick={() => increment(5)}>+5</button>
            <button onClick={() => increment(10)}>+10</button>
        </>
    )
}