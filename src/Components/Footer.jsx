import React from 'react'
import {footerLinks} from '../data'
import payment from '../assets/payment.png'

export const Footer = () => {
  return (
    <div className='footer-container bg-dark text-light'>
      <div className="footer-left">
          <h1 className='footer-logo'>Trendio</h1>
          <p className='footer-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolorem nam error sit incidunt laboriosam.</p>
          <div className="social-container">
            <div className="social-icon" style={{background:"#e1306c"}}>
              <i className='icon bi bi-instagram'></i>
            </div>
            <div className="social-icon" style={{background:"#25d366"}}>
              <i className='icon bi bi-whatsapp'></i>
            </div>
            <div className="social-icon" style={{background:"#123bf1"}}>
              <i className='icon bi bi-facebook'></i>
            </div>
            <div className="social-icon" style={{background:"#ff0000"}}>
              <i className='icon bi bi-youtube'></i>
            </div>
          </div>
      </div>
      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul className='footer-list'>
        {
          footerLinks.map((link)=>{
            return <li key={link.id}className='footer-list-item'>{link.title}</li>
          })
        }
        </ul>
      </div>

      <div className="footer-right">
        <h3>Contact</h3>
        <div className="contact-item">
          <i className='bi bi-house-fill'> 65,Street,chennai</i>
            
        </div>
        <div className="contact-item">
        <i className="bi bi-telephone-fill"> +9189014367</i>
       
            
        </div>
        <div className="contact-item">
        <i className='bi bi-envelope-at-fill'> example@gmail.com</i>
       
            
        </div>
        <img src={payment} alt="" className='payment'/>
      </div>
    </div>
  )
}
