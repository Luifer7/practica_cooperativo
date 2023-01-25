

import { useState } from 'react'
import React, { Fragment } from 'react'
import Formulario from './components/Formulario';
import Tareas from './components/Tareas';


function App() {

  const [ tareas, setTareas] = useState([])

  const agregarTarea = (tarea) => {

    setTareas([
      ...tareas, tarea
    ])

  }

  const borrarTarea = (tarea) => {
    setTareas(tareas.filter(field => field.id != tarea.id))
  }

  const editarTarea = (tarea) => {
      let nuevasTareas = tareas.map(el => el.id == tarea.id ? tarea : el)
      setTareas(nuevasTareas)
  }

  return (

    <Fragment>   

      <div className='w-100 mt-3 p-2' >

        <Formulario agregarTarea={agregarTarea} ></Formulario>

        <div className='p-3 mt-2 mx-4' >

        <Tareas tareas={tareas} borrarTarea={borrarTarea} editarTarea={editarTarea} ></Tareas>

        </div>

      </div>
    
    </Fragment>
   
  )
}

export default App
