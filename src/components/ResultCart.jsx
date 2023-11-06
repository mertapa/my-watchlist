import React from "react"

const ResultCart = ({movie}) => {
    console.log(movie);
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
            <button className="btn">  Add to Watchlist </button>
            
            <button className="btn">  Add to Watched </button>
            </div>
        </div>
    </div>
  )
}

export default ResultCart
