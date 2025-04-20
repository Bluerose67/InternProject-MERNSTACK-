import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ProductCards from '../shop/productDetails/ProductCards'
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi'

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Fetch all products from the API
    const { data: allProducts, isLoading, error } = useFetchAllProductsQuery({});

    useEffect(() => {
        if (allProducts?.products) {
            const filtered = allProducts.products.filter((product) =>
                product.category.toLowerCase() === categoryName.toLowerCase()
            );
            setFilteredProducts(filtered);
        }
    }, [categoryName, allProducts])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products.</p>;

    return (
        <>
            <section className='section__container bg-[#f4e5ec]'>
                <h2 className='section__header capitalize'>
                    {categoryName}
                </h2>
                <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>

            <div className='section__container'>
                {filteredProducts.length > 0 ? (
                    <ProductCards products={filteredProducts} />
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </>
    )
}

export default CategoryPage