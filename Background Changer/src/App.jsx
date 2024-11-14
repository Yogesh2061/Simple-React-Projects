import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, setColor] = useState("silver")

  return (
    <div className="w-full h-screen duration-200 "
     style={{backgroundColor: Color}}

    >
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'
     
     >
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg- px-3 py-2 rounded-3xl">
  <button onClick={()=>setColor("red")}
    className='outline-none px-4' style={{backgroundColor:Color}}>Red</button>
  
  <button onClick={()=>setColor("green")}
    className='outline-none px-4' style={{backgroundColor:Color}}>green</button>
     <button onClick={()=>setColor("blue")}
    className='outline-none px-4' style={{backgroundColor:Color}}>blue</button>
     <button onClick={()=>setColor("yellow")}
    className='outline-none px-4' style={{backgroundColor:Color}}>yellow</button>
     <button onClick={()=>setColor("grey")}
    className='outline-none px-4' style={{backgroundColor:Color}}>grey</button>
     <button onClick={()=>setColor("black")}
    className='outline-none px-4' style={{backgroundColor:Color}}>white</button>
</div>
     </div>
    </div>
   
  
  )
}

export default App
