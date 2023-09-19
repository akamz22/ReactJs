import React from 'react'

const Shimmer = () => {
    return (
        <>

            <div>
                <p className='my-[10px] mt-5 mr-80 ml-96 h-24 animate-pulse bg-gray-200'>
                </p>
            </div>
            <div>
                <p className='my-[10px] mt-5 mr-80 ml-96 h-20 animate-pulse bg-gray-200'>
                </p>
            </div>
            <div className='flex w-[70%] flex-wrap items-center justify-center ml-64'>
                {
                    Array(30).fill("").map((e, index) => (
                        <div>
                            <div key={index} className='m-2 p-2 h-20 w-[50rem] animate-pulse bg-gray-200'>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Shimmer