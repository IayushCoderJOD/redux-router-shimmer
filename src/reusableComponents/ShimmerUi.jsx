import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, increaseItems, removeItems } from '../slices/CartSlice';

const ShimmerUi = () => {

    const cartItems = useSelector(store => store.cart.items_count)
    const dispatch = useDispatch();
    const handleAdding = () => {
        dispatch(increaseItems())
    }
    const handleRemoving = () => {
        dispatch(removeItems())
    }
    const handleClear = () => {
        dispatch(clearCart())
    }


    return (
        <div  >
            <div className={` bg-gray-300 rounded-xl  h-72 m-5 p-5 w-64`}>
                <ul>
                    <li className='bg-gray-400 rounded-md h-6'></li>
                    <li className='bg-gray-400 rounded-md h-44 mt-3'></li>
                    <li className='flex justify-between'>
                        <button onClick={handleAdding} className='bg-green-700 text-white m-2 items-center align-middle p-2 rounded-md h-8 w-12 mt-3'>Add</button>
                        <button onClick={handleRemoving} className='bg-blue-700 text-white m-2 items-center align-middle p-2 rounded-md h-8 w-12 mt-3'>Rem</button>
                        <button onClick={handleClear} className='bg-red-700 text-white m-2 items-center align-middle p-2 rounded-md h-8 w-12 mt-3'>Clear</button>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default ShimmerUi