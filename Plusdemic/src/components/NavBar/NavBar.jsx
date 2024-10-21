import React from 'react'
import logo from '../../assets/Plusdemic.png'

const NavBar = () => {
  return (
    <header>
        <div className="container py-5 flex items-center justify-between">
            <div>
                <img src={logo} alt='Plusdemic Logo' className='w-40'></img>
            </div>
            <ul className='hidden md:flex items-center gap-5'>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Customer Stories</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </ul>
            <div>
                <button className='border border-gray-400 px-4 py-2 rounded-lg
                hover:bg-primary hover:text-white transform duration-300'>Get in touch</button>
            </div>
        </div>
    </header>
  )
}

export default NavBar

