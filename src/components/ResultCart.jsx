import React from "react"
import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react";

const ResultCart = ({movie}) => {
    const {watched, watchlist ,addMovieToWatchlist,addMovieToWatched} = useContext(GlobalContext);
    const  storedMovie = watchlist.find((e) => e.id === movie.id );
    const  storedMovieWatced = watched.find((e) => e.id === movie.id );
  return (
    <div className="result-card">
        <div className="poster-wrapper">
           {movie.poster_path ? (
             <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
           ):(
            <div className="filler-poster"></div>
           )}
        </div>
        <div className="info">
            <div className="header">
                <h3 className="title">{movie.title}</h3>
                <h4 className="release-date">{movie.release_date ? movie.release_date.substring(0,4): "Relase date not founded" }</h4>
                <h4 className="release-date">
                    IMDB: <b>{movie.vote_average ? movie.vote_average : "IMDB Not found"}</b>
                </h4>
            </div>
            <div className="controls">
            <button className="btn" onClick={() => addMovieToWatchlist(movie)} disabled={storedMovie}>  Add to Watchlist </button>
            
            <button className="btn" onClick={() => addMovieToWatched(movie)} disabled={storedMovieWatced}>  Add to Watched </button>
            </div>
        </div>
    </div>
  )
}

export default ResultCart
