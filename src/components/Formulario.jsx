

import React, { useState } from 'react'


const Formulario = ({agregarTarea}) => {

    const [task, setTask] = useState({
        descripcion: '', fecha: ''
    })

    const {descripcion, fecha} = task

    const handledSubmit = (e) => {

        e.preventDefault()

        if (fecha === '' || descripcion === '' ) {
            return
        }
        task.id = Date.now()
        task.estado = false

        agregarTarea(task)
    }

    const handledChange = e => {
        setTask({ 
            ...task, [e.target.name] : e.target.value
        })
    }


    return (

    

            <form  onSubmit={handledSubmit} 
            className='w-100 row px-4 m-auto' >

              
                <div className="my-1 text-start text-white text-form col-12 col-sm-6" >
                <label className="form-label">Describe tu tarea</label>
                <input type="text" placeholder='Escribe aqui' maxLength={80}
                 className='form-control' 
                 name='descripcion'
                 onChange={handledChange}
                 />                 
                </div>

                <div className="my-1 text-start text-white text-form col-12 col-sm-6">
                <label className="form-label">Fecha limite</label>
                <input type="date" maxLength={10}
                placeholder='Escribe aqui'
                className="form-control"
                name='fecha' onChange={handledChange}
                />
                </div>

                
                <div className='my-1 col-12' >
                <button type='submit' 
                className='btn btn-primary btn-sm text-white fw-bold w-100 py-2'>
                    <i className="bi bi-plus-circle mx-1"> AGREGAR</i>
                    </button>
                </div>
              
           
                
            </form>        

      
      )
}
 
export default Formulario;