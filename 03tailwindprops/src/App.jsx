import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 rounded-md'>Tailwind with Vite</h1>
      <Card username = "og" post ="staff engg." source ="https://images.pexels.com/photos/17920141/pexels-photo-17920141/free-photo-of-man-on-paddle-board-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
      <Card />
      <Card />
      <Card />      
    </>
  )
}

export default App
