import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'
import { ShoppingCart, User, Menu } from "lucide-react"
function Navbar() {
    const [isOpen, setOpen] = useState(false);
    function showMenu(){  
      setOpen(!isOpen);    
    }
    return( 
    <>
    {/* the Destop navbar  */}
    <header className="hidden md:flex justify-between  items-center bg-black text-gray-100 py-2 px-16 shadow-md ">
       <div> <img src={logo} alt="logo" className='w-40 h-10 lg:w-60 lg:h-20 rounded-2xl lg:p-2'/></div>
        <nav className='flex space-x-4 font-bold '>
            <Link to= "/" className='hover:text-red-400'>Home</Link>
            <Link to= "/ProductsPage" className='hover:text-red-400'>Products</Link>
            <Link to= "/About" className='hover:text-red-400'>About</Link>
            <Link to= "/Contact" className='hover:text-red-400'>Contact</Link>
        </nav>
        <div className="flex space-x-8">
            <button className='flex items-center justify-center space-x-1 hover:text-gray-400'>
               <User className='items-center'/>
              <div>
                <h5 className="hidden lg:flex lg:text-[14px]">My accout</h5>
                <p className="hidden text-[12px] lg:flex lg:text-[14px]">Login</p>
              </div>
            </button>
            <button className='flex items-center justify-center space-x-1 hover:text-gray-500'>
                <ShoppingCart />
                <div>
                    <h5 className='hidden text-[14px] lg:flex lg:text-[14px]'>My Cart</h5>
                    <p className='hidden text-[12px] lg:flex lg:text-[14px]'>0 items</p>
                </div>
            </button>
        </div>
    </header>

    {/* the navigation bar for the mobile users */}
    <header className=' bg-black text-white flex  justify-between p-4 md:hidden'>
     <div>
        <div> <img src={logo} alt="logo" className='w-40 h-10 '/></div>
     </div>
     <div className='flex space-x-4 '>
        <User/> 
       <ShoppingCart />

    <div className='' onClick={showMenu}>
        <Menu />
     </div>
     </div>

     <nav className={`${
        isOpen? "block ": "hidden"
      } hidden space-x-4 font-bold ` }>
            <Link to= "/" className='hover:text-red-400'>Home</Link>
            <Link to= "/ProductsPage" className='hover:text-red-400'>Products</Link>
            <Link to= "/About" className='hover:text-red-400'>About</Link>
            <Link to= "/Contact" className='hover:text-red-400'>Contact</Link>
    </nav>
    </header>
    </>
    )
}

export default Navbar