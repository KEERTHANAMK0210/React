import React, {useState} from 'react'
import './Buttonclr.css';
function Buttonclr() {
    const[text,setclr]=useState("black")
  return (
    <div className='body'>
      <h1>text color is {text}</h1>
      
      <button id="red" onClick={()=>setclr("red")}>click</button>
     
     
      <button id="pink" onClick={()=>setclr("pink")}>click</button>
      
     
      <button id="yellow" onClick={()=>setclr("yelow")}>click</button>
      
    </div>
  )
}

export default Buttonclr
