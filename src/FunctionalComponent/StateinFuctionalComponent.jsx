import React,{useState} from 'react'

export default function StateinFuctionalComponent() {
    var [name,setname]=useState("Shah")
    function Changename(){
        setname(name="Nawaz")
    }
  return (
   <>
   <h4>Name={name}</h4>
   <button onClick={Changename}>Change Name</button>
   </>
  )
}
