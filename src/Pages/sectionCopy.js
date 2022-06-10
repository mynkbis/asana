
import React , {useEffect, useState} from 'react'
import './section.css'
import Button from '../Components/Button'
import DeleteButton from '../Components/DeleteButton'
import EditButton from '../Components/Edit'

const Section = () => {
  const [localDataStore, setLocalDataStore] = useState([])
  const [savestatus, setSavestatus] = useState(false)

  useEffect(()=>{

    const localData=localStorage.getItem('lists')
  setLocalDataStore(JSON.parse (localData)?.length ?  JSON.parse (localData) : [])
  setSavestatus(false)
  },[savestatus])

  // if(list){
  //   return JSON.parse(localStorage.getItem('lists'))
  // } else{ 
  //   return[]  
  // }

// const [list, setList]=useState(data);

//   const onEnd=(result)=>{
// console.log(result)
//   }

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
          <div className='newEnteredDataButton'>    <DeleteButton/> <EditButton/></div></div>)}
        </div>
        
        </div>
        
        <div className='secondContainerBox'>
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




// const data=[
//   {
//   name:"one",
//   id:"1",
//     },

//     {
//       name:"two",
//       id:"1",
//         },
//         {
//           name:"three",
//           id:"1",
//             },
//             {
//               name:"four",
//               id:"1",
//                 },
//                 {
//                   name:"five",
//                   id:"1",
//                     },
//   ];



// <div className='mainContainer'>
// <div className='secondContainer'>
//  {/* <div className='secondContainerBox'>0sdfsd</div> */}

// <div className='secondContainerBox'>Todo

// <button className='addTask'>+</button>
// <DragDropContext onDragEnd={onEnd}>
// <Droppable droppableId='123'>
// {(provided, snapshot)=>(
// <div ref={provided.innerRef}>
// {list.map((item, index)=>{
//  <Draggable  draggableId={item.id}
//  key={item.id}
//  index={index}>

// {(provided, snapshot)=>{
// <div ref={provided .innerRef}
// {...provided.draggableProps}   // provide data to make div draggable
// {...provided.dragHandleProps}   // tells this div is our drag handle

// > </div>
// }}

//  </Draggable>
// })}
// <h5>task1</h5>
//  </div>
// )}

// </Droppable>

// </DragDropContext>
// </div>
// /</div>


export default Section;
