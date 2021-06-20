# **FindFlix**

[FindFlix](https://ariannasantiago.github.io/SES-app/) helps moviewatchers find film information and details. Users can view search results in the form of a set of movie cards/posters.

This website pulls data about movies using the [OMDB API](https://www.omdbapi.com), was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and meets the following deliverables:

1. After running a title search, users can view movie options through a responsive and mobile-friendly user interface, as well as the total number of results and pages available .
2. Movie options are presented with their release date, runtime, genre, and director. If available, a movie poster is displayed; if not, a generic blank poster is displayed.
3. Pagination features allowing users to view multiple pages of results returned by API.
4. "Show More" feature allows users to view more than 10 results at a time. 

## Instructions
Enter a keyword or phrase into the search bar. As you input into the textbox, the "Search Term" field will populate. If you do not enter a search term, you will be prompted to do so. All non-blank search terms are valid. 

Next, click "Submit." The results for search term "Matilda" are shown below. For each movie card, a poster, movie title, release date, runtime, genre, director, and IMDB rating are displayed. 

To view the next page of options, click "Next Page" above the search results. The next set of 10 (or fewer) results are shown, and the "Current Page" field is updated.

To view the previous page of options, click "Previous Page". The previous set of 10 results are shown, and "Current Page" is updated.

Another way to view more options is to click the "Load More" button at the bottom of the search results grid. The button text will change to "Loading..." while the results are rendered. The next 10 (or fewer) movies are added to the existing results, and "Current Page" is updated. 

If the last movie option has been reached, the "Load More" button is not shown.

Clicking either "Previous Page" or "Next Page" resets the number of movies displayed to 10.

To search another term, simply scroll up and change your input. Search results are reset to 10 movies on page 1.



## **Tools Used**
### Languages and Frameworks

- React JS / JavaScript
- HTML
- CSS
- OMDB (Open Movie DataBase) API
- GitHub Pages
- Visual Studio Code

### Resources
- OMDB-API app demo, Kristen Koyanagi
- C1 Office Hours 
- Stack Overflow
- [Responsive Layouts Using CSS Grid](https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/#top-of-site)
- React Bootstrap Documentation (Cards and Grids)

## **Challenges Encountered**
- Figuring out the format with which to store my API key and "Now Playing" custom poster URL. It took some trial and error before I realized how simple it was.
- Learning how to re-query API for each individual movie title via its unique IMDB-ID. 2 main problems were encountered:
     - I had to think through the process of passing each individual movie's ID to my MovieCard component (minimizing unecessary information), and then set up the necessary state hooks. 
     - Through use of my network request log, I realized that a given search would query the API several times, resulting in multiple requests for each ID. Writing my asynch fetch function inside useEffect solved this.
- Understanding how grids work with Bootstrap, and figuring out how to make my card grid responsive beyond what the standard Card template was giving me.
- A one-step-behind issue with my pagination, in which the pageNum state was updated internally, but output did not change until re-rendering. After a lot of program tracing through my async functions, console logging, outputting state to the actual page, I was unable to find a fix. Thanks to help from C1's office hour, the solution was to write a useEffect function with a dependency array containing pageNum.
- Creating a GitHub respository and doing commits/pushes for the first time was quite intimidating, but I received some excellent guidance from C1 office hours.

- Note: first commit is attributed to a friend who was logged into her git on my computer. Her computer had crashed while working on a project, so she used my machine to rewrite and submit it. I didn't know to check the active git user before doing my first commit, but fixed it afterwards.

## **To Dos/Action Items**
- Allow users to input a date range and return corresponding results (potentially via a second "moviesFiltered" state array which is populated from general "movies" state array via a modification of LoadMore's fetch branch)
- Add more comments to improve code clarity, remove console.log()s once development is finished 
- Improve error catch of MovieCard component
- Finish "Loading" status feature of MovieCard component
- Improve UI/UX of website, particularly responsive grid resizing and un-centered one-row layout



### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

