import React from 'react'


const initialData={
    tasks:{ 
    "task-1":{ id:'task-1', content:"just an experiment"},
    "task-2":{ id:'task-2', content:"Learning is new"},
    "task-3":{ id:'task-3', content:"Asana management app"},
    },

columns:{
    'column-1':{
        id:'column-1',
        title:'to-do',
        taskIds:["task-1","task-2","task-3"],
    },
},
columnsOrder:['column-1']
};

export default initialData;

// const initialData=()=> {


//   return (
//     <div>initialData</div>
//   )
// }

// export default initialData
