import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (charAllowed) {
      str += "!@#$%^&*()_+"
    }
    if (numbersAllowed) {
      str += "0123456789"
    }

    for (let i = 1; i < length; i++) {
      const randomChar = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomChar)
    }

    setPassword(pass)

  }, [length, charAllowed, numbersAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    
  }

  useEffect(() => {

    generatePassword();

  }, [length, charAllowed, numbersAllowed])

  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="flex justify-center py-8 text-lg">
          <h2 className="text-white">Password Generator</h2>
        </div>
        <div className="flex justify-center text-lg">
          <input 
          type="text" 
          className="p-2 rounded-l-lg w-96 border-none"
          value={password}
          readOnly
          ref={passwordRef}/>
          <button 
          className="bg-blue-400 rounded-r-lg p-2"
          onClick={copyPasswordToClipboard}>
          copy
          </button>
        </div>
        <div className="flex justify-center py-8 text-lg  space-x-4">
          <input type="range" 
          className="w-32" 
          min={6} 
          max={100} 
          onChange={(e) => {
            setLength(e.target.value)
          }}
          />
          <label htmlFor="lenght" 
          className="text-orange-400">
            Lenght : {length}
          </label>
          <input 
          type="checkbox"
          defaultChecked={numbersAllowed}
          onChange={ ()=> {
            setNumbersAllowed((prev) => !prev)
          }}
          />
          <label
          htmlFor="number" 
          className="text-orange-400">
            Numbers
          </label>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          />
          <label 
          htmlFor="char"
          className="text-orange-400">
          Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
