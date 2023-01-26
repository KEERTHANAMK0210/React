import React from 'react'
import { Userstate } from './Context/Userprovider'

function Array() {
  
    const a=["a","b","c"]
    console.log(a)
    
  return (
    a.map((abc)=>
    <div>
      
    <h1>{abc}</h1>
    
    </div>
  ))
}

export default Array
