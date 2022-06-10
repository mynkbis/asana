import React, { useState } from 'react'
import './Button.css'

function DeleteButton() {


    
//   const {id, setNewData }= props;

  const HandleDelete=(id)=>{
    
  const localData = JSON.parse(localStorage.getItem('lists'));
  const newList = localData.filter((item) => item.id != id);
  localStorage.setItem("lists", JSON.stringify(newList));
 
  }

  return (
    <div className='trashButton'>
        <button className='deleteButton' onClick={() => HandleDelete()}>D</button>
    </div>
  )
}

export default DeleteButton