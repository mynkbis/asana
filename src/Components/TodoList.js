import React, { useState } from 'react'
import CreateTask from '../Modals/CreateTask';


function TodoList() {
 

  const [modal, setModal]=useState(false);
  const[tasklist, setTaskList]=useState([]);   // when user click create   task here it  will be updated


const toggle=()=>{
  setModal(!modal);
}


// const saveTask=(taskObj)=>{
//   let tempList=tasklist      // storing temp the tasklist data
//   tempList.push(taskObj)

// setTaskList(tempList)
// setModal(false)    // once data is entered changing the modal state so it will close the box
// }

// const showData=tasklist.map((obj,index)=>obj.Name)


const saveTask=()=>{
 
  setModal(false)}

const HandleAddTask=()=>{
  setModal(true);
}

  return (
    <>
    <div className='header text-center'>
    {/* <h3 className='mt-3'>TodList</h3> */}
    <button className='btn btn-primary' onClick={HandleAddTask}>+</button>
    </div>

    <div className='task-contianer'>
{/* 
{showData} */}

    </div>
    <CreateTask toggle={toggle} modal={modal} saveTask={saveTask}/>

</>
  )
}

export default TodoList;
