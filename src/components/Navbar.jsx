import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// React icon
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const products = useSelector(state => state.cart.products)
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 flex justify-between md:px-16 lg:px-24 py-4'>
        {/* Logo */}
        <div className='text-lg font-bold flex items-center'>
          <Link to='/'>E-Shop</Link>
        </div>
        <div className='relative flex-1 mx-4 '>
          {/* Search product */}
          <form>
            <input type='text' placeholder='Search Product' className='w-full border rounded-md py-2 px-4 outline-none'/>
            <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
          </form>
        </div>
        {/* Login | Register and Card */}
        <div className='flex items-center space-x-4'>
          <Link to='/cart'>
            <FaShoppingCart className='text-lg'></FaShoppingCart>
            
          </Link>
          <button className='hidden md:block'>Login | Register</button>
          <button className='block md:hidden'>
            <FaUser></FaUser>
          </button>
        </div>
      </div>

      {/* Menu */}
      <div className='flex items-center justify-center space-x-6 py-2 text-sm font-bold'>
        <Link to='/' className='hover:underline px-4 py-2'>
          Home
        </Link>
        <Link to='/shop' className='hover:underline px-4 py-2'>
          Shop
        </Link>
        <Link to='/contact' className='hover:underline px-4 py-2'>
          Contact
        </Link>
        <Link to='/about' className='hover:underline px-4 py-2'>
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
