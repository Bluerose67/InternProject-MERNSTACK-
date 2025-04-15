import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../../redux/features/cart/cartSlice'

const OrderSummary = () => {
    const dispatch = useDispatch()
    const products = useSelector((store) => store.cart.products)
    const { tax, taxRate, totalPrice, grandTotal, selectedItems } = useSelector((store) =>
        store.cart)
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className='bg-[#f4e5ec] !mt-5 rounded text-base'>
            <div className="!px-6 !py-4 !space-y-5">
                <h2 className='text-xl text-[#0f172a]'>Order Summary</h2>
                <p className='text-[#0f172a] !mt-2'>Selected Items: {selectedItems}</p>
                <p className='text-[#0f172a] !mt-2'>Total Price: ${totalPrice.toFixed(2)}</p>
                <p className='text-[#0f172a] !mt-2'>Tax ({taxRate * 100}%): ${tax.toFixed(2)}</p>
                <h3 className='font-bold'>Grand Total: ${grandTotal.toFixed(2)}</h3>
                <div className='!px-4 !mb-6'>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            handleClearCart()
                        }}
                        className='bg-red-500 !px-3 !py-1.5 text-white
                    !mt-2 rounded-md flex justify-between items-center !mb-4'>
                        <span className='!mr-2'>Clear Cart</span>
                        <i className="ri-delete-bin-7-line"></i>
                    </button>
                    <button className='bg-green-600 !px-3 !py-1.5 text-white
                    !mt-2 rounded-md flex justify-between items-center !mb-4'>
                        <span className='!mr-2'>Procced Checkout</span>
                        <i className="ri-bank-card-line"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
