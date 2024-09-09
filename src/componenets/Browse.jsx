import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useHorrorMovies from '../hooks/useHrrorMovies';


const Browse = () => {
  useNowPlayingMovies();  
  usePopularMovies();
  useTrendingMovies();
  useHorrorMovies();
  // UseBollywood();


  return (
    <div  className='bg-black text-white'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {
        /*
        MainContainer
         - videoBackground
         -video title
        SecondaryCOntainer
          -movielist * n
          -card * n
        */
      }



    </div>
  )
}

export default Browse