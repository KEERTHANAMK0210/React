import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Cards from './Cards'
import { Userstate } from './Context/Userprovider'

function Ter() {
  
    const[Hide,sethide]=useState(false)
    const abc=()=>
    sethide((bd)=>!bd)
  return (
    <div>
      
      {Hide?<Cards/>:""}
      <button onClick={abc}>{Hide===true?"Hide":"Show"}</button>
    </div>
  )
}

export default Ter
