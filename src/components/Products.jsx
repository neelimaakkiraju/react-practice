import React from 'react'
import { useEffect, useState } from 'react'
import CursorFollower from "./cursorFollower"

const ProductsPage = () => {
 
  const [productData,setProductData] = useState([])
  useEffect(()=>{
     fetchData()
  },[])
  const fetchData = async()=>{
     const data = await fetch("https://fakestoreapi.com/products")
     const res = await data.json()
     setProductData(res)
     console.log(res)
  }
  return (
    
      <div className='text-center'>
        <CursorFollower/>
        <h1 className='text-2xl font-bold my-4'>Products</h1>
  
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
          {productData.map((product) => (
            <div key={product.id} className='border p-4 rounded shadow'>
              <img src={product.image} alt={product.title} className='w-32 h-32 mx-auto object-contain' />
              <h2 className='text-lg font-semibold mt-2'>{product.title}</h2>
              <p className='text-gray-600'>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default ProductsPage