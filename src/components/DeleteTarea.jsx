


const DeteleTarea = ({tarea, del}) => {

    const gt = (tarea) => {
        del(tarea)
    }

    return ( 
    <div>
        <button onClick={()=> {
            gt(tarea)
        }} className="btn btn-danger btn-sm">
                Borrar
        </button>
    </div> 
    )
}
 


export default DeteleTarea
