import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return ( movies.nowPlayingMovies && (
    <div className='-mt-54 relative z-20'>
      <MovieList title ={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title ={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title ={"Upcoming"} movies={movies.trendingMovies}/>
      <MovieList title ={"Top Rated"} movies={movies.hrrorMovies}/>
      {/* <MovieList title ={"Bollywood"} movies={movies.bollywoodMovies}/> */}



      {
        /*
          Movie Popular
            card*n
          Movie nowplaying
          Movie trending
          Movie hrror
        */
      }
    </div>
  ) 
  )
}

export default SecondaryContainer