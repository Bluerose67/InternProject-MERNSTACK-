import React from 'react'
import instaImg1 from "../assets/instagram-1.jpg"
import instaImg2 from "../assets/instagram-2.jpg"
import instaImg3 from "../assets/instagram-3.jpg"
import instaImg4 from "../assets/instagram-4.jpg"
import instaImg5 from "../assets/instagram-5.jpg"
import instaImg6 from "../assets/instagram-6.jpg"

const Footer = () => {
    return (
        <>
            <footer id="contact" className='section__container footer__container'>
                <div className="footer__col">
                    <h4>CONTACT INFO</h4>
                    <p>
                        <span>< i className="ri-map-pin-line"></i></span>
                        403 Stadium Dr, Tallahassee, FL 32304, United States
                    </p>
                    <p>
                        <span>< i className="ri-mail-line"></i></span>
                        dupport@absc.com
                    </p>
                    <p>
                        <span>< i className="ri-phone-fill"></i></span>
                        +987 987-654-3210
                    </p>
                </div>

                <div className="footer__col">
                    <h4>COMPANY</h4>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Work with us </a>
                    <a href="/"> Our Blogs </a>
                    <a href="/"> Terms & Conditions </a>
                </div>

                <div className="footer__col">
                    <h4>Usefull Links</h4>
                    <a href="/">Help</a>
                    <a href="/">Track Your Order</a>
                    <a href="/">Men</a>
                    <a href="/">Women</a>
                    <a href="/">Dresses</a>
                </div>

                <div className="footer__col">
                    <h4>Instagram</h4>
                    <div className="instagram__grid">
                        <img src={instaImg1} alt="" />
                        <img src={instaImg2} alt="" />
                        <img src={instaImg3} alt="" />
                        <img src={instaImg4} alt="" />
                        <img src={instaImg5} alt="" />
                        <img src={instaImg6} alt="" />
                    </div>
                </div>
            </footer>

            <div className="footer__bar">
                Copyright < i className="ri-copyright-line"></i> 2025.
                All Rights Reserved
            </div>
        </>
    )
}

export default Footer
