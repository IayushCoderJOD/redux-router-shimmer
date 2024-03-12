import React, { useEffect, useState } from 'react'
import ShimmerUi from '../reusableComponents/ShimmerUi';

const HomePage = () => {

    const [showShimmer, setShowShimmer] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowShimmer(true)
        }, 2000)
    }, [])
    return (
        <>
            <div className="flex flex-wrap cursor-pointer" >
                {
                    showShimmer ? (
                        <>
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                            <ShimmerUi />
                        </>
                    ) : (
                        <>

                            <div className='text-3xl font-semibold font-serif flex justify-center' >Hii there....</div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default HomePage