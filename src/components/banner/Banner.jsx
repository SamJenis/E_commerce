import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'



const Banner = () => {
  return (
    <div className='banner mmtop' >
      <div className='b1'>
        <div className='one'>
          <div className='one-desc'>
            <p >Casual collections</p>
            <h1 className='desc'>Street Wear.</h1>
            <Link to='/Shop'><p>Shop now</p></Link>
          </div>
          <img className='image1' src='./imagess/banner/street-wear03.jpg' style={{ width: '1090px' }} />

        </div>
        <div className='b2'>
          <div className='two'>
            <div className='one-desc2'>
              <p >winter collections</p>
              <h1 className='desc'>sweater.</h1>
              <Link to='/Shop'><p>Shop now</p></Link>
            </div>
            <img className='image2' src='./imagess/banner/winter1.jpg' style={{ width: '600px' }} />
          </div>

          <div className='three' >
            <div className='one-desc3'>
              <p >Casual collections</p>
              <h1 className='desc'>Shoes.</h1>
              <Link to='/Shop'><p>Shop now</p></Link>
            </div>
            <img className='image3' src='./imagess/banner/shoes.jpg' style={{ width: '600px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner