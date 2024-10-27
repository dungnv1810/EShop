import React, { useEffect } from 'react';

//mockData
import { Categories, mockData } from '../assets/mockData';

// Component 
import InfoSection from "../components/InfoSection";
import CategorySection from '../components/CategorySection';

// Products
import { setProducts } from '../redux/productSlice';
import {useDispatch, useSelector } from "react-redux";
import ProductCard from '../components/ProductCard';
import Shop from './Shop';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  useEffect(()=>{
    dispatch(setProducts(mockData))
  }, []);

  return (
    <>
      <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-3'>
          <div className='w-full md:w-3/12'>
            <div className=''>
              <div className='bg-red-600 text-white font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
              <ul className='space-y-4 backdrop-grayscale-100 p-3 border'>
                {
                  Categories.map((categories, index) => {
                    return(
                      <li key={index} className='flex items-center space-x-2 text-sm font-medium'>
                        <div className='w-2 h-2 border border-red-500 rounded-full mr-1'></div>
                        {categories}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
            <img 
              src='https://cf.shopee.vn/file/sg-11134258-7repa-m1pawfwks2tb4f_xxhdpi' 
              alt='' 
              loading='' 
              width=''
              className='h-full w-full'
            />
            <div className='absolute bottom-12 left-8'>
              <p className='text-gray-600 mb-1'>Code with Yousaf</p>
              <h2 className='text-3xl font-bold'>WELLCOM TO E_SHOP</h2>
              <p className='text-xl mt-2 font-bold text-gray-800'>MILLIONS + PRODUCTS</p>
              <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700
              transform transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
            </div>
          </div>
        </div>

        <InfoSection/>
        <CategorySection/>

        <div className='container mx-auto py-12'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
            {
              products.products.slice(0, 5).map((product, index) => {
                return(
                  <ProductCard key={index} product={product}/>
                )
              })
            }
          </div>
        </div>

        {/* Shop */}
        <div className='container mx-auto py-12'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
            {
              products.products.slice(0, 5).map((product, index) => {
                return(
                  <ProductCard key={index} product={product}/>
                )
              })
            }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
