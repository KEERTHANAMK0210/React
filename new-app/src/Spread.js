import React from 'react'
import {useState} from 'react'
import './Spread.css';

function Spread() {
    const[car,setcar]=useState({brand:"ford",color:"red"})
    const colorchange=()=>{
        setcar(preobj=>{return{...preobj,color:"white"}})
    }
  return (
    <div className='b'>
        
        <div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text"> <h1> the car is {car.brand} and its color is {car.color}</h1>
      <button id="b" onClick={colorchange}>change</button></p>
    
  </div>
</div>
      {/* <h1> the car is{car.brand}and its color is{car.color}</h1>
      <button id="b" onClick={colorchange}>change</button> */}
    </div>
  )
}

export default Spread
