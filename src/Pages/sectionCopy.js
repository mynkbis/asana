
import React , {useEffect, useMemo, useState} from 'react'
import './section.css'
import Button from '../Components/Button'
import DeleteButton from '../Components/DeleteButton'
import EditButton from '../Components/Edit'
import { Droppable } from "react-beautiful-dnd";
import { Draggable, DragDropContext } from 'react-beautiful-dnd'


const Section = () => {
  const [localDataStore, setLocalDataStore] = useState([])
  const [savestatus, setSavestatus] = useState(false)

  useEffect(()=>{

    const localData=localStorage.getItem('lists')
  setLocalDataStore(JSON.parse (localData)?.length ?  JSON.parse (localData) : [])
  setSavestatus(false)
  },[savestatus])
//   const ColumnHeader ={}
//   text-transform: uppercase;
//   margin-bottom: 20px};
// `;

// const DroppableStyles = {
//   padding: 10px,
//   border-radius: 6px,
//   background: #d4d4d4,
// };

  
const onDragEnd=(result)=>{

}


return (

<>
    <div className='mainContainer'>
      <div className='secondContainer'>
     
        <div className='secondContainerBox'>   
          <div className='secondContainerBox1'>
          <input name='Todo' placeholder='Todo'></input>
            <Button setSavestatus = {setSavestatus}></Button>  
             </div>
             
                   <div className='secondryBox2'>
                  <Button setSavestatus = {setSavestatus}>+ Add Task</Button>
                
                    
                                          {localDataStore?.length && localDataStore.map((dataValue, index)=>
                                             <div key={index} className="newEnteredData"> {dataValue.taskName} 
                                                 <div className='newEnteredDataButton'> 
                                                 <DeleteButton key={dataValue.id}
                                                 id={dataValue.id} setLocalDataStore={setLocalDataStore}/> 
                                                 
                                                 <EditButton key={dataValue.id}
                                                 id={dataValue.id}/></div></div>)}
                 
                  </div>
          
              
          </div>
       
         
        <div className='secondContainerBox' >
        <div className='secondContainerBox1'>
        <input name='Develope' placeholder='Develope'></input>
        </div>
        <div className='secondryBox2'>
          <h5>task1</h5>
            <h5>task2</h5>
              </div>
               </div>
            
                 <div className='secondContainerBox'>
                 <div className='secondContainerBox1'>
                   <input name='QA' placeholder='QA'></input>
                      </div>
                      <div className='secondryBox2'>
                             <h5>task3</h5>
                          </div>
                            </div>
                              <div className='secondContainerBox'>
                                <div className='secondContainerBox1'>
                                  <input name='Done'  placeholder='Done'></input>
                                   </div>
                        <div className='secondryBox2'>
                              <h5>task4</h5>
                                  </div>
                                   </div>
                           {/*  <button className='buttonBox'>+ Add Section</button> */}
                                <button>+ Add Section</button>
                             
                               </div>
                                 </div>                      
  </>)}


export default Section;
