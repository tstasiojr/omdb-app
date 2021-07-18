import React from 'react';

class MovieService extends React.Component{
    
    async getMoviesByTitle(title) {
        const myApiKey = 'f10e3780';
        const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${myApiKey}`);
        return response.json();
    }

    async getMoviesByID(id) {
        const myApiKey = 'f10e3780';
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${myApiKey}`);
        return response.json();
    }
}


export default MovieService;