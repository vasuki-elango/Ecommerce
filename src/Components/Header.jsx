import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = () => {
  const navigiate = useNavigate()
  const state = useSelector((state)=>{ return state.handleCart})
  return (
    <nav class="navbar navbar-expand-lg  bg-dark navbar-dark fixed-top">
  <div class="container-fluid px-5">
    <a class="navbar-brand" href='http:/'>Trendio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/ecommerce'} className="nav-link">Home</Link>
        </li>
        <li class="nav-item">
        <Link to={'/ecommerce/products'} className="nav-link">Products</Link>
        </li>
      </ul>
      <button className='bi bi-cart btn btn-outline-light' onClick={()=>navigiate('./cart')}> {state.length===0?"":state.length}</button>
    </div>
  </div>
</nav>
  )
}
