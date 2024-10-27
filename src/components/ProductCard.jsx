import React from 'react'
import { FaStar } from 'react-icons/fa';
import { addToCart } from "../redux/cartSlide";
import { useDispatch } from "react-redux";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Succesfully!")
  }
  return (
    <div className='bg-white shadow rounded relative border transform transition-transform
    duration-300 hover:scale-105 cursor-pointer'>
      <div>
        <img 
        src={product.image} 
        alt='' 
        loading='' 
        width=''
        className='w-full h-full object-contain'/>
      </div>
      <div className='p-4'>
        <h5 className='text-xl line-clamp-2'>{product.name}</h5>
        <p className='text-gray-500'>{product.price}</p>
        <div className='flex items-center mt-2'>
          <FaStar className='text-yellow-500'></FaStar>
          <FaStar className='text-yellow-500'></FaStar>
          <FaStar className='text-yellow-500'></FaStar>
          <FaStar className='text-yellow-500'></FaStar>
          <FaStar className=''></FaStar>
        </div>
        <div 
        onClick={(e) => handleAddToCart(e, product)}
        className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
        group text-white rounded-full hover:w-32 hover:bg-red-700 transition-all'>
          <span className='group-hover:hidden font-bold text-xl'>+</span>
          <span className='hidden group-hover:block'>Add to cart</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
