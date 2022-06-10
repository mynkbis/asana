import React, { useState } from 'react'


function EditButton() {


    
//   const {id, setNewData }= props;

  const handleEdit=(id)=>{
    
  const localData = JSON.parse(localStorage.getItem('lists'));
  const newList = localData.filter((item) => item.id == id);
  localStorage.setItem("lists", JSON.stringify(newList));
 
  }

  return (
    <div className='editButton'>
        <button onClick={() => handleEdit()}>E</button>
    </div>
  )
}

export default EditButton