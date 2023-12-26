import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Brand.css'

const Brand = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    swipeable: true,
    draggable: true,
    autoPlay: true,
    infinite: true,
    autoPlaySpeed: 5000,
    keyBoardControl: true,
    renderArrowsWhenDisabled: false,
    containerClass: "carousel-container",
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",


  }


  const responsive = {
    largeScreen: {
      breakpoint: { max: 3000, min: 1490 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1490, min: 1100 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1100, min: 760 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <>
      <div className='mmtop'>



        <Carousel {...settings} responsive={responsive} className='mmtop brand-carousel'>

          <img className='brand-logo' src='./imagess/brands/brand-logo-03.png' style={{ width: '150px', height: '100px', border: 'none' }} />
          <img className='brand-logo' src='./imagess/brands/brand-logo-04.png' style={{ width: '150px', height: '100px', border: 'none' }} />
          <img className='brand-logo' src='./imagess/brands/brand-logo-05.png' style={{ width: '150px', height: '100px', border: 'none' }} />
          <img className='brand-logo' src='./imagess/brands/brand-logo-06.png' style={{ width: '150px', height: '100px', border: 'none' }} />

          <img className='brand-logo' src='./imagess/brands/brand-logo-01.png' style={{ width: '150px', height: '100px', border: 'none' }} />
          <img className='brand-logo' src='./imagess/brands/brand-logo-02.png' style={{ width: '150px', height: '100px', border: 'none' }} />

        </Carousel>
      </div>
    </>
  )
}

export default Brand