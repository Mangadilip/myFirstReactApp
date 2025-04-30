import React from 'react'
import "./StateMgm.css"

import { useState, useEffect} from 'react'

const StateMgm = () => {
    const [count, setCount] = useState(0) // useState is a hook that allows you to add state to a functional component. It returns an array with two elements: the current state value and a function to update it.

    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        setCount(count - 1)
    }
    const reset = () =>{
        setCount( 0) 
    }
    // -------------------------------------------------------------------
// useEffect is a hook that allows you to perform side effects in your functional components. It takes two arguments: a function to run and an optional array of dependencies. The function will run after the component renders, and if you provide the array of dependencies, it will only run when those dependencies change. 
// In this case, the useEffect hook is used to set the initial value of the city state variable to "Hyderabad" and then change it to "bangalore" or "goa" based on the current value of city. The empty array [] means that this effect will only run once when the component mounts.





    // --------------------------------------------------------------------
    const [city, setCity] = useState("Hyderabad")

    useEffect(()=>{

        if (city !== "Hyderabad"){
            setCity("bangalore")    
        }else{
            setCity("goa")
        }
    }, [])
  return (
    <div className="container">
         <h1>CounterApp</h1>
        <h2>Count: {count}</h2>
       <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
       <button onClick={decrement}>Decrement</button>

       <h1>I live in {city}</h1>
         
    </div>
  )
}

export default StateMgm
