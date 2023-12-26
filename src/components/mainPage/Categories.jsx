import React from "react"
import { useState } from "react";
const Categories = () => {
  
   
    
  const data = [
    {
      cateImg: "./imagess/category/search.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./imagess/category/shirts.png",
      cateName: "Shirts",
    },
    {
      cateImg: "./imagess/category/tshirt.png",
      cateName: "T-Shirts",
    },
    {
      cateImg: "./imagess/category/pants.png",
      cateName: "Jeans",
    },
    {
      cateImg: "./imagess/category/sportswear.png",
      cateName: "Sports Wear",
    },
    {
      cateImg: "./imagess/category/swimwear.png",
      cateName: "Swim Suits",
    },
    {
      cateImg: "./imagess/category/coverall.png",
      cateName: "Jumpsuits",
    },
    {
      cateImg: "./imagess/category/jacket.png",
      cateName: "Jackets",
    },
    {
      cateImg: "./imagess/category/baby-clothes.png",
      cateName: "Baby Dress",
    },
    {
      cateImg: "./imagess/category/blazer.png",
      cateName: "Blazers",
    },
    {
      cateImg: "./imagess/category/sneakers.png",
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