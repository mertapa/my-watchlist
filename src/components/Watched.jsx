import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-Page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched</h1>
        </div>

        {watched.length > 0 &&(
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard type="watched" movie={movie} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Watched;
