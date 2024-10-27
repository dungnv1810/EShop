import React from 'react';

const categories = [
  {
    title: 'Men',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-m046cqhd7h5b3d@resize_w201_nl.webp'
  },
  {
    title: 'Women',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134258-7r98o-lx6pdo1qwogrf1@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/be40023a9d9cff397a470460bc7a924d@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-50009109-38bd1887c97742c1ccadde3fb952c75f@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-50009109-7ce7d5800afb2b6c80a7242236ec7409@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-50009109-5d6b20755f4ef36cf1f73d431c819c9e@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-50009109-06fb832ef52b45481158c26831cc459b@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/5fb3f7b359a582f322ea39313e10260b@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-50009109-08a87dd1e828b4bef31dafa67d5300ec@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-50009109-b71e5e73e9d5705a0eba35f0d03c33c6@resize_w201_nl.webp'
  },
  {
    title: 'Kids',
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-50009109-b44bb96f2e16efe70badc41661365c8a@resize_w201_nl.webp'
  },
];

const CategorySection = () => {
  
  return (
    <div className='container mx-auto grid grid-cols-2 sm:grid-cols-6 gap-5 cursor-pointer'>
      {categories.map((category, index) =>{
        return(
          <div key={index} className='relative h-full w-full transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <div>
              <img src={category.imageUrl} alt='' loading='' width='' className='object-cover rounded-lg shadow'/>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CategorySection
