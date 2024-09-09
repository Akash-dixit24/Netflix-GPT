import { useDispatch } from "react-redux";
import { addHrrorMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useHrrorMovies = () =>{
       const dispatch = useDispatch()


       const getHrrorMovies= async() =>{
         const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1" ,
           API_OPTIONS
         )
         const json = await data.json();
         dispatch(addHrrorMovies(json.results))
       }
     
     
       useEffect(() => {
              getHrrorMovies()
       }, [])
     
     
}

export default useHrrorMovies





