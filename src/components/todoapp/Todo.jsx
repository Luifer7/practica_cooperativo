
import { useState } from 'react'
import { Fragment } from "react";
import Formulario from './Formulario';
import Tareas from './Tareas';


function TodoApp () {

const [ tareas, setTareas] = useState([])

const agregarTarea = (tarea) => {
  setTareas([...tareas, tarea])
}

const borrarTarea = (tarea) => {
  setTareas(tareas.filter(field => field.id != tarea.id))
}

const editarTarea = (tarea) => {
  let nuevasTareas = tareas.map(elemento => elemento.id == tarea.id ? tarea : elemento)
  setTareas(nuevasTareas)
}

const completarTarea = (e, tarea) => {
  let tareaCompletada = {
      id: tarea.id, fecha: tarea.fecha, 
      descripcion: tarea.descripcion, estado: e.target.checked}

  let nuevasTareas = tareas.map(elemento => elemento.id == tareaCompletada.id ? tareaCompletada : elemento)
  setTareas(nuevasTareas)
}
    
return (

    <Fragment>

        <h1 className='text-center text-white mt-3' >TODO APP</h1>

        <div className='w-100 mt-3 p-2'>

            <Formulario agregarTarea={agregarTarea}/>

            <div className='p-3 mt-2 mx-3' >
            <Tareas 
            tareas={tareas} 
            borrarTarea={borrarTarea} 
            editarTarea={editarTarea}
            completarTarea={completarTarea}
            setTareas={setTareas}
            />
            </div>

        </div>
        
    </Fragment>
)

}

export default TodoApp