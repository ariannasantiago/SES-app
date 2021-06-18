import React, { useEffect, useState } from 'react';
import './MovieInfoCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card from 'react-bootstrap/Card';

function MovieInfoCard2(props) {
    //passes imdb id

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

    const [movieTitle, setMovieTitle] = useState('');
    const [movieRelease, setMovieRelease] = useState(0);
    const [movieRuntime, setMovieRuntime] = useState(0);
    const [movieGenre, setMovieGenre] = useState('');
    const [movieDirector, setMovieDirector] = useState('');
    const [moviePoster, setMoviePoster] = useState('');
    const [movieRating, setMovieRating] = useState(0);

    const movieID = encodeURIComponent(props.movie);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const NULL_POSTER_ID = process.env.REACT_APP_NULL_POSTER_URL;


    useEffect(() => {
        const apiIdURL = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}`;
        console.log(apiIdURL);

        (async () => {
            await fetch(apiIdURL) 
                .then(res => res.json())
                .then (
                    (response) => {
                        setMovieTitle(response.Title);
                        setMovieRelease(response.Released);
                        setMovieRuntime(response.Runtime);
                        setMovieGenre(response.Genre);
                        setMovieDirector(response.Director);
                        setMovieRating(response.imdbRating)
                        console.log(response);

                        if (response.Poster === 'N/A') {
                            setMoviePoster(NULL_POSTER_ID);
                        } else {
                            setMoviePoster(response.Poster);
                        }
                    }
                )
                .catch(
                    (error) => {
                        setIsLoaded(false);
                        setError(error);
                    }
                )
        } ) ()
        
    }, [movieID])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {

        return (

            <div class="card h-100 " style = {{ width: '14rem'}}>
                    <div><Card.Img variant ="top" src={moviePoster}></Card.Img></div>
                    <Card.Body>
                        <Card.Title>{movieTitle}</Card.Title>
                        <Card.Subtitle className="mb-s text-muted">{movieRelease}</Card.Subtitle>
                        <Card.Text>
                           <p>
                                Runtime: {movieRuntime}<br></br>
                                Genre: {movieGenre}<br></br>
                                Director: {movieDirector}<br></br>
                                Rating: {movieRating}<br></br>
                            </p>
                       </Card.Text>
                   </Card.Body>
            </div>
            
        ) 
    }
}

export default MovieInfoCard2;