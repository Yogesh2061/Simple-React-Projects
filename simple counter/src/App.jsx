import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   
    let [counter,setcounter]=useState(7)
    //1st : let counter=7
    //2nd : is a function used to update the value of counter which is initially given inside braces of useState
    //this is usestate hook , and is used to update the value in UI
   const add=()=>{
        // counter=counter+1 : This is wrong 
        setcounter(counter+1)
   }

   

   const decrease=()=>{
    setcounter(counter-1)
   }


 return (
    <div class="count">
      <h1>SIMPLE COUNTER</h1>
        <h2>counter value : {counter}</h2>
          
          <button
          onClick={add}>Increase</button>
          <button
          onClick={decrease}>Decrease</button>
    
    </div>
  )
}

export default App
 