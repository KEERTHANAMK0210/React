import React, { useState } from 'react'

function Sprd() {
    const[emp,setemp]=useState({id:101,name:"vishnu"})
    const idchange=()=>{
        setemp(a=>{return{...a,id:100}})
    }

  return (
    <div>
      <h4>emp id is {emp.id} and name {emp.name}</h4>
      <button onClick={idchange}>change</button>
    </div>
    
  )
}

export default Sprd
