import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Dummy() {
    axios.get('https://dummyjson.com/products').then((res)=>{
        console.log(res.data.products)
        setfirst(res.data.products)
    })
    const[first,setfirst]=useState([])
    
  return (
    <div>
      {first.map((res)=>(
      <p>{res.title}</p>
     ) )}
    </div>
    )}
  


export default Dummy
