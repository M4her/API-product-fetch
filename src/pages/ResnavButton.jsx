import React from 'react'
import { Link } from 'react-router'

const ResnavButton = () => {
  return (
    <nav className='px-2 py-3 w-full absolute top-0 left-0'>
        <div className="container">
          <div className=''>
            <Link to={'/'} ></Link>
            <button className='px-3 py-3 bg-gray-500'></button>
          </div>
        </div>

    </nav>
  )
}

export default ResnavButton