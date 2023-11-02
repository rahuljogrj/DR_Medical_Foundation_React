import React from 'react'
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className='container my-4'>
        <h1>Page not found</h1>
        <Link to="/"><button className='btn btn-primary'>Bact to home</button></Link>
    </div>
  )
}

export default NoPage