const MovieSearch = ({setMovieTitle, setMovieType}) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[1].value);
        setMovieTitle(event.target[0].value);
        setMovieType(event.target[1].value || "movie")
    };

    return (
        <div>
            <form onSubmit={
                (event) => onFormSubmit(event)
            }>
                <input type="text" name="movieTitle" placeholder="Enter Movie, Series, Episode Name..."/>
                <select name="movieType">
                    <option value="" disabled>Type</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default MovieSearch;