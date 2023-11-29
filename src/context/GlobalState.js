import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

//!crete context
export const GlobalContext = createContext();



const initialState = {
  watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
 
  watched:localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};

//! provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);




  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWachlist = (id) =>{
    dispatch({type: "REMOVE_MOVIE_TO_WATCHLIST", payload: id})
  }
  const addMovieToWatched = (movie)=>{
    dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})
  }
  const moveToWatchlist = (movie)=>{
    dispatch({type: "MOVE_TO_WATCHED", payload: movie})
  }
  const RemoveToWatchlist = (movie)=>{
    dispatch({type: "REMOVE_TO_WATCHED", payload: movie})
  }
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWachlist,
        addMovieToWatched,
        moveToWatchlist,
        RemoveToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
