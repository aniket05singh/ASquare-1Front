import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <div className='bg-gray-800 text-white p-4 w-full border-green-700 flex justify-between fixed top-0 z-10'>
        {/* logo Section */}
        <div className='flex gap-4 ml-4'>
            <div>logo</div>
            <div>ASquare</div>
        </div>
        {/* Navigation Section */}
        <div className='flex justify-evenly gap-20 mr-10'>
            <Link to='/'>Home</Link>
            <Link to='cal'>Calorie Tracker</Link>
            <Link to='contact'>Contact Us</Link>
            <Link>Sign Up</Link>
            <Link>Login</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
