import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <div className='mmtop service'>
        <div className='service1'>
            <img src={`${process.env.PUBLIC_URL}/imagess/icons/fast-delivery.png`} className='service-icon'/>
            <h3>Fast & Free Delivery</h3>
            <p>For all orders</p>
        </div>
        
        <div className='line1'></div>

        <div className='service1'>
            <img src={`${process.env.PUBLIC_URL}/imagess/icons/secure-payment.png`} className='service-icon'/>
            <h3>Secure Payment</h3>
            <p>100% secure payment</p>
        </div>

        <div className='line1'></div>

       
        <div className='service2'>
            <img src={`${process.env.PUBLIC_URL}/imagess/icons/24-hours.png`} className='service-icon'/>
            <h3>Online Support</h3>
            <p>Dedicated support</p>
        </div>

        <div className='line1'></div>


        <div className='service1'>
            <img src={`${process.env.PUBLIC_URL}/imagess/icons/money-back-guarantee.png`} className='service-icon'/>
            <h3>Money Back</h3>
            <p>If good have Problems</p>
        </div>

    </div>
  )
}

export default Service