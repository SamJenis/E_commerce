import React, { useState } from 'react'
import './Cart.css'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';






const Cart = ({ CartItem, addToCart, decreaseQty, removeItem }) => {

  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)


  return (
    <>
      <div className='cart1'>
        <img src='./imagess/flash/bg-01.jpg' alt='' style={{ width: '100%', height: "140px", objectFit: 'cover' }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ color: 'white' }}>Cart</h2>
          <p>Home / <span>Cart</span></p>

        </div>
      </div>

      <section className='cart-items'>
        <div className='container d_flex' id='cartId'>

          <div className='cart-details'>
            {CartItem.length === 0 &&
              <div>
                <h1 className='no-items product'>No items in the cart .</h1>
                <Link to='/Shop'><button className='cartButton'>Shop Now</button></Link>
              </div>
            }


            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (


                <div className='cart-list product d_flex' key={item.id}>

                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div style={{ paddingLeft: '10px' }} className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button onClick={() => removeItem(item.id)} className='removeCart'>
                        <i className='fa-xmark'><FaTrash /></i>
                      </button>
                    </div>

                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fafa-plus'>+</i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fafa-minus'>-</i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>

              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>$ {totalPrice}.00</h3>

            </div>
            <br></br>
            <div className=' d_flex'>
              <h4>Delivery Charges :</h4>
              <h3>$ {(CartItem.length) ? '15.00' : '0.00'}</h3>

            </div>
            <hr></hr>
            <br></br>
            <div className=' d_flex'>
              <h4>Total Amount :</h4>
              <h3>$ {(CartItem.length) ? totalPrice + 15 : totalPrice}.00</h3>

            </div>
            <hr></hr>
            <button style={{ marginTop: '50px', marginLeft: '20px' }} className='cartButton'>Checkout</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart


