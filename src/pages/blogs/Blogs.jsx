import React from 'react'
import './Blogs.css'
import { FaRegComment } from 'react-icons/fa'
import { FaRegCalendar } from 'react-icons/fa'

const Blogs = () => {
    return (

        
        <div className='blog mmtop'>

            <div className='recent'>
                <h1 >Our Blogs</h1>
            </div>
            <div className='line'></div>


            <div className='os'>


                <div style={{width:'360px'}}>
                <div className='mtop'>
                    <img style={{ height: "260px", width: '360px' }} src={`${process.env.PUBLIC_URL}/imagess/banner/erik-mclean-waCVXubYxvg-unsplash.jpg`} alt='' />
                </div>
                <div className='blog-text'>
                    <div className='blog-txt-date'>
                        <i><FaRegCalendar /></i><span> 21 September 2023</span>
                    </div>
                    <div className='blog-txt-desc'>
                        <h2>The Best Street Style From London Fashion Week</h2>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam</p>
                    </div>
                    <p className='readmore'>Read More</p>
                </div>
                </div>



                <div style={{width:'360px'}}>
                <div className='mtop'>
                <img style={{ height: "260px", width: '360px' }} src={`${process.env.PUBLIC_URL}/imagess/banner/pexels-cottonbro-studio-6627106.jpg`} alt='' />

                </div>
                <div className='blog-text'>
                    <div className='blog-txt-date'>
                        <i><FaRegCalendar /></i><span> 21 September 2023</span>
                    </div>
                    <div className='blog-txt-desc'>
                        <h2>The Best Street Style From London Fashion Week</h2>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam</p>
                    </div>
                    <p className='readmore'>Read More</p>
                </div>
                </div>




                <div style={{width:'360px'}}>
                <div className='mtop'>
                    <img style={{ height: "260px", width: '360px' }} src={`${process.env.PUBLIC_URL}/imagess/banner/chimi-davila-58FCfyUti_w-unsplash.jpg`}  alt='' />
                </div>
                <div className='blog-text'>
                    <div className='blog-txt-date'>
                        <i><FaRegCalendar /></i><span> 21 September 2023</span>
                    </div>
                    <div className='blog-txt-desc'>
                        <h2>The Best Street Style From London Fashion Week</h2>
                        <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam</p>
                    </div>
                    <p className='readmore'>Read More</p>
                </div>
                </div>

            </div>








        </div>
    )
}

export default Blogs