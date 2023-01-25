

import Swal from "sweetalert2";


const Tareas = ({tareas, borrarTarea, editarTarea, completarTarea}) => {
    
    const showEditarTarea = async (tarea) => {
        console.log(tarea)
        const { value: formValues } = await Swal.fire({
            title: 'Editar Tarea', showCancelButton: true, confirmButtonText: 'continuar',
            confirmButtonColor: '#198754', cancelButtonColor: '#b82020',
            html:
              `<input id="swal-input1" value="${tarea.fecha}" maxLength="10" class="swal2-input">
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
            let tareaEditada = {id: formValues[2], fecha: formValues[0], descripcion: formValues[1], estado: tarea.estado }
            Swal.fire({
                title: 'Tarea editada', showCancelButton: true, 
                allowOutsideClick: false, confirmButtonText: 'confirmar cambio', 
                confirmButtonColor: '#198754', cancelButtonColor: '#b82020',
                html: 
                `<div class="p-2 d-flex flex-column">
                 <strong class="text-start" >Descripción:
                 <b class="text-primary">${tareaEditada.descripcion}</b> </strong>
                 <strong class="text-start" >Fecha:
                 <b class="text-primary">${tareaEditada.fecha}</b></strong>
                </div>`
            }).then((res) => {
                if (res.isConfirmed) {
                    editarTarea(tareaEditada)
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Cambio completado'
                      })
                }
            })
          }

    }
   
    const changeBg = (estado) => {
        if (estado) {
            return 'bg-dark text-white text-decoration-line-through fw-bold'
        }
        if (!estado) {
            return 'bg-primary'
        }
    }

 
   
    return ( 
    <div >
        {
            tareas.map((tarea, i) => (
                <div 
                className={
                    `p-2 mx-1 rounded my-1 d-flex align-items-center 
                     justify-content-between gap-1 ${changeBg(tarea.estado)}`
                }
                key={i} >

                {/** Checkbox completar tarea */}
                <div className="form-check form-switch">
                <input checked={tarea.estado} className="form-check-input"  
                type="checkbox" role="switch" id="flexSwitchCheckChecked" 
                onChange={e => completarTarea(e, tarea)}
                />
                </div>

                { /** Caja contenido */ }                  
                <div style={{width: "75%"}} 
                className="d-flex align-items-center justify-content-center flex-wrap" >

                <small style={{wordBreak: "break-all"}}  
                className="text-capitalize text-white w-50 text-start fw-bold">
                   {tarea.descripcion}
                </small>
                
                <small className="text-capitalize text-white w-50 fw-bold text-center">
                    {tarea.fecha}
                </small>
                
                </div>

                { /** caja Acciones */ }
                <div style={{width: "20%"}} 
                className="d-flex align-items-center justify-content-end gap-2 flex-wrap" >
                
                <i className="btn bi bi-pencil-fill btn-warning btn-sm fw-bold text-dark"
                onClick={() => showEditarTarea(tarea)}
                ></i>

                <i className="btn bi bi-trash-fill btn-danger btn-sm fw-bold text-dark"
                onClick={() => borrarTarea(tarea)}
                ></i>
                
                </div>

               </div>
            ))
        }
        
    </div> 
    )
}
 


export default Tareas
