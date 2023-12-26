import React,{useState} from 'react'
import './Product.css'
import Products from './Products'




const Product = ({addToCart}) => {

const [selectedCategory , setSelectedCategory] = useState('all');

const handleCategoryChange = (category) =>{
  setSelectedCategory(category);
}

  return (
    <section className='Products mmtop'>
    <div className='feature mtop'>
        <div>
            <h1>Featured Products</h1>
            <ul className='lists mtop'>
                <li onClick={() => handleCategoryChange('all')} className={selectedCategory === "all" ? "active1" : ""}>All</li>
                <li onClick={() => handleCategoryChange('men')} className={selectedCategory === "men" ? "active1" : ""}>Men</li>
                <li onClick={() => handleCategoryChange('women') } className={selectedCategory === "women" ? "active1" : ""}>Women</li>
                <li onClick={() => handleCategoryChange('kids')} className={selectedCategory === "kids" ? "active1" : ""}>Kids</li>
                <li onClick={() => handleCategoryChange('shoes')} className={selectedCategory === "shoes" ? "active1" : ""}>Shoes</li>
                <li onClick={() => handleCategoryChange('accessories')} className={selectedCategory === "accessories" ? "active1" : ""}>Accessories</li>
            </ul>

            </div>
     </div>
     <Products selectedCategory={selectedCategory} addToCart={addToCart}/>
    </section>
  )
}

export default Product