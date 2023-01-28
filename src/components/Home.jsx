

import { Link } from "react-router-dom";

const HomeView = () => {
    
    return ( 
        <>
            <div className='text-white fw-bold text-center px-5 mt-2 d-flex'>
                <ul className='list-group' >
                <li className='h4 mt-1 m-0 p-2' >
                <Link className='fw-bold text-white' to="/todoapp">Todo App</Link>
                </li>
                <li className='h4 mt-1 m-0 p-2' >
                <Link className='fw-bold text-white' to="/pokeapp">Poke App</Link>
                </li>
                </ul>
            </div>  
        </>
     )

}
 
export default HomeView;

/**
 * 
 <div>
        <div className='w-100 py-3 px-4' >
              <strong>
              <Link className='fw-bold text-white' to="/">Home</Link>
              </strong>
        </div>
        <div className='text-white fw-bold text-center px-5 mt-2 d-flex'>
            <ul className='list-group' >
              <li className='h4 mt-1 m-0 p-2' >
                  <Link className='fw-bold text-white' to="/todoapp">Todo App</Link>
                </li>
                <li className='h4 mt-1 m-0 p-2' >
                  <Link className='fw-bold text-white' to="/pokeapp">Poke App</Link>
                </li>
            </ul>
        </div>
    </div>
 * 
 */