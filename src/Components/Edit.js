import React, { useEffect, useState } from 'react'
import "./Button.css"

function EditButton(props) {

const[datanew, setNewData]=useState("")

    // console.log("edit", props)

   const handleEdit = (id) => {

        const localData = JSON.parse(localStorage.getItem('lists'));
        console.log(localData)
        // eslint-disable-next-line eqeqeq
        const newList = localData.filter((item) => item.id == id);
        // console.log("ew lsit" ,newList)
     setNewData(newList[0].taskName)
 console.log("newly entered data",newList[0].taskName)
    }

useEffect(()=>(
    setNewData(datanew),
 console.log("useEffe",datanew)
),[datanew])



    return ( <
        div className = 'editButton' >
        <input defaultvalue={datanew} onChange={(e)=>{setNewData(e.target.value)} }/>
    
        <button className = 'buttonEdit'onClick = {
            () => handleEdit(props.id)}> E </button> 
            </div>
    )
}

export default EditButton