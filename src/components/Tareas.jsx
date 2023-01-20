import { useState } from "react";
import DeleteTarea from "../components/DeleteTarea";

const Tareas = ({tareas, ff}) => {
   
    const del = (t) => {
        ff(t)
    }
    
    return ( 
    <div>
        {
            tareas.map((t, i) => (
                <div className="border p-3 rounded my-2 
                d-flex align-items-center justify-content-between"
                key={i} >

               <strong className="text-capitalize" > {t.nombre}</strong>
               <strong className="text-info" >{t.descripcion}</strong>

               <DeleteTarea tarea={t} del={del} ></DeleteTarea>
                
               </div>
            ))
        }
        
    </div> 
    )
}
 


export default Tareas
