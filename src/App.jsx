

import { useState } from 'react'
import React, { Fragment } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Tareas from './components/Tareas';



function App() {

  const [ tareas, setTareas] = useState([])

  const agregarTarea = (tarea) => {

    setTareas([
      ...tareas, tarea
    ])

  }

  const ff = (t) => {
    setTareas(tareas.filter(field => field.id != t.id))
  }

  return (

    <Fragment>   

      <Header></Header>

      <div className='w-100 mt-3 p-2' >

        <Formulario agregarTarea={agregarTarea} ></Formulario>

        <div className='p-3 border bg-dark text-white' >

        <Tareas tareas={tareas} ff={ff}></Tareas>

        </div>

      </div>
    
    </Fragment>
   
  )
}

export default App
