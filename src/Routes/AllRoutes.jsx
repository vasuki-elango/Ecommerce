import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Home} from '../Pages/Home'
import {Product} from '../Pages/Product'

import { PageNotFound } from '../Pages/PageNotFound'

import { ProductDetails } from '../Pages/ProductDetails'
import { Cart } from '../Pages/Cart'


export const AllRoutes = () => {
  // const addToCart
  return (
    <Routes>
        <Route path='/Ecommerce' element={<Home/>}/>
      <Route path='/Ecommerce'>
        <Route path='products' element={<Product/>}/>
        <Route path='product/:id' element={<ProductDetails/>} />
        <Route path='cart' element={<Cart/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}
