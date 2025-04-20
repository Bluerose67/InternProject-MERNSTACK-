import React from 'react'
import Banner from './banner'
import Category from './Category'
import HeroSection from './HeroSection'
import Trendingproducts from '../shop/productDetails/Trendingproducts'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import Blogs from '../blogs/Blogs'

const Home = () => {
    return (
        <>
            <Banner />
            <Category />
            <HeroSection />
            <Trendingproducts />
            <PromoBanner />
            <Blogs />
        </>
    )
}

export default Home
