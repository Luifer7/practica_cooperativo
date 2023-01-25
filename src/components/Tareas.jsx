

import Swal from "sweetalert2";
import { useState } from "react";

const Tareas = ({tareas, borrarTarea, editarTarea}) => {
    
    const showEditarTarea = async (tarea) => {
        
        const { value: formValues } = await Swal.fire({
            title: 'Multiple inputs',
            html:
              `<input id="swal-input1" value="${tarea.nombre}" class="swal2-input">
              <input id="swal-input2" value="${tarea.descripcion}" class="swal2-input">
              <input id="swal-input3" value="${tarea.id}" class="swal2-input" type="hidden" >`,
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value,
                document.getElementById('swal-input3').value
              ]
            }
          })
          
          if (formValues) {
            let tareaEditada = {id: formValues[2], nombre: formValues[0], descripcion: formValues[1] }
            Swal.fire({
                icon: 'info', title: 'seguro que quieres editar esta tarea', showCancelButton: true
            }).then((res) => {
                if (res.isConfirmed) {
                    editarTarea(tareaEditada)
                }
            })
          }

    }
    
    return ( 
    <div>
        {
            tareas.map((tarea, i) => (
                <div className="p-3 rounded my-2 bg-dark
                d-flex align-items-center justify-content-between"
                key={i} >
               <strong className="text-capitalize text-white"> {tarea.nombre}</strong>
               <strong className="text-info" >{tarea.descripcion}</strong>

                    <div className="d-flex gap-2" >
                    <button className="btn btn-warning"
                    onClick={() => showEditarTarea(tarea)}
                    >Editar</button>

                    <button className="btn btn-danger"
                    onClick={() => borrarTarea(tarea)}
                    >Borrar</button>
                    </div>

               </div>
            ))
        }
        
    </div> 
    )
}
 


export default Tareas
