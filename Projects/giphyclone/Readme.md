## A simplified clone of Giphy.com using their own API.

This is my first tinkering with React.

**My approach was as follows:**
- create a Navbar
- lay out a flexbox grid of hardcoded *n* items and make it work smoothly
- fill out one single element with a gif from the Giphy API
- style the gifs to match the corresponding flexbox items in width/height
- create a loop to fill out all elements with gifs and use their corresponding titles, alts and href's.
- style the appearance of the boxes to make it look not-so-ugly
- get the user input of the form (Navbar)
- display search results dynamically onChange


**Problems I've encountered:**
- importing a regular style sheet somehow didn't work
- had to store the data from the API in state
- getting the (value of) user input is a whole lot different than with Vanilla JS and took me almost a full day to figure out
- the user input is asynchronous (had to use async/await or else the last character would be missing)
- **.**this is crazy!


Technologies used:
HTML, CSS and JS
React (create-react-app)
React-Bootstrap
API calls