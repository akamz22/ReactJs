// import React from 'react'

// const Shimmer = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
//   return (
//     <>
//       <div className='rounded-md'>
//         <p className='my-[10px] rounded-md  mr-[30rem] ml-[30rem] h-12 animate-pulse bg-gray-200'>
//         </p>
//       </div>
//       <div className='flex w-[70%] flex-wrap items-center justify-center ml-64'>
//         {
//           Array(15).fill("").map((e, index) => (
//             <div key={index}>
//               <div key={index} className='m-2 p-2 h-80 w-56 animate-pulse bg-gray-200'>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </>
//   )
// }

// export default Shimmer

import React from 'react';

const Shimmer = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <>
      <div className='rounded-md'>
        <p className='my-[10px] rounded-md h-12 animate-pulse bg-gray-200 sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xl:w-[60rem] 2xl:w-[70rem] mx-auto'></p>
      </div>
      <div className='flex flex-wrap items-center justify-center mx-auto'>
        {Array(15)
          .fill('')
          .map((e, index) => (
            <div key={index} className='m-2 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 animate-pulse bg-gray-200'>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
