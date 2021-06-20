import React, { useEffect, useState } from 'react';
import './MovieSearchList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfoCard from './MovieInfoCard';

function MovieSearchList() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNum, setPageNum] = useState(1);
    const [resultBoolean, setresultBoolean] = useState(false);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);

    function handleSumbit(e) {
        e.preventDefault();
        setTotalPages(0);
        setPageNum(1);
        fetchMyAPI();
    }

    async function fetchMyAPI() {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const searchParam = encodeURIComponent(query)
        const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParam}&type=movie&page=${pageNum}&r=json`
        //console.log(searchParam);
        //console.log(apiURL);
        
        let response = await fetch(apiURL);
        response = await response.json();
        
        //console.log(response);
        
        //if fetch unsuccessful
        if (response.Response === "False") {
            setresultBoolean(false);
            setError(response.Error);
            setPageNum(1);
            setTotalResults(0);
            //console.log('Results? ', resultBoolean)
        } 
        //successful fetch triggered by "load more"; set loading false when finished
        else if (loading) {
            console.log("loading brand triggered");
            setMovies([...movies, ...response['Search']]);
            setLoading(false, console.log('loading false'));
        }
        //successful fetch triggered by search or pagination
        else {

            setresultBoolean(true);
            setMovies(response['Search']);
            setTotalResults(response.totalResults);
            const pages = Math.ceil((response.totalResults)/10);
            setTotalPages(pages);

            // console.log('Results? ', resultBoolean);
            // console.log('Search query response', movies);
            // console.log('response results: ', totalResults);
            // console.log('Total Pages: ', totalPages);

        }

    }


    //ensure immediate re-rendering and that API only queried once; dependent on updating pageNum
    useEffect(() => {
        if(query !== "") {
            fetchMyAPI();
        }
    }, [pageNum]);


    //Pagination Functions: only update pageNum if possible; re-render triggered by useEffect
    function nextPage() {
        if (pageNum < totalPages) {
            setPageNum(pageNum+1); 
            //console.log('next -> current page:', pageNum));
        }
    } 

    function previousPage() {
        if (pageNum !== 1) {
            setPageNum(pageNum-1,  
            //console.log('prev -> current page', pageNum);
            );
        }
    }

    function loadMore() {
        if (pageNum < totalPages) {
            //console.log("load more clicked");
            setLoading(true); //sets Loading true so button text changes
            setPageNum(pageNum+1);
        }
    }


    return (
        <div className="moviesearchlist">
            <div class="searchform">

                <form onSubmit={handleSumbit}>
                    {/* (query) => 
                    {if (query === '') {
                        setError('Search term cannot be blank.')
                    } else {
                        handleSumbit()}}}> */}
                    <label htmlFor="queryInput">Search:</label>
                    <input
                        placeholder="enter a search term"
                        id="queryInput"
                        type="text"
                        value={query}
                        onChange={(e => setQuery(e.target.value))}
                        />
                    <button className="search">Submit</button>

                </form>
            
                <div className="searchdetails">
                    <p>Search Term: {query} <br></br>
                    Total Results : {totalResults} | Total Pages: {totalPages} | Current Page: {pageNum}</p>
                </div>
                
                <div className="pagebuttons">
                    <button class="mx-1 rounded" onClick={previousPage} style={{marginLeft: "0%"}}>Previous Page</button>
                    <button class="mx-1 rounded"
                        onClick={nextPage} style={{marginLeft: "0%"}}>Next Page 
                    </button>
                </div>

            </div>  

            <div className = "searchresults" class="d-flex justify-content-around">             
                { resultBoolean ? ( //if results available

                    <div class="row g-3">  
                        {movies.map(movie => {
                        //map "movies" array to access more details
                            return(
                        //use below for testing paginations/title search functionality: 
                        //  <li movie={movie} >{movie.Title} {movie.imdbID}</li>
                        
                                <div class="col">
                                    <MovieInfoCard movie={movie.imdbID} key={movie.imdbID}></MovieInfoCard>
                                </div>
                            )
                        })}
                        
                        {/* "load more" button at bottom of results if more results available */}
                        <div className="loadMore">
                            {(totalPages !== pageNum) && 
                            (totalPages !== 0) && 
                                //change button text if results loading
                                <button class="rounded" onClick={() => loadMore()}>          {loading ? 'Loading...' : 'Load More'} 
                                </button>
                            }
                        </div>

                        <div className="searchdetails" style={{paddingBottom: '1rem'}}>
                            <p>Search Term: {query} <br></br>
                            Total Results: {totalResults} | Total Pages: {totalPages} | Current Page: {pageNum}</p>
                        </div>

                    </div>
                    

                ) : (
                    <div>{error}</div>
                )
                }
            </div>

        </div>
    )
}

export default MovieSearchList;