import React, { useState } from 'react'
import { Userstate } from './Context/Userprovider'

function Incremwnt() {
  const{a}=Userstate()
    const[num,setnum]=useState(0)
  return (
    <div>
        <div class="card">
  <div class="card-body">
    <div class="text-center">
    <p class="card-text"> <h1>increment{num}</h1>
    <button onClick={()=>setnum(num+1)}>+</button>
    <button onClick={()=>setnum(num-1)}>-</button>
</p>
</div><br/>

<div class="text-center">
  {a}
    <button type="button" class="btn btn-primary">Button</button>
  </div>
  </div>
</div>
     {/* <h1>increment{num}</h1>
    <button onClick={()=>setnum(num+1)}>+</button>
    <button onClick={()=>setnum(num-1)}>-</button> */}

    </div>
  )
}

export default Incremwnt
