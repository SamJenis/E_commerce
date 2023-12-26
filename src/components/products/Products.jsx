import React, { useState } from 'react'
import { PiShoppingCartBold } from 'react-icons/pi';
import { FaRegHeart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import './Product.css'
import ProductData from './ProductData';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';





const Products = ({ selectedCategory, addToCart }) => {


  
  const sweetAlert = ()=>{
    Swal.fire({
      title: 'Added!',
      text: 'Added to cart successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  // const filteredProducts = selectedCategory === 'all' ?
  // ProductData.filter(product => product.category === 'all')
  // : ProductData.filter(product => product.category === selectedCategory);

  const filteredProducts = ProductData.filter(product => product.category === selectedCategory);




  return (
    <>
      <div className='product-list'>
        {filteredProducts.map(product => (
          <div key={product.id}  className={`product-item ${selectedCategory === 'all' || product.category === selectedCategory ? 'visible' : ''}`}>

            <div className='boxx'>
              <div className='product1 mtop' >

                <img style={{ height: "390px", width: '290px',objectFit:'contain' }} src={product.cover} alt='' />


                <div className="likes">
                 
                  <a href="#" className="bx11 heart1">
                    <i >< FaRegHeart className="icons" /> </i>
                  </a>
                  <a  className="bx11 searchs1">
                    <i >< FiSearch className="icons" /> </i>
                  </a>
                  <a  className="bx11 plus1" onClick={sweetAlert}>
                    <i onClick={()=> addToCart(product)}><PiShoppingCartBold className="icons" /></i>
                  </a>

                </div>


                <div className='product-details'>
                  <h3>{product.name}</h3>
                </div>
                <div className='price'>
                  <h4>${product.price}.00 </h4>
                </div>
              </div>
            </div>

          </div>
        )


        )
        }
      </div>
      <div style={{display : 'flex', justifyContent:'center', alignItems:'center', marginTop:'70px'}}>
        <Link to ='Shop'><button>SHOP MORE</button></Link>
      </div>
    </>
  )
}

export default Products