import React, { useState } from 'react'
import CreateTask from '../Models/CreateTask';
import './Button.css'

function Button({setSavestatus}) {
  const [modal, setModal]=useState(false);


const toggle=()=>{
  setModal(!modal);
}

const saveTask=()=>{
 
  setModal(false)
  setSavestatus(true)
}
  


const handleAddTask=()=>{
  setModal(true)
}

  return (
    <>
    <button className='btn btn-primary' onClick={handleAddTask}>+</button>
  
    <CreateTask toggle={toggle} modal={modal} saveTask={saveTask}/>
    </>
  )
}

export default Button;