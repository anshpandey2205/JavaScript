// import React,{useState} from 'react'
// const App = () => {
//   let [input, SetInput] = useState("");
//   let [data, SetData] = useState("");
//   function fun1(e){
//     //console.log(e.target.value);
//     SetInput(e.target.value);
//   }

//   function done(){
//     SetData(input)
//   }
//   return (
//     <div>
//       <h2>{input}</h2>
//       <input type="text" name='input' placeholder="Enter your name" onChange={fun1}/>
//       <button onClick={done}>click</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState, useEffect } from 'react'
//import Form from './Form'

const App = () => {
  let[count, SetCount] = useState(0);
  useEffect(()=>{
    console.log("useEffect called");
  },[])
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>SetCount(count+1)}>Increment</button>
    </div>
  )
}

export default App