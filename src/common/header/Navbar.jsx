import React, { useState, useEffect } from 'react'
import { FaBorderAll } from "react-icons/fa"
import { Link } from 'react-router-dom'
// import { FaChevronDown } from "react-icons/fa";
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa';



const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (

        <div>
            <header className='header'>
                <div className='conatiner s_flex'>
                    {/* <div className='catgrories d_flex'>
                        <span><FaBorderAll /></span>
                        <h4>Catgories<i className='fa fa-chevron-down'></i></h4>

                    </div> */}


                    <div className='nav-link d_flex'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/Shop" className='nav-links' onClick={closeMobileMenu}>Shop</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About us</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/blogs" className='nav-links' onClick={closeMobileMenu}>Blog</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to="/Contact" className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                            </li>

                        </ul>

                    </div>
                    <div className='menu-icon' >
                        <i onClick={handleClick} >{click ? <FaTimes /> : <FaBars />}</i>
                    </div>
                </div>
            </header>

        </div >
    )
}

export default Navbar