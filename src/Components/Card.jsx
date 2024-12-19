import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions'

export const Card = ({ product }) => {
  const dispath = useDispatch();
  const addProduct = (item) => {
    dispath(addToCart(item))
  }

  const navigate = useNavigate()
  return (
    <div className='col'>
      <div className='card p-2 h-100'>
        <div onClick={() => navigate(`../product/${product.id}`)} product={product}>
          <img src={product.img} alt={product.title} className='card-img-top object-fit-cover bg-secondary' height="250px" />
          <div className="card-body">
            <h5 className='card-title'>{product.title.substring(0, 15)}</h5>
            <div className='d-flex justify-content-between card-text'>
              <p className='card-text'>${product.price}</p>
              <h4 className="text-success">{product.offer}%</h4>
            </div>
            <p> <i className="bi bi-star-fill text-warning"></i> {product.ratings} | <i className="bi bi-people-fill text-primary"></i> {product.persons}</p>
          </div>
        </div>
        <button className='btn btn-outline-dark' onClick={() => addProduct(product)}>Add to cart</button>
      </div>
    </div>
  )
}
