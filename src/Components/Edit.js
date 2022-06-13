import React, { useEffect, useState } from 'react'
import "./Button.css"

function EditButton(props) {

const[datanew, setNewData]=useState("")

    // console.log("edit", props)

   const handleEdit = (id) => {

        const localData = JSON.parse(localStorage.getItem('lists'));
        console.log(localData)
        const newList = localData.filter((item) => item.id == id);
        // console.log("ew lsit" ,newList)
     setNewData(newList[0].taskName)
// console.log(newList[0].taskName)
    }

useEffect(()=>(
    setNewData(datanew),
    console.log("useEffe",datanew)
),[datanew])



    return ( <
        div className = 'editButton' >
        <input dafaultvalue={datanew}/>
    
        <button className = 'buttonEdit'onClick = {
            () => handleEdit(props.id)}> E </button> 
            </div>
    )
}

export default EditButton