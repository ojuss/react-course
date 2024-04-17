import { useState } from 'react';
import './App.css'

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(3) // returns a variable and a method/function 

  const addValue = () => {
    setCounter(counter + 1)
    console.log(counter);
  }
  
  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
     <h1>learning react with ojus</h1>
     <h2>counter value</h2>
     <button onClick={addValue}>Add value : </button> {"  "}
     <button onClick={resetValue}>Reset value</button>
     <p>Result : {counter}</p>
    </>
  )
}

export default App