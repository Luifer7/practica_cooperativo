
import App from '../App'
import React, {Fragment, useEffect} from 'react'

export default function Root() {

    return (

            <Fragment> 
            <header className='p-5 text-center bg-dark' 
            style={{
            backgroundImage: `url("https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, 
            backgroundPositionY: 'center'}}>    
            <h1 className='text-dark fw-bold' >To-Do APP</h1>
            </header>
            
            <div className='w-100' >
            <App/>
            </div>
            </Fragment>
    )

}