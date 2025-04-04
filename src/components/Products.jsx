import React from 'react'
import { useEffect, useState } from 'react'

const ProductsPage = () => {
 
  const [ProductData,setProductData] = useState("")
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
     <h1>
     products
     {
      ProductData.map((elem,index)=>{
        <div>
          <h1>
            {elem.category}
          </h1>
        </div>
      })
     }
     </h1>
    
    
      </div>
  )
}

export default ProductsPage