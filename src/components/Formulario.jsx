

import React, { useState } from 'react'


const Formulario = ({agregarTarea}) => {

    const [task, setTask] = useState({
        nombre: '', descripcion: ''
    })

    const {nombre, descripcion} = task

    const handledSubmit = (e) => {

        e.preventDefault()

        if (nombre === '' || descripcion === '' ) {
            return
        }
        task.id = Date.now()
        agregarTarea(task)
    }

    const handledChange = e => {
        setTask({ 
            ...task, [e.target.name] : e.target.value
        })
    }


    return (
        <div className='p-5 text-center bg-dark' >
            <form  onSubmit={handledSubmit}
            className='d-flex gap-1' >

                <input type="text" placeholder='Nombre' 
                 className='form-control form-control-sm' 
                 name='nombre'
                 onChange={handledChange}
                 />

                <input type="text"  placeholder='decripcion' 
                 className='form-control form-control-sm' 
                 name='descripcion'
                 onChange={handledChange}
                 />                 

                <button type='submit' className='btn btn-success'>Agregar</button>
            
            </form>        

        </div>
      )
}
 
export default Formulario;