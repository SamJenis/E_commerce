import React from 'react'
import './Blog.css'
import { FaRegCalendar } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Blog = () => {
    return (
        <div className='blog mmtop'>

            <div className='recent'>
                <h1 >Recent Blog</h1>
            </div>
            <div className='line'></div>


            <div className='os'>


                <div style={{width:'360px'}}>
                <div className='mtop'>
                    <img style={{ height: "260px", width: '360px' }} src='./imagess/banner/erik-mclean-waCVXubYxvg-unsplash.jpg' alt='' />
                </div>
                <div className='blog-text'>
                    <div className='blog-txt-date'>
                        <i><FaRegCalendar /></i><span> 21 September 2023</span>
                    </div>
                    <div className='blog-txt-desc'>
                        <h2>The Best Street Style From London Fashion Week</h2>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam</p>
                    </div>
                    <Link to ='/blogs'><p className='readmore'>Read More</p></Link>
                </div>
                </div>



                <div style={{width:'360px'}}>
                <div className='mtop'>
                    <img style={{ height: "260px", width: '360px' }} src='./imagess/banner/pexels-cottonbro-studio-6627106.jpg' alt='' />
                </div>
                <div className='blog-text'>
                    <div className='blog-txt-date'>
                        <i><FaRegCalendar /></i><span> 21 September 2023</span>
                    </div>
                    <div className='blog-txt-desc'>
                        <h2>The Best Street Style From London Fashion Week</h2>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam</p>
                    </div>
                    <Link to ='/blogs'><p className='readmore'>Read More</p></Link>
                </div>
                </div>




                <div style={{width:'360px'}}>
                <div className='mtop'>
                    <img style={{ height: "260px", width: '360px' }} src='./imagess/banner/chimi-davila-58FCfyUti_w-unsplash.jpg' alt='' />
                </div>
                <div className='blog-text'>
                    <div className='blog-txt-date'>
                        <i><FaRegCalendar /></i><span> 21 September 2023</span>
                    </div>
                    <div className='blog-txt-desc'>
                        <h2>The Best Street Style From London Fashion Week</h2>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam</p>
                    </div>
                    <Link to ='/blogs'><p className='readmore'>Read More</p></Link>
                </div>
                </div>

            </div>

        </div>
    )
}

export default Blog