import { useState } from "react"

export const Counter = () => {
    const [count1, setCount1] = useState(0);

    const [count2, setCount2] = useState(10);

    // const increment = () => {
    //     console.log('incrementing');
    //     setCount(count+1)
    // }

    // const decrement = () => {
    //     setCount(count-1)
    // }

    // const reset = () => {
    //     setCount(0)
    // }

    return (
        <>
            <p>count1: {count1}</p>
            <button onClick={() => setCount1(count1+1)}>+</button><br/>
            <button onClick={() => setCount1(count1-1)}>-</button><br/>
            <button onClick={() => setCount1(0)}>reset</button><br/>

            <p>count2: {count2}</p>
            <button onClick={() => setCount2(count2+1)}>+</button><br/>
            <button onClick={() => setCount2(count2-1)}>-</button><br/>
            <button onClick={() => setCount2(0)}>reset</button><br/>
        </>
    )
}