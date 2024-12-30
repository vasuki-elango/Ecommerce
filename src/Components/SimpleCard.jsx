import React from 'react'
import { useNavigate } from 'react-router-dom'


export const SimpleCard = ({item}) => {
    const navigate = useNavigate()

  return (
    <div className='col'>
        <div className="card card-cat" onClick={()=>navigate('./products')}>
        <img src={item.img} alt="" className='card-img-top object-fit-cover h-75' />
        <div className="card-body text-center">
          <h5 className='card-title'>{item.title}</h5>
          <p>${item.price}</p>
        </div>
        </div>
    </div>
  )
}
