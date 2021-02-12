import React from 'react'
import { Link } from 'react-router-dom'

function NotFound(){
    return(
        <div className="text-center">
            <h1 className="display-5">Oopss ... Not found</h1>
            <Link className="btn btn-danger" to="/photos">Back Home</Link>
        </div>
    )
}

export default NotFound;