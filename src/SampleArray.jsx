import React from 'react'

let name=[
    {
        name:"dilip",
        age:25,
        location:"India",
        

    }
]

const SampleArray = () => {
    let arr=["apple",35,{name:"sachin"}]
  return (
   
    <div>
        {name.map((item)=>{
            return(
                <>
                <h2>my name is {item.name}</h2>
                <h2>my age is{item.age}</h2>
                <h2>my location is {item.location}</h2>
                
                </>
                
            )
        })}
      <h2>{arr[0]} is a fruit </h2>
      <h2>my age is {arr[1]}</h2>
      <h2>my name is {arr[2].name}</h2>
    </div>
  )
}

export default SampleArray
