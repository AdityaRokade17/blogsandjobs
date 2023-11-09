import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gray-nav'>
        <div>
            BLogsss
        </div>

        <div className='flex gap-5'>
            <NavLink to="/"><h1>Home</h1></NavLink>
            <NavLink to="/blogs"><h1>Blogs</h1></NavLink>
            <NavLink to="/jobs"><h1>Jobs</h1></NavLink>
        </div>
    </nav>
  )
}

export default Navbar