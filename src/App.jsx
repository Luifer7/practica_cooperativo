

import React, { Fragment } from 'react'
import TodoApp from './components/todoapp/Todo';
import Calculadora from './components/calculadora/Calculadora';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-white fw-bold text-center p-5'>
      <a href="/todoapp">Todo App</a>
    </div>,
  },
  {
    path: "/todoapp",
    element: <TodoApp/>,
  },
  {
    path: "/calculadora",
    element: <Calculadora/>  ,
  }
])

function App() {


  return (

    <Fragment>   

        { /** header */ }
       <header className='p-4 text-center bg-dark' 
            style={{
            backgroundImage: `url("https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, 
            backgroundPositionY: 'center'}}>

            <h1 className='text-dark fw-bold' >Ejercicios React</h1>
           
        </header>
        
        { /** RUTAS */ }
        <RouterProvider router={router} />
    
    </Fragment>
   
  )
}

export default App
