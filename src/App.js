import React, { useEffect, useState } from "react"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Shop from './pages/shop/Shop';
import HomePage from './components/HomePage';
import Cart from './pages/cart/Cart';
import Login from "./pages/login/Login";
import { useLocation } from 'react-router-dom';
import Contact from "./pages/contact/Contact";
import Aboutus from "./pages/about/Aboutus";
import Blogs from "./pages/blogs/Blogs";


function App() {

  const cartFromLocalStorage = localStorage.getItem('cart');
  const initialCart = cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];

  const [CartItem, setCartItem] = useState(initialCart);



  const addToCart = (product) => {

    const productExist = CartItem.find((item) => item.id === product.id)

    if (productExist) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
    } else {

      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }




  const decreaseQty = (product) => {
    const productExist = CartItem.find((item) => item.id === product.id)


    if (productExist.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item)))
    }
  }




  const removeItem = (id) => {
    const updatedItems = CartItem.filter((item) => item.id !== id);
    setCartItem(updatedItems);
  };
  
  const location = useLocation(); // Access the current route information





  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(CartItem))
  }, [CartItem])



  return (
    <div className="App">
      {
        // Check if the current route is not "/Login"
        location.pathname !== '/Login' ? (
          <>
            <Header CartItem={CartItem} />
            <Routes>
              <Route path="/" element={<HomePage addToCart={addToCart} CartItem={CartItem} />} />
              <Route path="/Shop" element={<Shop addToCart={addToCart} />} />
              <Route path="/Cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeItem={removeItem} />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/about" element={<Aboutus />} />
              <Route path="/blogs" element={<Blogs />} />

            </Routes>
            <Footer />
          </>
        ) : (
          <Routes>
            <Route path="/Login" element={<Login />} />
          </Routes>
        )
      }

    </div>
  )
}

export default App;
