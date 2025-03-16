import React from 'react'

const ShopPage = () => {
    return (
        <>
            <section className='section__container bg-[#f4e5ec]'>
                <h2 className='section__header capitalize'>
                    Shop Page
                </h2>
                <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </section>

            <section className='section__container'>
                <div className="flex flex-col md:flex-row md:gap-12 gap-8">
                    <div className="">Shop Filtering</div>
                    <div className="">
                        <h3 className='text-xl font-medium !mb-4'>Available Products</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopPage
