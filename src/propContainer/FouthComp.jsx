import React from 'react'

const FouthComp = (props) => {
  const{brand,model,color,year}=props.car
  return (
    <div>
      <h1>My car is {brand}</h1>
      <h2>My car model is {model}</h2>
      <h3>My car color is {color}</h3>
      <h4>My car year is {year}</h4>
        
    </div>
  )
}

export default FouthComp
