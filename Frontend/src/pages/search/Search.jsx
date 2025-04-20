import React, { useState } from 'react'
import ProductCards from '../shop/productDetails/ProductCards'
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const { data: allProducts, isLoading, error } = useFetchAllProductsQuery({});
    const [filteredProducts, setFilteredProducts] = useState([])

    const handleSearch = () => {
        if (!allProducts?.products) return;

        const query = searchQuery.toLowerCase()
        const filtered = allProducts.products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        )
        setFilteredProducts(filtered)
    }

    return (
        <>
            <section className='section__container bg-[#f4e5ec]'>
                <h2 className='section__header capitalize'>Search Products</h2>
                <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>

            <section className='section__container'>
                <div className="w-full !mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
                    <input
                        type="text"
                        placeholder='Search for Products...'
                        value={searchQuery}
                        className='search-bar w-full max-w-4xl !p-2 border rounded'
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button
                        onClick={handleSearch}
                        className='search-button w-full md:w-auto !py-2 !px-8 bg-[#ed3849] text-white rounded'
                    >
                        Search
                    </button>
                </div>

                {searchQuery ? (
                    <ProductCards products={filteredProducts} />
                ) : (
                    <ProductCards />
                )}
            </section>
        </>
    )
}

export default Search