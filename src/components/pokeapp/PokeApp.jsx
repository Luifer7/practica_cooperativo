

import { Fragment, useEffect, useState } from "react";
import Back from "../Back";
import axios from "axios";
import Swal from "sweetalert2";

const PokeApp = () => {

const [opciones, setOpciones] = useState([])
const [correcto, setCorrecto] = useState({})
const [seleccionado, setSeleccionado] = useState(0)
const [intentos, setIntentos] = useState(2)
const [aciertos, setAciertos ] = useState(0)
const [playAgain, setplayAgain] = useState(false)


useEffect(() => {

const getData = async () => {

    let uno = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800)}/`
    let dos = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800)}/`
    let tres = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800)}/`
    let cuatro = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800)}/`
    try {
    
    const resUno = await axios.get(uno)
    const resDos = await axios.get(dos)
    const resTres = await axios.get(tres)
    const resCuatro = await axios.get(cuatro)

    function actualizarEstado(resUno, resDos, resTres, resCuatro){

     let opcionUno = 
     { imagen: resUno.data.sprites.front_default, id: resUno.data.id, nombre: resUno.data.name } 
     
     let opcionDos = 
     { imagen: resDos.data.sprites.front_default, id: resDos.data.id, nombre: resDos.data.name } 
     
     let opcionTres = 
     { imagen: resTres.data.sprites.front_default, id: resTres.data.id, nombre: resTres.data.name } 
     
     let opcionCuatro = 
     { imagen: resCuatro.data.sprites.front_default, id: resCuatro.data.id, nombre: resCuatro.data.name } 
     
     let pokemons = []
     let elegido = {}
     pokemons.push(opcionUno)
     pokemons.push(opcionDos)
     pokemons.push(opcionTres)
     pokemons.push(opcionCuatro)
     elegido = pokemons[Math.floor(Math.random()*(5 - 1)+1)]
     setCorrecto(elegido)
     setOpciones(pokemons)    
    }
    
    setTimeout(actualizarEstado(resUno, resDos, resTres, resCuatro), 2000)
    
} catch (error) {
    console.log(error)
    if (error) {
        getData()
    }
}

}
    
getData()


}, [playAgain])

if (!correcto) {
    console.log('correcto esta indefinido')
    setCorrecto(opciones[0])
}

const getOption = (pokemon) => {
      setSeleccionado(pokemon.id)
      if (correcto?.id != pokemon.id) {
        setIntentos(intentos-1)
      }
      if (correcto.id === pokemon.id) {
         setAciertos(aciertos+1)
      }
}

const mostrarImagenPokemon = (pokemon) => {
    if (pokemon?.id === seleccionado ) {
        return  ''
    } else {
        return 'silueta'
    }
}

const mostrarNombrePokemon = (pokemon) => {
    if (pokemon?.id === seleccionado ) {
        netxPokemon(pokemon)
        return  'opacity-1'
    } else {
        return 'opacity-0'
    }

}

const mostrarCeroIntentos = () => {
    if (intentos === 0) {
        netxPokemon()
        return  'opacity-1'
    } else {
        return 'opacity-0'
    }
}



const netxPokemon = () => {
    function getAnotherPokemon(){
        if (intentos == 0) {
            setAciertos(0)
        }
        setIntentos(2)
        setCorrecto({})
        setOpciones([])
        setSeleccionado(0)
        setplayAgain(!playAgain)
    }
    setTimeout(getAnotherPokemon, 2000)
}

return (  

    <Fragment>

        <div 
        style={
        {height: '100vh', 
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/08/08/06/46/pokemon-1577763_960_720.jpg)',
        backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        opacity: '80%'
        }} 
        >

        <div className='w-100 d-flex align-items-center justify-content-start h5 m-0 px-2 textos  py-1'>
            <Back/>
        </div>
             
        <div className="p-2 text-center d-flex align-items-center justify-content-around container rounded"
         style={{
            backgroundImage: 'url(https://www.ansaldo.cl/wp-content/uploads/2022/05/banner-pokemon-web-25-1.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }}
         >
            <strong className="text-white text-uppercase h3 m-0 fw-bold py-1 px-2 textos" >Intentos {intentos}</strong>
            <strong className="text-white text-uppercase  h3 m-0 fw-bold py-1 px-2 textos" > <b>{aciertos}</b> Aciertos</strong>
        </div>

        { /** CAJA POKEMON */}
        <div className="text-white fw-bold 
            d-flex align-items-center justify-content-center flex-wrap">
            
            <div className="d-flex flex-column" >
            { correcto?.imagen &&
            <img src={correcto?.imagen} width={250} height={250} 
             className={`m-1 ${mostrarImagenPokemon(correcto)}`} 
            style={{objectFit: 'cover', border: 'none'}} />
            }
            </div>
    
            <div className="text-center">
                
                <h1 className="textos fw-bold" >¿Quíen es este pokemon?</h1>
                
                <div className={`p-2 ${mostrarNombrePokemon(correcto)}`} >
                       <strong className="text-capitalize textos text-center h2 m-0 text-success textos fw-bold" > 
                       ES {correcto?.nombre}
                       </strong>
                </div>
                
                <div className={`p-2 ${mostrarCeroIntentos()}`} >
                       <strong className="text-uppercase text-danger text-center textos h3 m-0 fw-bold" >
                        Te has quedado sin intentos
                        </strong>
                </div>

            </div>
        
        </div>
        
        {/** Opciones box */}
        <div className="row container m-auto mt-2" >
            {
                opciones.map((pok, i) => (
                    <div className="text-white fw-bold rounded col-5 col-sm-3 d-flex align-items-center"
                    key={i}
                    onClick={() => getOption(pok)}
                    >
                       <button  className="btn btn-danger text-center my-2 text-white textos h2 m-0 text-uppercase fw-bold" >
                       {pok.nombre}
                       </button>
                    </div>
                ))
            }
        </div>

        </div>
    
    </Fragment>
       
    )
}
 
export default PokeApp;