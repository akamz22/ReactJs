import React from 'react'

const Shimmer = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  return (
    <>
      <div className='rounded-md'>
        <p className='my-[10px] rounded-md  mr-[30rem] ml-[30rem] h-12 animate-pulse bg-gray-200'>
        </p>
      </div>
      <div className='flex w-[70%] flex-wrap items-center justify-center ml-64'>
        {
          Array(15).fill("").map((e, index) => (
            <div key={index}>
              <div key={index} className='m-2 p-2 h-80 w-56 animate-pulse bg-gray-200'>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Shimmer