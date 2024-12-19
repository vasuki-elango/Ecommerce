import React, { useState } from 'react'
import { sliderItems } from '../data'
import { categories } from '../data'
import { newArrivals } from '../data'
import { bestsellers } from '../data'
import './slider/Slider.css'

import { SimpleCard } from '../Components/SimpleCard'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [slideIndex, setSlideindex] = useState(0)
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideindex(slideIndex > 0 ? slideIndex - 1 : 2)
    }
    else {
      setSlideindex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  const navigate = useNavigate()
  return (
    <>
      <div className='slider-container  mt-5  pt-2'>
        <div className="arrow" direction="Left" onClick={() => handleClick("left")}>
          <i className='bi bi-caret-left-fill icon'></i>
        </div>
        <div className='slider-wrapper'
          style={{ transform: `translate(${slideIndex * -100}vw` }}>
          {
            sliderItems.map(items => {
              return <div key={items.id} className='slide'
                style={{
                  backgroundColor: `#${items.bg}`
                }}>
                <div className="img-container">
                  <img src={items.img} alt="" className='img' />
                </div>
                <div className="info-container">
                  <h1 className='title'>{items.title}</h1>
                  <p className="desc">{items.desc}</p>
                  <button className='button' onClick={()=>navigate('./ecommerce/products')}>Shop Now</button>
                </div>
              </div>
            })
          }
        </div>
        <div className="arrow" direction="Right" onClick={() => handleClick("right")}>
          <i className='bi bi-caret-right-fill icon'></i>
        </div>
      </div>

      <main className='container'>
        <h1 className='py-5 text-center'>Categories</h1>
          <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1'>
            {
              categories.map((item) => {
                return <div className='col' key={item.id} onClick={()=>navigate('./ecommerce/products')}>
                <div className="card h-75">
                <img src={item.img} alt="" className='card-img-top object-fit-cover h-100 cate-img' />
                </div>
                <div className="cate-content">
                  <h2 className='text-center py-4'>{item.title}</h2>
                </div>

            </div>
              })
            }
          </div>
        <h2 className='text-center py-4'>Products</h2>
        
          <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1'>
            {
              newArrivals.map((item) => {
                return <SimpleCard item={item} key={item.id}/>
              })
            }
          </div>
        <h2 className='text-center py-4'>Best Sellers</h2>
          <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1'>
            {
              bestsellers.map((item) => {
                return <SimpleCard item={item} key={item.id}/>
              })
            }
          </div>
      </main>

      <div className="newsletter-container">
        <h2 className='display-2 fw-normal'>News Letter</h2>
        <p className='text-center fs-4 text-secondary mb-3'>Lorem. Incidunt nulla doloribus numquam temporciendis tempora voluptas enim nisi.</p>
        <form action="" className='input-container'>
          <input type="text" placeholder="Your Email" className='newsletter-input' />
          <button className='newsletter-button'>Send</button>
        </form>
      </div>
    </>
  )
}
