import React from 'react'
import Home from './mainPage/Home'
import Card from './cards/Card'
import FlashDeals from './flashdeals/FlashDeals'
import Banner from './banner/Banner'
import Product from './products/Product'
import About from './aboutUs/About'
import Blog from './blog/Blog'
import Insta from './insta/Insta'
import Service from './services/Service'
import Brand from './brands/Brand'
import Data from './flashdeals/Data'


const HomePage = ({addToCart}) => {
  const { productItems } = Data
  return (
    <div>
        <Home />
        <Card />
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <Banner />
        <Product addToCart={addToCart}/>
        <About />
        <Blog />
        <Insta />
        <Service />
        <Brand />
    </div>
  )
}

export default HomePage