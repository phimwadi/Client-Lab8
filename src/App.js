import React, { useState,useEffect } from 'react';
import './App.css';
import {firestore} from './index'

function App() {
  const [tasks,setTasks] = useState([
    { 
      id:1, name: "do homework"
    },
    {
      id:2, name: "write node"
    }
  ])

  useEffect( () => {
    retriveData()
  },[])

  const retriveData = () => {
    firestore.collection("tasks").onSnapshot( (snapshot) => {
      console.log(snapshot)
    } )
  }
  const renderTask = () => {
    if (tasks && tasks.length)
      return tasks.map((task,index)=>{
          return(
            <li key={index}> {task.id} : {task.name}</li>
          )
        })
    else
        return (<li>No task</li>)
  }
  return (
    <div >
        <h1>Todo</h1>
        <ul>{ renderTask() }</ul>
    </div>
  );
}
export default App;