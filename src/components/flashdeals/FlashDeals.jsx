import React from 'react'
import FlashCard from './FlashCard'
import './Flash.css'

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <div className='mmtop'>

      <div style={{ width: '77%', margin: 'auto' }}>

        <h2 className='new-arrival'>Trending Products</h2>
        <FlashCard productItems={productItems} addToCart={addToCart} />

      </div>
    </div>
  )
}

export default FlashDeals