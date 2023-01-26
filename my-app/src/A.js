import React from 'react'
import { Userstate } from './Context/Userprovider'

function A() {
    const{b}=Userstate()
  return (
    <div>
      <h4>{b.id} and {b.name}</h4>
    </div>
  )
}

export default A
