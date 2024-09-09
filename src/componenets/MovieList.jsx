import React from 'react'
import MoviesCard from './MovieCard'

const MovieList = ({title , movies}) => {
 
  return (
    <div className=''>
     <h1 className='text-3xl font-semibold py-5 pl-5'>{title}</h1>
      <div className='flex overflow-x-scroll  '>
          <div className='flex pl-5'>
          {movies?.map(movie =><MoviesCard key={movie.id} poster={movie.poster_path }/>)}
          </div>
      </div> 
    </div>
  )
}

export default MovieList