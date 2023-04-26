import { useState } from "react"

export const useCounter = (defaultValue = 1)=> {
    const [ counter, setCounter ] = useState(defaultValue)

    const increment = (valueIncrement = 1, limit = 100)=> {
        if(counter < limit) setCounter(counter + valueIncrement)
        
    }
    const decrement = (valueDecrement = 1, limit = 0)=> {
        if(counter > limit+1 ) setCounter(counter - valueDecrement)
    }
    const reset = ()=> {setCounter(defaultValue)}

    return [
        counter,
        increment,
        decrement,
        reset,
        setCounter
    ]
}