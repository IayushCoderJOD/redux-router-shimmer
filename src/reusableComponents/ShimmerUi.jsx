import React from 'react'

const ShimmerUi = () => {
    return (
        <div  >
            <div className='bg-gray-300 rounded-xl  h-72 m-5 p-5 w-64'>
                <ul>
                    <li className='bg-gray-400 rounded-md h-6'></li>
                    <li className='bg-gray-400 rounded-md h-44 mt-3'></li>
                    <li className='flex justify-between'>
                        <li className='bg-gray-400 rounded-md h-8 w-12 mt-3'></li>
                        <li className='bg-gray-400 rounded-md h-8 w-12 mt-3'></li>
                        <li className='bg-gray-400 rounded-md h-8 w-12 mt-3'></li>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default ShimmerUi