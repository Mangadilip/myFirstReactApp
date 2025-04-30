import React from 'react'
import FirstComp from './propContainer/FirstComp'
import SecondCopm from './propContainer/SecondCopm'
import ThirdComp from './propContainer/ThirdComp'
import FouthComp from './propContainer/FouthComp'
import StateMgm from './StateMgm'

const user={
  name: "Dilip",
  age: 25,
  location: "India"
}
const myCar={
  brand: "BMW",
  model: "X5",
  color: "black",
  year: 2020
} 

function App() {
  return (
    <div>
      {/* <FirstComp name="Dilip"/> */}
      {/* <SecondCopm name="raju"/> */}
      {/* <ThirdComp name={user.location}/> */}
      {/* <FouthComp car={myCar}/> */}
      <StateMgm/>
    </div>
  )
}

export default App



