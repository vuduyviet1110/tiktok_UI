import {useEffect, useLayoutEffect, useRef, useState, useReducer } from 'react'
import reducer, { init } from './reducer'
import {setTask, addTask, deleteTask} from './action'

// 4.Dispatch
function App() {
  const [state, dispatch]= useReducer(reducer, init)
  // Take "task" for the input and 'tasks' for the list
  const { task, tasks } = state

  const inputRef =useRef()

  const handleSubmit =() =>{
    dispatch(addTask(task))
    dispatch(setTask(''))
    inputRef.current.focus()
  }
  const handleDelete =() =>{
    dispatch(deleteTask(task))
  }
  return (
    <div style={{padding: '10px 32px'}}>

      <h3>ToDo List</h3>

      <input
        ref ={inputRef}
        value ={task}
        placeholder="Enter tasks..."
        onChange={e => {
          dispatch(setTask(e.target.value))
        }}
      />

      <button
        onClick={handleSubmit}
      >Add
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task} <button onClick ={handleDelete} style={{color:'red'}}>&times;</button></li>
        ))}
      </ul>

    </div>
  )
}
  
export default App;
  