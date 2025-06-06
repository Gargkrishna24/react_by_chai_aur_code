import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter/*variable*/,/*function*/setCounter]=useState(15);

  const addValue = ()=>{
    console.log(counter);
    counter=counter+1;
    setCounter(counter)
  }

  const removeValue = ()=>{
    setCounter(counter-1);

  }
  return (
    <>
      <h1>Chai Aur Code</h1>
      <h2>CounterValue: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
