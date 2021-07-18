import React,{useEffect, useState} from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import MovieService from '../services/movie.Service';
import MovieDetails from './movieDetails';
import MovieModal from './movieModal';
import MovieSearch from './movieSearch';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState();
    const [movieDetails, setMovieDetails] = useState([]);
    const [movieTitle, setMovieTitle] = useState();
    const [movieType, setMovieType] = useState();
    const movieService = new MovieService();
    // const movies = [{"Title":"Alien","Year":"1979","imdbID":"tt0078748","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"Alien³","Year":"1992","imdbID":"tt0103644","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTNiYmQzNTctNzAyZC00ODY2LWE3ZjgtODU1NDA0NGI5ZDY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Alien: Covenant","Year":"2017","imdbID":"tt2316204","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzVkMjRhNzctOGQxMC00OGE2LWJhN2EtNmYyODRiMDNlM2ZmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Alien: Resurrection","Year":"1997","imdbID":"tt0118583","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDljNGZkNmItNDlmMi00YzJhLWJiYWUtNGY4OGEwNmY0ODg4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Alien vs. Predator","Year":"2004","imdbID":"tt0370263","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU4MjIwMTcyMl5BMl5BanBnXkFtZTYwMTYwNDA3._V1_SX300.jpg"},{"Title":"My Stepmother Is an Alien","Year":"1988","imdbID":"tt0095687","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzhiMjRlMDEtYzYwNi00MzY5LTlmZDgtOTM2ZDBjN2Y2N2FlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg"},{"Title":"Resident Alien","Year":"2021–","imdbID":"tt8690918","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BYTFkNDFhZGEtZjA2Ni00M2Q4LWFlMWEtZGFhMmM0MWJkNDQ0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"},{"Title":"Alien Nation","Year":"1988","imdbID":"tt0094631","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjRlYjI2NWUtMmY5Mi00YTcyLTg5MzUtNTE2ZmRiMzNjYjA0XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"},{"Title":"Alien Raiders","Year":"2008","imdbID":"tt0996979","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZjRkMDY3NDAtYjQ3Zi00ZmJhLWJiOWEtNzc5NTllMjM3ZmY1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Alien Abduction","Year":"2014","imdbID":"tt2510434","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxMjUwMTU1Nl5BMl5BanBnXkFtZTgwOTI4NjMzMTE@._V1_SX300.jpg"}];
    
    async function callMovieServiceByTitle(title, type){
        const movies = await movieService.getMoviesByTitle(title, type);
        setMovies(movies.Search);
    }

    async function callMovieServiceByID(id){
        const movie = await movieService.getMoviesByID(id);
        console.log(movie);
        setMovieDetails(movie);
    }

    useEffect(() => {
        callMovieServiceByTitle(movieTitle, movieType);
    },[movieTitle, movieType]);

    const showMovie = (index, id) => {
        callMovieServiceByID(id);
        if (index === show )return setShow(null);
        setShow(index);
    }

    const movieList = () => (
        movies.map((movie, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
                <img src={movie.Poster} alt={`${movie.Title} poster`} style={{maxWidth:'100%'}}/>
                <p>{movie.Title}</p>
                <button onClick={() => showMovie(index, movie.imdbID)}>
                    {index === show ? "Hide Movie" : "Show Movie"}
                </button>
                    {index === show && 
                        <MovieModal show={show} onClose={setShow} children={<MovieDetails movie={movieDetails} />} />
                    }
            </div>
        ))
    )

    return (
        <div className="MovieList container">
            <h1>Movie List</h1>
            <MovieSearch setMovieTitle={setMovieTitle} setMovieType={setMovieType}/>
            <div className="row">
                { movies &&
                    movieList()
                }
            </div>
        </div>
    );
}

export default MovieList;