import React from 'react'
import './Insta.css'
import { FaInstagram } from 'react-icons/fa'

const Insta = () => {

    return (
        <>
        <div className='insta mmtop'>

                <div className='insta-item gradient-bg' style={{
                    backgroundImage: 'url(imagess/flash/gallery-02.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}>
                    <div className='insta-txt'>
                        <i className='fainsta'><FaInstagram /></i>
                        <p><a href='#'>@snitch_collection</a></p>
                    </div>
                </div>

                <div className='insta-item gradient-bg' style={{
                    backgroundImage: 'url(imagess/flash/gallery-03.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}><div className='insta-txt'>
                <i className='fainsta'><FaInstagram /></i>
                <p><a href='#'>@snitch_collection</a></p>
            </div></div>

                <div className='insta-item gradient-bg' style={{
                    backgroundImage: 'url(imagess/flash/gallery-05.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}><div className='insta-txt'>
                <i className='fainsta'><FaInstagram /></i>
                <p><a href='#'>@snitch_collection</a></p>
            </div></div>


                <div className='insta-item gradient-bg' style={{
                    backgroundImage: 'url(imagess/flash/gallery-04.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}><div className='insta-txt'>
                <i className='fainsta'><FaInstagram /></i>
                <p><a href='#'>@snitch_collection</a></p>
            </div></div>


                <div className='insta-item gradient-bg' style={{
                    backgroundImage: 'url(imagess/flash/gallery-06.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}><div className='insta-txt'>
                <i className='fainsta'><FaInstagram /></i>
                <p><a href='#'>@snitch_collection</a></p>
            </div></div>


                <div className='insta-item gradient-bg' style={{
                    backgroundImage: 'url(imagess/flash/gallery-07.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}><div className='insta-txt'>
                <i className='fainsta'><FaInstagram /></i>
                <p><a href='#'>@snitch_collection</a></p>
            </div></div>


        </div>
        </>
    )
}

export default Insta
