import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { allProducts } from '../data'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions'


export const ProductDetails = () => {
  const dispath = useDispatch();
  const addToProduct = (item) =>{
      dispath(addToCart(item))
  }

  const navigate = useNavigate()
  const [selectColor, setSelectcolor] = useState(null)
  const [selectsize, setSelectsize] = useState(null)
  const { id } = useParams()
  const product = allProducts.find((item) => {
    return item.id == id
  })
  const colors = ["#232b12", "black", "red", "blue", "brown"]
  const size = ['xs', 's', 'm', 'l', 'xl', 'xxl']
  const handleColor = (color) => {
    setSelectcolor(color)
  }
  const handleSize = (size) => {
    setSelectsize(size)
  }
  return (
    <div className='container  mt-5  pt-2'>
      <div className="d-flex wrapper flex-column flex-md-row">
        <div className='singleProduct-imageSection'>
          <img src={product.img} alt="" className='singleProduct-image' />
        </div>
        <div className="singleProduct-infoSection">
          <h2 className='display-4 fw-normal'>{product.title}</h2>
          <p className='fs-2 text-success'>${product.price}</p>  
          <h6 className='fs-6 fw-normal text-uppercase pt-2'>Description</h6>
          <p className='text-secondary text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iure. Officiis numquam, omnis quod cupiditate ab voluptate eligendi quisquam fugiat voluptatibus quas quis doloribus dicta id quidem mollitia itaque. Totam?</p>
          <div className="d-flex flex-column flex-md-row my-3 gap-3">
            <div className="w-50 section">
              <h4>colors</h4>
              <div className="d-flex gap-1">
                {
                  colors.map((data, index) => {
                    return <p key={index} className="color-circle" style={{
                      backgroundColor: `${data}`,
                      outline: selectColor === data ? `2px solid ${data}` : ""
                    }} onClick={() => handleColor(data)}></p>
                  })
                }
              </div>
            </div>
            <div className="w-50 section">
              <h4>size</h4>
              <div className='sizes'>
                {
                  size.map((data, index) => {
                    return <span key={index} style={{ border: selectsize === data ? "2px solid #ccc" : "" }} onClick={() => handleSize(data)}>{data}</span>
                  })
                }
              </div>
            </div>
          </div>
          <div className="d-flex my-4">
            <button className='btn btn-lg btn-dark me-4' onClick={()=>addToProduct(product)}><i className="bi bi-bag pe-2" ></i>Add to cart</button>
            <button className='btn btn-lg btn-dark' onClick={()=>navigate('../cart')}>Go cart</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}
