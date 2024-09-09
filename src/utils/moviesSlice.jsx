import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
       name : "movies",
       initialState : {
              nowPlayingMovies : null,
              trailerVideo :null,
              popularMovies : null,
              trendingMovies :null,
              hrrorMovies :null,
              // bollywoodMovies:null
       },
       reducers : {
              addNowPlayingMovies : (state , action ) =>{
                     state.nowPlayingMovies = action.payload
              }, 
              addPopularMovies : (state , action ) =>{
                     state.popularMovies = action.payload
              }, 
              addHrrorMovies : (state , action ) =>{
                     state.hrrorMovies = action.payload
              }, 
               addTrailerVideo : (state , action) => {
                     state.trailerVideo = action.payload

               },
               addTrendingMovies : (state , action )=>{
                     state.trendingMovies = action.payload
               },
              //  addBollywoodMovies : (state , action )=>{
              //        state.trendingMovies = action.payload
              //  },



       }
});

export const {addNowPlayingMovies,addHrrorMovies , addTrailerVideo,addTrendingMovies , addPopularMovies  } = movieSlice.actions;


export default movieSlice.reducer;