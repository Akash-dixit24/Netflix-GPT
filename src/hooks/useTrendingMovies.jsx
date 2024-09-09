import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTrendingMovies = () =>{
       const dispatch = useDispatch()


       const getTrendingMovies = async() =>{
         const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" ,
           API_OPTIONS
         )
         const json = await data.json()
         dispatch(addTrendingMovies(json.results))
       }
     
     
       useEffect(() => {
              getTrendingMovies()
       }, [])
     
     
}

export default useTrendingMovies
