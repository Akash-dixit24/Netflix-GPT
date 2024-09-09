// import { useDispatch } from "react-redux";
// import { addBollywoodMovies } from "../utils/moviesSlice";
// import { API_OPTIONS,API_CODE } from "../utils/constants";
// import { useEffect } from "react";

// const UseBollywood = () =>{
//        const dispatch = useDispatch()


//        const getBollywoodMovies = async() =>{
//          const data =  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_CODE}&with_genres=10752`,API_OPTIONS);
         
//          const json = await data.json();
//          dispatch(addBollywoodMovies(json.results))
//        }
     
     
//        useEffect(() => {
//               getPopularMovies()
//        }, [])
     
     
// }

// export default UseBollywood


