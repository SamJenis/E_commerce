import React from 'react'
import './Aboutus.css'

const Aboutus = () => {
    return (
        <>
        
        <div className='AbtUs'><h1>About Us</h1></div>
        <div className='line'></div>

            <div class="responsive-container-block bigContainer">
                <div class="responsive-container-block Container bottomContainer">
                    <div class="ultimateImg">
                        <img class="mainImg" src="./imagess/flash/blog-03.jpg" />
                        <div class="purpleBox">
                            <p class="purpleText">
                            Embracing change and staying ahead of the curve, we are committed to offering you the latest and most innovative products the market has to offer.
                            </p>
                        </div>
                    </div>
                    <div class="allText bottomText">
                        <p class="text-blk headingText">
                            Our Story
                        </p>
                        <p class="text-blk subHeadingText">
                            Where Fashion comes to Life.
                        </p>
                        <p class="text-blk description">
                        Welcome to Snitch, where style meets convenience. Founded in 2023, we're dedicated to curating a collection of high-quality products that enhance your lifestyle. Our focus on quality, innovation, and customer satisfaction sets us apart. Join us on this journey—happy shopping!
                        </p>
                        <a class="explore">
                            View Services
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutus