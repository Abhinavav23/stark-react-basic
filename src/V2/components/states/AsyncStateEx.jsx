import { useState } from "react"

export const AsyncStateEx = () => {
    const [count, setCount] = useState(10);

    const add = () => {
        console.log('before updating', count); //10
        setCount(count+1); //setTimeout // async call
        console.log('after updating', count); //11
    }

    console.log('rendering AsyncStateEx', count);

    return (
        <>
            <p>count: {count}</p>
            <button onClick={add}>add</button>
        </>
    )
}