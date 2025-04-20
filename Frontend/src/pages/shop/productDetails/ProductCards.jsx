import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../../../components/RatingStars'
import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/features/cart/cartSlice"
import { useFetchAllProductsQuery } from '../../../redux/features/products/productsApi'

const ProductCards = ({ products: propProducts }) => {
    const dispatch = useDispatch();

    // Fetch products from API only if no products are passed as props
    const { data: apiProducts, error, isLoading } = useFetchAllProductsQuery({});
    const products = propProducts || apiProducts?.products || [];

    const handleAddToCart = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToCart(product))
    }

    if (isLoading && !propProducts) return <p>Loading products...</p>;
    if (error && !propProducts) return <p>Error loading products.</p>;

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {products.map((product) => (
                <Link
                    to={`/shop/${product._id}`}
                    key={product._id}
                    className="product__card block"
                >
                    <div className="relative">
                        <img
                            src={product.image}
                            alt={product.name}
                            className='max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300'
                        />
                        <div className="hover:block absolute top-3 right-3">
                            <button onClick={(e) => handleAddToCart(product, e)}>
                                <i className="ri-shopping-cart-line bg-[red] !p-1.5 text-white hover:bg-[#fa7676]"></i>
                            </button>
                        </div>
                    </div>
                    <div className="product__card__content">
                        <h4>{product.name}</h4>
                        <p>
                            ${product.price}
                            {product.oldPrice && <s>${product.oldPrice}</s>}
                        </p>
                        <RatingStars rating={product.rating} />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductCards