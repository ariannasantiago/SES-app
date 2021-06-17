import React, { useState } from 'react';
import './MovieInfoCard.css';
import { Card } from 'react-bootstrap';

function MovieInfoCard(props) {
    //passes imdb id

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState(0);
    const [movieRuntime, setMovieRuntime] = useState(0);
    const [movieGenre, setMovieGenre] = useState('');
    const [movieDirector, setMovieDirector] = useState('');
    const [moviePoster, setMoviePoster] = useState('')


    async function fetchMyAPI() {
        // console.log(props.movie);
        const movieID = encodeURIComponent(props.movie);
        // console.log(movieID);
        const apiIdURL = `https://www.omdbapi.com/?apikey=1843b4ac&i=${movieID}`;
        console.log(apiIdURL);
        let response = await fetch(apiIdURL);
        response = await response.json();

        const movieInfo = response;
        console.log('const movieInfo: ', movieInfo);

        setMovieTitle(movieInfo.Title);
        setMovieYear(movieInfo.Year);
        setMovieRuntime(movieInfo.Runtime);
        setMovieGenre(movieInfo.Genre);
        setMovieDirector(movieInfo.Director);

        if (movieInfo.Poster === 'N/A') {
            setMoviePoster(null);
        } else {
            setMoviePoster(movieInfo.Poster);
        }

    }
    fetchMyAPI();

    // console.log(
    //     movieTitle,
    //     movieYear,
    //     movieRuntime,
    //     movieGenre,
    //     movieDirector,
    //     moviePoster
    // )

    return (
        // <div>
        // <li movie={movieData}>map: {movie.Title} {movie.imdbID}</li>
        // <li movie={movieObj}>obj: {movie.Title} {movie.imdbID}</li>
        // </div>

        <div>
            {/* {movieTitle},
        {movieYear},
        {movieRuntime},
        {movieGenre},
        {movieDirector},
        {moviePoster} */}

            <Card style = {{ width: '18rem'}}>
                <Card.Img variant ="top" src={moviePoster}></Card.Img>
                <Card.Body>
                    <Card.Title>{movieTitle}</Card.Title>
                    <Card.Text>
                        <p>Release Date: {movieYear} </p>
                        <p>Director: {movieDirector}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieInfoCard;