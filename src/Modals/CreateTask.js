import React, { useState } from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap' 


let temp=[]

function CreateTask({modal, toggle, saveTask}) {
    const [state, setState] = useState({
        taskName:"",
        description:""
      })

      const[storeAllTask, setStoreAllTask]=useState([])
    
// console.log(taskName, description)


const HandleChange= (e)=>{
setState({
    ...state,
     [e.target.name]:e.target.value
 })
}

// console.log(state)


const handleSave=()=>{
    temp.push(state)

    // localStorage.setItem("lists",JSON.stringify(temp))
        const  newData=temp.map((item, index)=>{return{id:index,taskName:item.taskName}});
        localStorage.setItem('lists', JSON.stringify(newData))
         setStoreAllTask(newData)
         setState({ 
        taskName:"",
        description:""  

    })

    console.log("from create data", newData)
        saveTask();

}

// console.log("from data" + storeAllTask)
// console.log(taskObj)

  return (
    <Modal isOpen={modal} toggle={toggle}  >
        <ModalHeader toggle={toggle}>Create task</ModalHeader>
        <ModalBody>
        <form>
        
        <div className='form-group'>
        <label>Task name</label>
            <input type='text' className='form-control' defaultValue={state.taskName} name="taskName" onChange={(e)=>HandleChange(e)}/>
        </div>
      
        <div className='form-group'>
        <label>Description</label>
        <input type='textarea' className='form-control' defaultValue={state.description} name="description" onChange={(e)=>HandleChange(e)}/>
        </div>
            
        </form>
        </ModalBody>
        <ModalFooter>
        <Button color='primary' onClick={handleSave}>Add</Button>
        <Button color='secondary' onClick={toggle}>cancel</Button>
        </ModalFooter>
    </Modal>


  ) 
}

export default CreateTask