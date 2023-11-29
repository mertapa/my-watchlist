import React, { useState } from 'react'
import ResultCart from './ResultCart';

const Add = () => {

  const [results, setResults] = useState([]);
 const[Quary, setQuary] = useState("");

function onChange(e) {
  setQuary(e.target.value);

  fetch(`
  https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${e.target.value}`)
    .then((res) => res.json())
    .then((data) => setResults(data.results));
  }
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" alt="" />
          <div className="titles">
            <h1>Welcome</h1>
            <h2>You can add movies to watchlist</h2>
          </div>
          <div className="input-wrapper">
            <input type="text" value={Quary} onChange={onChange} placeholder='Film,Dizi,Kisi Ara...' />
          </div>
          {
            results.length > 0 &&(
              <ul className='results'>
                {results.map((movie) => (
                  <li key={movie.id}>
                  <ResultCart movie={movie} />  
                  </li>
                ))}
              </ul>
            )}
        </div>
       
      </div>
    </div>
  )
}

export default Add
