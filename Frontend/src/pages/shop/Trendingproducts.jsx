import React from 'react'
import ProductCards from './ProductCards'
import { useState } from 'react'
import products from "../../data/products.json"

const Trendingproducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }


    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>
                Trending Products
            </h2>
            <p className='section__subheader !mb-12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quis soluta fugiat, dicta molestias odio voluptate perspiciatis esse! Quasi magnam quam saepe deleniti temporibus esse commodi enim est cum voluptatibus?
            </p>

            <ProductCards products={products.slice(0, visibleProducts)} />

            <div className="product__btn">
                {
                    visibleProducts < products.length && (
                        <button className='btn' onClick={loadMoreProducts}>
                            Load More
                        </button>
                    )
                }
            </div>

        </section>
    )
}

export default Trendingproducts
