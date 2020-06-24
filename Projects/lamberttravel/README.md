This is my second attempt of using React.

A mockup Travel agency Website that is then going to display backend data and lets the user filter through it.
For each section (double economy, beachfront luxurious etc.) there is going to be a Hero-component.

For the Backend I will be using Contentful and set up a mockup database for (semi-) luxurious Hotel rooms.
The pictures are copyright-free pictures from unsplash and may or may not be accurate representations of their categories.

The whole Project has been inspired by "Coding Addict"'s Youtube video, though I only got inspired by the Layout. Everything else is built from scratch. 
In the end, I wanted to learn something and not just copy his code (which is most likely significantly more elegant than mine).


Technologies Used:

Frontend:
- HTML 
- CSS, relying heavily on Flexbox
- React including React-Router with custom Error404 page
- React-Icons

Backend: 
- Contentful API


Issues I've encountered:
1. Since this is my second React-App and my first one was basically just a single Page, I had to figure out how to structure my Code into more and more small Components. That was a very insightful journey!

2. At first, I've made the wrong API call and got EVERY item in my Account. That wasn't a problem until I made another test category and suddenly got not only rooms. 
Secondly, I didn't retrieve the corresponding images of the individual rooms' linked "Assets". That wasn't an issue at first (because Assets.picture[i] was automatically from room[i]), but as my database grew I encountered this issue.

3. The API from Contentful is only called once in the "Rooms" page,
from there every room in the database gets displayed (no need for a limit as my mockup Database is small) and has certain props.
When clicking on a room, the Link to the individual page has to pass on every one of the rooms' props. That was a tough one and took me several hours including making use of the React Developer Browser Extension to fix.

4. React Router saved my current window position (scrolling) and kept that position when opening a new Link, so I had to import a ScrollToTop component someone on Stack Overflow made.

5. After countless hours searching for a solution on how to pass props around to a new tab (single page application worked flawlessly, only encounter problems when opening room X in a new tab via MiddleMouse) and finding out that it wasn't possible, I decided to just disable the middle mouse entirely via "React One Tab Enforcer".

Other than that, I learned a ton and it was an AMAZING journey. Very happy!