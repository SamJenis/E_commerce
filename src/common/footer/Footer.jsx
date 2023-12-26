import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
const Footer = () => {

    const year = new Date();

  return (
    <>
    <footer className='mmtop'>
        <div className='footer1'>
        <div className='footer'>
        
        <div>
            <div className='footerleft'>
                <h1>Snitch</h1>
                <div className='left1'>
                <p>Adress: 23, AP Road Chennai.</p>
                <p>INDIA</p>
                <p>Phone: 656126766</p>
                <p>Email: samjenis10@gmail.com</p>
                </div>
            </div>     
        </div>

        <div>  
            <div className='footermiddle'>
                <h5>QUICK LINKS</h5>
                <div className='middle1'>
                <p>Blog</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Services</p>
                </div>
            </div>   
        </div>

        <div>  
            <div className='footerlast'>
                <h5>ACCOUNT</h5>
                <div className='last1'>
                <p>My Account</p>
                <p>Shop</p>
                <p>Track Order</p>
                <p>Wishlist</p>
                </div>
            </div>    
        </div>


        <div>  
            <div className='newsletter'>
                <h5>NEWS LETTER</h5>
                <div className='news1'>
                <p>Get Email updates on our latest products and offers.</p>   
                <input className='newsinput' type='email' placeholder='examlpe@gmail.com'/>
                <button >Suscribe</button>
                </div>
            </div>    
        </div>

        </div>


        <div className='footericons'>
        <i className='fb iconBg'><FaFacebookF /></i>
        <i className='instagram iconBg'><FaInstagram /></i>
        <i className='tw iconBg'><FaTwitter /></i>
        <i className='yt iconBg'><FaYoutube /></i>
        <i className='pt iconBg'><FaPinterest /></i>
        </div>
        
       <div className='copyright'>
       Copyright &copy; {year.getFullYear()} Sam | All rights Reserved.

       </div>
        </div>
    </footer>
    </>
  )
}

export default Footer