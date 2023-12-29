import React from "react"
import './Home.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const SlideCard = () => {
    const Sdata = [
        {
          id: 1,
          title: "Women's Fashion",
          desc: "NEW ARRIVALS",
          cover: "imagess/slides/banner1.jpg",
          
        },
        {
          id: 2,
          title: "Mens collection 2023",
          desc: "NEW ARRIVALS",
          cover: "./imagess/slides/hero-002.jpg",
        },
        {
          id: 3,
          title: "Winter collections",
          desc: "NEW SEASON",
          cover: "./imagess/slides/slide-01.jpg",
        },
        {
          id: 4,
          title: "Summer Collections",
          desc: "NEW SEASON",
          cover: "./imagess/slides/slide-04.jpg",      
          },
      ]
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            
              <div className='box d_flex top ' key={value.id} id="slideBox">
                <div className="box-txt">
                  <div >
                  {value.title}
                  </div>
                 
                  <h1>
                    {value.desc}
                  </h1>
                  <button>Shop now</button>
                </div>
                <div className='right'>
                  <img style={{width:'1200px',height:'620px'}} src={value.cover} alt='' />
                </div>
                
              </div>
            
          )
        })}
      </Slider>   
    </>
  )
}

export default SlideCard
