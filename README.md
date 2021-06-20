# **FindFlix**

[FindFlix](https://ariannasantiago.github.io/SES-app/) helps moviewatchers find film information and details. Users can view search results in the form of a set of movie cards/posters.

This website pulls data about movies using the [OMDB API](https://www.omdbapi.com), was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and meets the following deliverables:

1. After running a title search, users can view movie options through a responsive and mobile-friendly user interface, as well as the total number of results and pages available .
2. Movie options are presented with their release date, runtime, genre, and director. If available, a movie poster is displayed; if not, a generic blank poster is displayed.
3. Pagination features allowing users to view multiple pages of results returned by API.
4. "Show More" feature allows users to view more than 10 results at a time. 

## **Instructions**
1. Enter a keyword or phrase into the search bar. As you input into the textbox, the _Search Term_ field will populate. All non-blank search terms are valid. 
    - ![](https://i.imgur.com/zleQ0eZ.png)

2. Next, click **"Submit."** The results for search term _"Matilda"_ are shown below. For each movie card, a poster, movie title, release date, runtime, genre, director, and IMDB rating are displayed. 
    - <img src="https://media3.giphy.com/media/gbEvKQZ4bDBwj7zGNr/giphy.gif?cid=790b76119794c652e9817407ab2032bce0b15a090f818691&rid=giphy.gif&ct=g" >

3. To view the next/previous page of options, click **"Next Page"** or **"Previous Page"** above the search results. The next/previous set of 10 (or fewer) results are shown, and the _Current Page_ field is updated.

    - <img src="https://media1.giphy.com/media/mPcNYfGvMbGnaD61Du/giphy.gif?cid=790b76110eccb37f894103aefc7da270c3d19a2739a8d1fa&rid=giphy.gif&ct=g" >

4.  Another way to view more options is to click the **"Load More"** button at the bottom of the search results grid. The button text will change to **"Loading..."** while the results are rendered. The next 10 (or fewer) movies are added to the existing results, and _Current Page_ is updated. 
    - <img src="https://media2.giphy.com/media/P17bIOXLSDm5ZQoK7q/giphy.gif?cid=790b7611dafbbd6f449c6546439094eb7fdfb8834607ec8c&rid=giphy.gif&ct=g" >


5. If the last movie option has been reached, the **"Load More"** button is not shown.
    - <img src="https://media2.giphy.com/media/rvDTCVIKBxR2EmUgMn/giphy.gif?cid=790b7611d78a8e836c2e77d1813ca611df5a2bdb0b368211&rid=giphy.gif&ct=g" >


6. Clicking either **"Previous Page"** or **"Next Page"** resets the number of movies displayed to 10.
    - <img src="https://media4.giphy.com/media/zpR0kjJcQObDpcVs1X/giphy.gif?cid=790b76118c88e80d979726ea0dec4953a3dc3e2a01335694&rid=giphy.gif&ct=g" >


7. To search another term, simply scroll up and change your input. Search results are reset to 10 movies on page 1.
    - <img src="https://media1.giphy.com/media/C7KxKvy30Mc9Mjde3E/giphy.gif?cid=790b7611dea6e9bd30c14d00a1d25df19f59664e2694f8d6&rid=giphy.gif&ct=g" >



## **Tools Used**
#### Languages and Frameworks

- ReactJS Framework (with Bootstrap)
- HTML
- CSS
- [OMDB (Open Movie DataBase) API](https://www.omdbapi.com)
- GitHub Pages
- Visual Studio Code

#### Resources
- OMDB-API app demo, Kristen Koyanagi
- C1 Office Hours 
- Stack Overflow
- [Responsive Layouts Using CSS Grid](https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/#top-of-site) tutorial from css-tricks.com
- React Bootstrap Documentation (Cards and Grids)

## **Challenges Encountered**
- Figuring out the format with which to store my API key and "Now Playing" custom poster URL. It took some trial and error before I realized how simple it was.
- Learning how to re-query API for each individual movie title via its unique IMDB-ID. 2 main problems were encountered:
     - I had to think through the process of passing each individual movie's ID to my MovieCard component (minimizing unecessary information), and then set up the necessary state hooks. 
     - Through use of my network request log, I realized that a given search would query the API several times, resulting in multiple requests for each ID. Writing my asynch fetch function inside useEffect solved this.
- Understanding how grids work with Bootstrap, and figuring out how to make my card grid responsive beyond what the standard Card template was giving me.
- Learning how to position cards in my grid. Issue of uncentered cards still needs to be resolved.
- A one-step-behind issue with my pagination, in which the pageNum state was updated internally, but output did not change until re-rendering. After a lot of program tracing through my async functions, console logging, outputting state to the actual page, I was unable to find a fix. Thanks to help from C1's office hour, the solution was to write a useEffect function with a dependency array containing pageNum.
- Creating a GitHub respository and doing commits/pushes for the first time was quite intimidating, but I received some excellent guidance from C1 office hours.

- Note: first commit is attributed to a friend who was logged into her git on my computer. Her computer had crashed while working on a project, so she used my machine to rewrite and submit it. I didn't know to check the active git user before doing my first commit, but fixed it afterwards.

## **What I Learned**
This project was my first foray into web development, and seemed very overwhelming at first. However, I thoroughly enjoyed immersing myself in through online tutorials and the C1 SES office hours, and building upon my existing knowledge of basic program design and data structures. It was fun to utilize an API for the first time, and I'm excited to apply my new skills in other contexts. I also learned how use GitHub and gain a decent grasp of Git commands, and I thought it was cool to deploy my first GitHub page! I look forward to continually improving upon this website, and implementing more features and functionality.

## **To Dos/Action Items**
- Allow users to input a date range and return corresponding results (potentially via a second "moviesFiltered" state array which is populated from general "movies" state array via a modification of LoadMore's fetch branch)
- Add more comments to improve code clarity, remove console.log()s once development is finished 
- Improve error catch of MovieCard component
- Finish "Loading" status feature of MovieCard component
- Improve UI/UX of website, specifically responsive grid resizing and un-centered grid layout


## **Deployment**

A live demo of this app can be viewed here: [FindFlix](https://ariannasantiago.github.io/SES-app/) 

### Notes:
- Fonts used: Playfair Display and Source Sans Pro
- Color Palette developed from header image
