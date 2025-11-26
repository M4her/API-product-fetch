import React, { useState } from 'react'
import { Link } from 'react-router'

const ResnavButton = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <nav className='px-2 py-3 w-full relative'>
        <div className="container ">
          <div className='absolute top-9 right-10 '>
            <Link to={'/'} ></Link>
            <button onClick={()=>setShowNav(!showNav)} className='px-3 py-3 bg-gray-500'></button>

          </div>
          <div className={`w-[190px] h-screen bg-black absolute  overflow-hidden  ${!showNav? "right-0":"right-[100%]"} text-white flex items-center flex-col`}>
            <button onClick={()=>setShowNav(!showNav)} className='bg-green-600 px-3 py-3'></button>

          </div>
          
        </div>
        

    </nav>
  )
}

export default ResnavButton