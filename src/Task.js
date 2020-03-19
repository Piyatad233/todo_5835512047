import React from 'react'
import './task.css'
export default (props) => {
    const {task,editTask,deleteTask} = props
    const {id, name} = task
    return(
        <li>
            <div className="id">{id}</div><div className="name">{name}</div>
            <div className="container">
            <button className="aqua"onClick = {() => deleteTask(id)}>Delete</button>
            <button className="aquamarine" onClick =  {() => editTask(id)}>Edit</button>
            </div>
      </li>
    )
}