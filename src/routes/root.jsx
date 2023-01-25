
import App from '../App'
import React, {Fragment, useEffect} from 'react'

export default function Root() {

    return (

            <Fragment> 
            <header className='p-5 text-center bg-dark' >
            <h3 className='text-white' >Header component</h3>
            <a href="/about">about</a>
            </header>
            
            <div className='w-100' >
            <App/>
            </div>
            </Fragment>
    )

}