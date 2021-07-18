import React from 'react';

function MovieDetails({movie}) {

  return (
    <div className="row">
        <div className="col-md-6">
            <img src={movie.Poster} alt={`${movie.Title} poster`} style={{maxWidth:"100%"}}></img>
        </div>
        <div className="col-md-6 text-left">
            <p>{movie.Title}</p>
            <p>{movie.imdbRating}</p>
            <p>{movie.Rated}</p>
            <p>{movie.Runtime}</p>
            <p>{movie.Genre}</p>
            <p><strong>Plot</strong><br />{movie.Plot}</p>
            <p><strong>Actors</strong><br />{movie.Actors}</p>
        </div>
    </div>
  );
}

export default MovieDetails;