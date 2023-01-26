import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
const UserContext=createContext()
const Userprovider = ({children}) => {
    let hi="helow"
    let a="apple"
    const[b,setfirst]=useState({id:101,name:"kokachi"})
    const[c,set]=useState([{id:101,name:"ammu"},{id:102,name:"midhun"}])

  return (
    <div>
      <UserContext.Provider value={{hi,a,b,c}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}
export const Userstate=()=>{
    return useContext(UserContext)
}
export default Userprovider
