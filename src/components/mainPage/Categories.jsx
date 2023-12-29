import React from "react"
import { useState } from "react";
const Categories = () => {
  
   
    
  const data = [
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/search.png`,
      cateName: "Fashion",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/shirts.png`,
      cateName: "Shirts",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/tshirt.png`,
      cateName: "T-Shirts",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/pants.png`,
      cateName: "Jeans",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/sportswear.png`,
      cateName: "Sports Wear",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/swimwear.png`,
      cateName: "Swim Suits",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/coverall.png`,
      cateName: "Jumpsuits",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/jacket.png`,
      cateName: "Jackets",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/baby-clothes.png`,
      cateName: "Baby Dress",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/blazer.png`,
      cateName: "Blazers",
    },
    {
      cateImg: `${process.env.PUBLIC_URL}/imagess/category/sneakers.png`,
      cateName: "Shoes",
    },
  ]

  return (
    <>
    
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' /><hr />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
      
    </>
  )
}

export default Categories