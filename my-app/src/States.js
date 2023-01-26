import React, { useState } from 'react'
import { Userstate } from './Context/Userprovider'

function States() {
  const{hi}=Userstate()
    const[name, setname]=useState("ammu")
  return (
    <div>
      {hi}
      <h1>my name is {name}</h1>
      <button onClick={()=>setname("welcome")}>change</button>
    </div>
  )
}

export default States
