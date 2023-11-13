//!07-11-2023(TO-DO-APP)
// import React from 'react'
// import Todo from './ToDoApp/Todo';
// import "./Todo.css"

// const App = () => {
//   return (
//     <>
//         <Todo/>
//     </>
//   )
// }

// export default App

//!09-11-2023(CRUD APP)
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './Crud App/Read';
import Update from './Crud App/Update';
import Home from './Crud App/Home';
import Create from './Crud App/Create';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App