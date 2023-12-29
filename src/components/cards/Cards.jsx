import React from 'react'

const Cards = () => {
  return (
    <div className='mmtop'>
      <div className='products mtop '>
        <div className='p1'>
          <div className='labels'>
            <h1 >Women</h1>
            <p className='desc'>Summer 2023</p>
            <p>Shop now</p>
          </div>
          <img style={{ width: '400px', height: "280px" }} src={`${process.env.PUBLIC_URL}/imagess/flash/banner-01.jpg`} />
        </div>

        <div className='p1'>
          <div className='labels'>
            <h1 >Men</h1>
            <p className='desc'>Summer 2023</p>
            <p>Shop now</p>
          </div>
          <img style={{ width: '400px', height: "280px" }} src={`${process.env.PUBLIC_URL}/imagess/flash/banner-02.jpg`} />
        </div>

        <div className='p1'>
          <div className='labels'>
            <h1 >Accesssories</h1>
            <p className='desc'>Trending</p>
            <p>Shop now</p>
          </div>
          <img style={{ width: '400px', height: "280px" }} src={`${process.env.PUBLIC_URL}/imagess/flash/banner-07.jpg`} />
        </div>

      </div>
    </div>
  )
}

export default Cards
