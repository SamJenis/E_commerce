import React from 'react'
import './Header.css'
import Search from './Search';
import Navbar from './Navbar';
import Head from './Head';

const Header = ({CartItem}) => {
  return (
    <div>
      <Head />
      <Search CartItem={CartItem}/>
      <Navbar />
    </div>
  )
}

export default Header