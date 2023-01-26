import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Array from './Array'


function Ternary() {
    const [Hide,setHide]=useState(false)
    const a=()=>
    setHide((b)=>!b)

  return (
    <div>
      {Hide?<Array/>:""}
      <Button onClick={a}>{Hide===true?"Hide":"show"}</Button>
    </div>
  )
}

export default Ternary
