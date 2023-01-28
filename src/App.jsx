

import React, { Fragment } from 'react'
import TodoApp from './components/todoapp/Todo';
import PokeApp from './components/pokeapp/PokeApp';
import {
  createBrowserRouter,
  RouterProvider, Link
} from "react-router-dom";
import HomeView from './components/Home';

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <HomeView/>
    ,
  },
  {
    path: "/todoapp",
    element: <TodoApp/>,
  },
  {
    path: "/pokeapp",
    element: <PokeApp/>  ,
  }
])

function App() {


  return (

    <Fragment>   

        { /** header */ }
       <header className='p-5 text-center' 
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
