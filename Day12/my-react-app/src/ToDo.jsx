// import React, { useState } from "react";
// import "./Todo.css";

// const ToDo = () => {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);
//   return (
//     <div>
//     <div className="container">
//       <h1>ToDo List</h1>
//       <input 
//         placeholder="Enter a new task" 
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button onClick={() => setTodos([...todos, task])}>Add Task</button>
//     </div>

//     <div className="todo-list">
//       {
//         todos.map((todo, index) => (
//           <div key={index} className="todo-item">
//             <span>{todo}</span>
//             <div className="actions">
//               <button>Edit</button>
//               <button>Delete</button>
//             </div>
//           </div>
//         )) 
//       }
//       </div>
//     </div>
//   );
// };

// export default ToDo


// import React, { useState } from "react";
// import "./Todo.css";

// const Todo = () => {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);








//   return (
//     <div className="container">
//       <h1>Todo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
  
//         />

// <button onClick={()=>setTodos([...todos,task])}>add</button>
//       </div>
    

//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button >
//                 Edit
//               </button>

//               <button onClick={()=>d()}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;



import React, { useReducer } from 'react'

const Todo = () => {
    let intialData={
        input:"",
        todos:[]
    }
    function reducer(state,action){
        if(action.type=="set_input"){
            return{
                ...state,input:action.payload
            }
        }else if(action.type=="add_TODO"){
            return{
                input:"",
                todos:[...state.todos,state.input]
            }
        }else if(action.type=="delete_TODO"){
          return{
            ...state,
            todos:state.todos.filter((_,id)=>{
              return id!==action.payload
            })
          }
        }

    }
  let [state,disptach]= useReducer(reducer,intialData)
  return (
    <div>
        <input onChange={(e)=>disptach({type:"set_input",payload:e.target.value})}/>
        <button onClick={()=>disptach({type:"add_TODO"})}>add</button>
        {
            state.todos.map((a)=>{
                return(<>
                <h2>{a}</h2>
                </>)
            })
        }
    </div>
  )
}

export default Todo