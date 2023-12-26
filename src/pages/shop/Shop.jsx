import React, { useState } from 'react'
import './Shop.css'
import { PiShoppingCartBold } from 'react-icons/pi';
import { FaRegHeart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import ShopProducts from './ShopProducts'
import Swal from 'sweetalert2'

const Shop = ({addToCart}) => {

  const sweetAlert = ()=>{
    Swal.fire({
      title: 'Added!',
      text: 'Added to cart successfully',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  const [searchQuery, setSearchQuery] = useState('')

  const [selectedCategory, setSelectedCategory] = useState('All');

  const [value, setValue] = useState("200");

  const [selectedPrice, setSelectedPrice] = useState([]);

  const [selectedColor, setSelectedColor] = useState('All');


  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  }
 
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }
  const handleColorChange = (color) => {
    setSelectedColor(color);
  }

    const filteredProducts3 = ShopProducts.filter(product=>{
      const searchFilter = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const categoryFilter = selectedCategory === 'All' || product.category === selectedCategory;
      const priceFilter = selectedPrice === 0 || product.price <= value;
      const colorFilter = selectedColor === 'All' || product.color === selectedColor;

      return searchFilter && categoryFilter && priceFilter && colorFilter;
      
    } )
    const countProductsInCategory =(category) =>{
      if (category === 'All'){
        return ShopProducts.length;
      }
      else if(category === 'Men'){
        return category.length +1;
      }
      else if(category === 'Women'){
        return category.length +1;
      }
      else if(category === 'Kids'){
        return category.length +1;
      }
      else if(category === 'Accessories'){
        return category.length +1;
      }
      else if(category === 'Shoes'){
        return category.length +1;
      }
    }
  
    const noOfProductsInCategory = countProductsInCategory(selectedCategory);


    const clearFilters = () => {
      setSearchQuery('');
      setSelectedCategory('All');
      setValue("200");
      setSelectedPrice([]);
      setSelectedColor('All');
   }

   

  return (
    <>
      

      <div className='shopDiv'>
        <img src='./imagess/flash/bg-01.jpg' alt='' style={{ width: '100%', height: "140px", objectFit: 'cover' }} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{color:'white'}}>Shop</h2>
          <p>Home / <span>Shop</span></p>
        </div>
      </div>

      <div className='shopCate'>


        <div className='shopFilter mmtop'>
          
          <div className='filterCategory'>
            <h3>Category</h3>
            <ul className='categoryLi'>
              <li onClick={() => handleCategoryChange('All')} className={selectedCategory === "All" ? "active2" : ""}>All</li>
              <li onClick={() => handleCategoryChange('Men')} className={selectedCategory === "Men" ? "active2" : ""}>Men</li>
              <li onClick={() => handleCategoryChange('Women')} className={selectedCategory === "Women" ? "active2" : ""}>Women</li>
              <li onClick={() => handleCategoryChange('Kids')} className={selectedCategory === "Kids" ? "active2" : ""}>Kids</li>
              <li onClick={() => handleCategoryChange('Shoes')} className={selectedCategory === "Shoes" ? "active2" : ""}>Shoes</li>
              <li onClick={() => handleCategoryChange('Accessories')} className={selectedCategory === "Accessories" ? "active2" : ""}>Accessories</li>
            </ul>
          </div>
          <button onClick={clearFilters}>Clear Filters</button>

          <div className='filterPrice'>
            <h3>Price</h3>
            <div style={{ display: 'flex', gap: '3px' }}><p>$</p><p>{value}</p></div>

            <input type="range" className='range' min="0" max="1000" step="1" value={value} onChange={(e) => { setValue(e.target.value); }} />

          </div>

          <div className='filterColor'>
            <h3>Colors</h3>
            <div className='colorsDivBox'>
              <div className='colors1'>
                <div className='d_flex1' onClick={() => handleColorChange('red')}><div className='filterColorDiv filterColorRed'></div><div>Red</div></div>
                <div className='d_flex1' onClick={() => handleColorChange('blue')}><div className='filterColorDiv filterColorBlue'></div><div>Blue</div></div>
                <div className='d_flex1'><div className='filterColorDiv filterColorYellow'></div><div>Yellow</div></div>
                
              </div>
              

              <div className='colors2'>
                <div className='d_flex1'><div className='filterColorDiv filterColorBlack'></div><div>Black</div></div>
                <div className='d_flex1'><div className='filterColorDiv filterColorGreen'></div><div>Green</div></div>
                <div className='d_flex1'><div className='filterColorDiv filterColorViolet'></div><div>Violet</div></div>
              </div>
              
            
            </div>

          </div>


          <div className='filterSize'>
            <h3>Size</h3>
            <div className='filterSizeDiv'>
              <div className='sizeDivBox'>S</div>
              <div className='sizeDivBox'>M</div>
              <div className='sizeDivBox'>L</div>
              <div className='sizeDivBox'>XL</div>
              <div className='sizeDivBox'>XL</div>

            </div>
          </div>

          <div className='filterTags'>
            <h3>Tags</h3>
            <div className='tagDiv1'>
              <p>Fashion</p>
              <p>Life Style</p>
            </div>
            <div className='tagDiv2'>
              <p>Denim</p>
              <p>Street Wear</p>
              <p>Coats</p>
            </div>
          </div>

        </div>

        <div className='shopProducts'>
          <div className='shopSearchBox'>
            <input className='filterSearchBox' type='' placeholder='Search Products' value={searchQuery} onChange={handleSearchInputChange}/>
          </div>
              <div className='noOFProducts'>
              <p>
                {selectedCategory === 'All'
                  ? `Showing ${selectedCategory} ${noOfProductsInCategory} products.`
                  : `Showing ${noOfProductsInCategory} products in ${selectedCategory}.`}
              </p>

          </div>

          <div className='product-lists'>
            {filteredProducts3.map(product => (
              <div key={product.id} className={`product-item ${selectedCategory === 'all' || product.category === selectedCategory ? 'visible' : ''}`}>

                <div className='boxx'>
                  <div className='product1 mtop' >

                    <img style={{ height: "390px", width: '290px', objectFit: 'contain' }} src={product.cover} alt='' />


                    <div className="likes">
                      
                      <a href="#" className="bx11 heart1">
                        <i >< FaRegHeart className="icons" /> </i>
                      </a>
                      <a href="#" className="bx11 searchs1">
                        <i >< FiSearch className="icons" /> </i>
                      </a>
                      <a className="bx11 plus1" onClick={sweetAlert}>
                        <i onClick={() => addToCart(product)}><PiShoppingCartBold className="icons" /></i>
                      </a>

                    </div>


                    <div className='product-details'>
                      <h3>{product.name}</h3>
                    </div>
                    <div className='price'>
                      <h4>${product.price}.00 </h4>
                    </div>
                  </div>
                </div>

              </div>
            )


            )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop