# google-books-search

## Technologies used;
Visual Studio Code, React, Google Books API, Bootstrap

## Summary
 
This project was a group attempt to learn more about React logic and UI, while learning how to implement, get, and save information via an API provided by Google. On our search page a user can enter in the title of a book in the input field, click 'search' and yield results from Google Book's API. From here, the user can click to see more information about the book, which directs them to the Google Books site, or they can save the book to add to their saved list. A 'Book' schema is created so that we can take the result and save it into our Mongoose database for retrieval later on through modeling (this also includes deletion from the database).

## What we learned:
1. How to implement an API within the React framework.
2. How to change the state of a component to reflect a user choosing to 'save' a book.
3. Improvements on learning how to propley space and add padding to elements.
4. Creating event targets to capture value and using event listeners to send that data to the database.

## Steps we took:
1. During our first group session we decided to work together to take on the backend. This started with completing the server.js file and completing the API route handler functions.
2. Set up Mongoose database & created seeds file along with Book schema.
3. Implemented API.
4. Worked on functions and logic for search and saved pages.
4. Worked on components, and came together later with different ones completed.
5. Coded search and saved pages js pages by placing components within them.
6. Styled elements on page appropriately.

## Sources:
In-class assignments

## Gifs and Screenshots

## Scrolling through results of book search
![gif of search page](https://github.com/leticiaroncero/google-books-search/blob/master/scroll.gif)

 ## UI view of search page and result
![Search view](https://github.com/leticiaroncero/google-books-search/blob/master/Screen%20Shot%202020-02-26%20at%204.05.22%20PM.png)

## Code snippet of Book schema for Mongoose DB
![Book schema](https://github.com/leticiaroncero/google-books-search/blob/master/Screen%20Shot%202020-02-26%20at%204.07.50%20PM.png)

## Code snippet of saving a book as an object and posting it to an API route via Axios
![Saving function](https://github.com/leticiaroncero/google-books-search/blob/master/Screen%20Shot%202020-02-26%20at%204.08.50%20PM.png)