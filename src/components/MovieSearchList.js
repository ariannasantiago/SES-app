import React, { useEffect, useState } from 'react';
import './MovieSearchList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfoCard2 from './MovieInfoCard2';

function MovieSearchList() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNum, setPageNum] = useState(1);
    const [resultBoolean, setresultBoolean] = useState(true);
    const [error, setError] = useState(null);

    function handleSumbit(e) {
        e.preventDefault();
        setTotalPages(0);
        setPageNum(1);
        fetchMyAPI();
    }

    async function fetchMyAPI () {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const searchParam = encodeURIComponent(query)
        console.log(searchParam);
        const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParam}&type=movie&page=${pageNum}&r=json`;
        console.log(apiURL);
        
        let response = await fetch(apiURL);
        response = await response.json();
        
        console.log(response);

        if (response.Response === "False") {
            setresultBoolean(false, console.log('Results? ', resultBoolean));
            setError(response.Error);
            setPageNum(1);
            setTotalResults(0);
        } 
        else {

            setresultBoolean(true, console.log('Results? ', resultBoolean));

            console.log('Search query response',response['Search']);
            setMovies(response['Search']);

            console.log('response results: ',response.totalResults);
            setTotalResults(response.totalResults, console.log('Total Results: ', totalResults));

            const pages = Math.ceil((response.totalResults)/10);
            setTotalPages(pages, console.log('Total Pages: ', totalPages));

        }

    }

    //2nd if-statement in nextPage and previousPage allows last/first page of results to be fetched and rendered. Used as a "band-aid" fix for render/fetch lag of setState(), not ideal as it re-queries existing information.

    useEffect(() => {
        if(query !== "") {
            fetchMyAPI();
        }
    }, [pageNum]);

    function nextPage() {
        if (pageNum < totalPages) {
            setPageNum(pageNum+1, 
                console.log('next -> current page:', pageNum));
        }


        console.log('next -> current page:', pageNum);

    } 

    //hello

    function previousPage() {
        if (pageNum !== 1) {
            setPageNum(pageNum-1,  
            console.log('prev -> current page',pageNum)
            );
        }


    }




    return (
        <div className="moviesearchlist">
            <section class="hero">
                <form onSubmit={handleSumbit}>
                    <label htmlFor="queryInput">Search:</label>
                    <input
                        id="queryInput"
                        type="text"
                        value={query}
                        onChange={(e => setQuery(e.target.value))}
                        />
                    <button className="search">Submit</button>

                </form>
                

                <div className="pagebuttons">
                    <button onClick={previousPage} style={{marginLeft: "0%"}}>Previous Page</button>
                    <button 
                        onClick={nextPage} style={{marginLeft: "0%"}}>Next Page 
                    </button>
                </div>

                <div>
                    <p>Search Term: {query} <br></br>
                    Total Results Found: {totalResults} Total Pages: {totalPages} Current Page: {pageNum}</p>
                </div>

            </section>  
            <section className = "searchresults" class="d-flex justify-content-around">             
                { resultBoolean ? (
                    <div class="row g-4">                    
                    {/* Below is a test of mapping the search results array to individual objects */}
                        {movies.map(movie => {
                        //movies.TotalResults coult be zero?
                            return(
                        // <li movie={movie} >{movie.Title} {movie.imdbID}</li>
                        
                        <div class="col">
                            <MovieInfoCard2 movie={movie.imdbID} key={movie.imdbID}></MovieInfoCard2>
                        </div>
                                )})}
                    </div>
                    ) : (
                    <div>{error}</div>
                    )
                }
            </section>

                
            

        </div>
    )
}

export default MovieSearchList;