import React, { useEffect, useState } from 'react';
import './MovieInfoCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card from 'react-bootstrap/Card';

function MovieInfoCard(props) {
    //passes imdb id

    const movieID = encodeURIComponent(props.movie);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const NULL_POSTER_ID = process.env.REACT_APP_NULL_POSTER_URL;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [resultBoolean, setresultBoolean] = useState(true);

    const [movieTitle, setMovieTitle] = useState('');
    const [movieRelease, setMovieRelease] = useState(0);
    const [movieRuntime, setMovieRuntime] = useState(0);
    const [movieGenre, setMovieGenre] = useState('');
    const [movieDirector, setMovieDirector] = useState('');
    const [moviePoster, setMoviePoster] = useState('');
    const [movieRating, setMovieRating] = useState(0);

    


    useEffect(() => {
        const apiIdURL = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieID}`;
        //console.log(apiIdURL);

        (async () => {
            await fetch(apiIdURL) 
                .then(res => res.json())
                .then (
                    (response) => {

                        if (response.Response === "False") {
                            setresultBoolean(false);
                            setError(response.Error);
                            setMoviePoster(NULL_POSTER_ID);
                        } else {
                            setMovieTitle(response.Title);
                            setMovieRelease(response.Released);
                            setMovieRuntime(response.Runtime);
                            setMovieGenre(response.Genre);
                            setMovieDirector(response.Director);
                            setMovieRating(response.imdbRating)
                            //console.log(response);
                        }

                        if (response.Poster === 'N/A') {
                            setMoviePoster(NULL_POSTER_ID);
                        } else {
                            setMoviePoster(response.Poster);
                        }
                    }
                )
                .catch(
                    (error) => {
                        setError(error);
                    }
                )
        } ) ()
        
        setIsLoaded(true);
        
    }, [movieID])

    //need to figure out how to trigger a conditional render with "loading" messages.
    return (
        <div class="card h-100 " style = {{ width: '14rem'}}>
            <div><Card.Img variant ="top" src={moviePoster}></Card.Img></div>
                { isLoaded ? ( //movie done loading
                    <div>
                        { resultBoolean ? (//valid movie returned
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
                        ) : ( //invalid movie
                            <Card.Body>
                                <Card.Title>Error</Card.Title>
                                <Card.Text>{error}</Card.Text>
                            </Card.Body>
                            ) }
                        
                    </div>


                ) : ( //movie not done
                    <Card.Body>
                        <Card.Title>Title Loading</Card.Title>
                        <Card.Subtitle className="mb-s text-muted">loading...</Card.Subtitle>
                        <Card.Text>
                            <p>
                                Details loading...
                            </p>
                        </Card.Text>
                    </Card.Body>
                 ) }
                
        </div>
            
    ) 
}

export default MovieInfoCard;