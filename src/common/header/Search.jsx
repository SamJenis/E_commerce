import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {

      // Add a scroll event listener to the window object
  window.addEventListener("scroll", function () {
      // Select the element with the class "search"
    const search = document.querySelector(".search");

      // Toggle the "active" class on the "search" element based on the scroll position
    if (search) {
      search.classList.toggle("active", window.scrollY > 100);
    }
  });


  return (
    <div>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <Link to='/'> <h3>Snitch</h3></Link>

          </div>


          <div className='search-box f_flex'>

            <i className=''><FaSearch /></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>

          </div>


          <div className='icons1 f_flex width'>

            <Link to='/Login' className='fafa-user icon-circle'>
              <i><FaUserAlt /></i>

            </Link>

            <div className='cart f_flex' >
              <Link to='/cart' >
                <i className=' icon-circle'><FaShoppingBag /></i>
                <span>{CartItem.length === 0 ? "0" : CartItem.length}</span>

              </Link>
            </div>


          </div>

        </div>
      </section>
    </div>
  )
}

export default Search