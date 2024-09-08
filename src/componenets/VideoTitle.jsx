import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-zinc-300 w-screen aspect-video bg-gradient-to-r from-black'>
       <h1 className='text-7xl font-semibold'>{title}</h1>
       <p className='text-xl  py-6 w-1/3'>{overview}</p>
       <div className=''>
              <button className='bg-red-600 text-white  p-1 px-3 text-lg rounded-md mr-2 hover:bg-opacity-75 '>
              <i className="ri-play-large-fill"></i> Play 
              </button>
              <button className='bg-gray-700 text-white  p-1 px-2 text-lg rounded-md bg-opacity-65 hover:bg-opacity-75 '>
              <i className="ri-information-line"></i> More Info 
              </button>
              
       </div> 
    </div>
  )
}

export default VideoTitle