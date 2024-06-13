import { useMovieGenerator } from "./useMovieGenerator";
export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();
    console.log("movies", movies);
    const movieElements = movies.map(movie =>
        <div className="movie">
            <h2>{movie.title}</h2>
            <p>Star: {movie.star}</p>
            <p>Genre: {movie.genre}</p>
            <blockquote>{movie.quote}</blockquote>
        </div>
    )

    return (
        <div className="mapPractice">
            <h2>Map Practice 2</h2>
            <button onClick={regenerate}>Change Movies</button>
            <div className="movieList">
                {movieElements}
            </div>
        </div>
    ); 
}
