
import React, {useEffect, useState } from 'react'
import './section.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


 const Section = () => {

const data=[
  {
  content:"one",
  id:"1",
    },

    {
      content:"two",
      id:"1",
        },
        {
          content:"three",
          id:"1",
            },
            {
              content:"four",
              id:"1",
                },
                {
                  content:"five",
                  id:"1",
                    },
  ];

const reorder=(list, startIndex, endIndex)=>{;
const result=Array.from(list);
const [removed]=result.splice(startIndex,1);
result.splice(endIndex,0,removed);
return result
}

const [items, setItems]=useState([]);

useEffect(()=>{
setItems(data);  
},[data])


const handleOnEnd=(result)=>{
if(!result.destination){
  return; 
}

// const getStylelist=(isDraggingOver)=>({
// background: isDraggingOver? 'grey' : 'orange',
// padding: 8,
// width:250, 

// })

const reorderItems=reorder(
  items, 
  result.source.index, 
  result.destination.index
  );
console.log(reorder);
setItems(reorderItems)

}

return(
  
  <div>
  <DragDropContext onDragEnd={handleOnEnd}>


  <Droppable droppableId='droppable'>
{(provided, snapshot)=>{<div {...provided.droppableProps} 
ref={provided.innerRef} 
// style={getStylelist(snapshot.isDraggingOver)}
>
{
  items.map((item, index)=>(
<Draggable key={item.id} draggableId={item.id} index={index}>
{(provided,snapshot)=>(<div className='card1' ref={provided.innerRef}
{...provided.draggableProps}
{...provided.dragHandleProps}>

{item.content}
</div>
)}
</Draggable>
))
}
</div>
}}
  </Droppable>
  </DragDropContext> 
    </div>
    )
}

export default Section;

