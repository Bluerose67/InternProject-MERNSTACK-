import React from 'react'
import dealsImg from "../../assets/deals.png"

const DealsSection = () => {
    return (
        <section className='section__container deals__container'>
            <div className="deals__image">
                <img src={dealsImg} alt="" />
            </div>

            <div className="deals__content">
                <h5>Get up to 20% discount</h5>
                <h4>Deals of the Month</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis quisquam sapiente adipisci exercitationem quod voluptas quibusdam, explicabo excepturi optio accusamus a perferendis. Odio accusamus possimus dolorem obcaecati commodi esse.</p>

                <div className="deals__countdown felx-wrap">
                    <div className="deals__countdown__card">
                        <h4>14</h4>
                        <p>Days</p>
                    </div>
                    <div className="deals__countdown__card">
                        <h4>12</h4>
                        <p>Hours</p>
                    </div>
                    <div className="deals__countdown__card">
                        <h4>20</h4>
                        <p>Min</p>
                    </div>
                    <div className="deals__countdown__card">
                        <h4>40</h4>
                        <p>Sec</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DealsSection
