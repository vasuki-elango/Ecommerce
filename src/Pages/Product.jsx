import React, { useState } from 'react'
import { Card } from '../Components/Card'
import { allProducts } from '../data'


export const Product = () => {
  const [product, setProduct] = useState(allProducts)

  const handleProduct = (category) => {
    const updateProduct = allProducts.filter((data) => {
      return data.category === category
    })
    setProduct(updateProduct)
  }

  return (
    <div className="container mt-5  pt-2">
      <div className='d-flex justify-content-center align-items-center gap-3 m-4'>
        <button className='btn btn-outline-dark' onClick={() => setProduct(allProducts)} value="all">All</button>
        <button className='btn btn-outline-dark' onClick={() => handleProduct("Woman")} value="Woman">Woman</button>
        <button className='btn btn-outline-dark' onClick={() => handleProduct("Men")} value="Men">Men</button>
        <button className='btn btn-outline-dark' onClick={() => handleProduct("Kids")} value="Kids">Kids</button>
      </div>
      


      <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 g-3 mb-4'>
        {
          product.map((product) => {
            return <Card product={product} key={product.id} />
          })
        }
      </div>
    </div>
  )
}
