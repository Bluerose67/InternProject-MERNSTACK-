import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from "../../assets/header.png"

const Banner = () => {
    return (
        <div className='section__container header__container'>
            <div className="header__content z-30">
                <h4 className='uppercase'>UP TO 20% Discount on</h4>
                <h1>Fashion</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quo doloremque alias veritatis, voluptatibus labore culpa minima pariatur quia, dolorem ullam nobis eum repellendus in molestias nesciunt dicta! Molestias, quis.

                </p>
                <button className='btn'>
                    <Link to="/shop"> Explore Now</Link>
                </button>
            </div>

            <div className="header__image">
                <img src={bannerImg} alt="BannerImg" />
            </div>
        </div>
    )
}

export default Banner
