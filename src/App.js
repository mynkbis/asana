import React from 'react';
import './App.css';
// import Section from  './Pages/sectionCopy';
import Section from './Pages/sectionCopy';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (


    <div className="App">
    
    <h1>asana</h1>
  
   <TodoList/><Section/>
    </div>
  );
}

export default App;
