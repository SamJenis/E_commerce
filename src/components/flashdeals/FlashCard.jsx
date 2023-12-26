import React, { useState } from "react"
import { PiShoppingCartBold } from 'react-icons/pi';
import { FaRegHeart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Swal from 'sweetalert2'



const FlashCard = ({ productItems, addToCart }) => {



  const sweetAlert = () => {
    Swal.fire({
      title: 'Added!',
      text: 'Added to cart successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }


  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    swipeable: false,
    draggable: false,
    infinite: true,
    autoPlaySpeed: 1000,
    keyBoardControl: true,
    renderArrowsWhenDisabled: true,
    containerClass: "carousel-container",
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px"

  }


  const responsive = {
    largeScreen: {
      breakpoint: { max: 3000, min: 1490 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1490, min: 1100 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1100, min: 760 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <>
      <Carousel {...settings} responsive={responsive}>
        {productItems.map((productItems) => {
          return (
            <div className='boxx' key={productItems.id}>
              <div className='product1 mtop' style={{ alignItems: 'center' }}>

                <img style={{ height: "390px", width: '290px', objectFit: 'contain' }} src={productItems.cover} alt='' />


                <div className="likes" style={{ width: '155px' }}>
                  <a href="#" className="bx11 searchs1">
                    <i >< FiSearch className="icons" /> </i>
                  </a>

                  <a href="#" className="bx11 heart1">
                    <i >< FaRegHeart className="icons" /> </i>
                  </a>
                  <a className="bx11 plus1" onClick={sweetAlert}>
                    <i onClick={() => addToCart(productItems)}><PiShoppingCartBold className="icons" /></i>
                  </a>

                </div>


                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                </div>
                <div className='price'>
                  <h4>${productItems.price}.00 </h4>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </>
  )
}

export default FlashCard




