import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  const [inputColor, setInputColor] = useState('');

  const handleSubmit = (event) => {
    setInputColor(event.target.value);
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    setColor(inputColor);
    setInputColor('');
  }
  
  

  return (
    <>
      <div style={{backgroundColor: color, height: '100vh', position: 'relative'}}>
      <div style={{position: 'absolute', left: '50%', bottom: '0', transform: 'translateX(-50%)', marginBottom: '50px'}}>
        <button style={{padding: '4px 4px', borderColor: 'black', border: 'solid', backgroundColor: 'white', borderRadius: '34px'}}>
          <button 
            onClick={() => {setColor('red')}}
            style={{backgroundColor: 'red', padding: '10px 20px', border: 'solid', borderColor:'white', borderRadius:'34px'}}>
            red
          </button>
          <button 
            onClick={() => {setColor('orange')}}
            style={{backgroundColor: 'orange', padding: '10px 20px', border: 'solid', borderColor:'white', borderRadius:'34px'}}>
            orange
          </button>
          <button onClick={() => {setColor('green')}}
            style={{backgroundColor: 'green', padding: '10px 20px', border: 'solid', borderColor:'white', borderRadius:'34px'}}>
            green
          </button>
        </button>
        <input onChange={ handleInputChange } value={inputColor} className='input' type='text' placeholder='Input the color' style={{padding: '16px 24px', marginLeft: '10px', border: 'solid', borderColor:'black', borderRadius:'34px', borderWidth: '2px'}}/>
        <button onClick="{ handleSubmit }"style={{padding: '16px 24px', marginLeft: '10px', border: 'solid', borderColor:'black', borderRadius:'34px', borderWidth: '2px', backgroundColor: 'white'}}>Changer Color</button>
      </div>
    </div>
    </>
  )
}

export default App
