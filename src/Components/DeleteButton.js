import React, { useState } from 'react'
import './Button.css'

function DeleteButton(props) {

  const { id, setLocalDataStore}=props;

  // console.log("sdfsdfsdfs",props)
  const HandleDelete=(id)=>{

    console.log("delte wali id", localStorage.id)
    
  const localData = JSON.parse(localStorage.getItem('lists'));
  const newList = localData.filter((item) => item.id !== id);
  localStorage.setItem("lists", JSON.stringify(newList));
   console.log('data deleted', id)
setLocalDataStore(newList)


  }

  return (
    <div className='trashButton'>
        <button className='deleteButton' onClick={() => HandleDelete(id)}>D</button>
    </div>
  )
}

export default DeleteButton