import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


function Useeffect() {
    const[name,setname]=useState("AMMU")
    useEffect(()=>{
        alert(`helow ${name}`)
    },[name])
    

  return (
    <div>
      <h4>{name}</h4>
      <button onClick={()=>setname("appu")}>update</button>
    </div>
  )
}

export default Useeffect
