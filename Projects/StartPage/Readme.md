Since I don't like the privacy-invading nature of Google and other big tech companies alike, I liked the idea of making a privacy Startpage which provides access to great open source alternatives
without the need to look for them. Just add them to the Startpage and the user is good to go.
Stumbling accross Gridstack.js, I thought it would be cool if you could drag around the individual elements.

The end goal is to have a customizable StartPage where you can choose what service you like to see. 
As a bonus, I'd like to implement a feature where the user settings are stored in the Browsers LocalStorage so no cookies are used.

Currently implemented:
- Customizable Grid via Gridstack.js. Default: edit mode (can be locked in settings)
- DuckDuckGo Search Bar
- Openstreetmap (Openroute) Directions
- WeatherWidget.io Weather including settings (Widget gets updated without page refresh)
- Euronews WorldNews Widget (might be replaced soon, too many trackers and console errors/warnings)
- Invidious Search Bar
- DeepL Translate Widget (just their logo as a link)
- Sidebar-navigation including removing and adding items
- function to update the grid items (refresh to get dynamically generated div's)
- saving settings (Grid Items in use and their location) to LocalStorage.


Since this is my first own project besides Tutorial tasks, I like to stick to the basics. 
I purposefully made the Site non-responsive as I think a Startpage like this is pointless on mobile devices.

Technologies used so far:

- HTML
- CSS including Flexbox
- Vanilla JavaScript
- some jQuery
- Bootstrap 4
- FontAwesome
- Gridstack.js


Conclusion:
Saving settings to localStorage and reading them out was by far the hardest part and took up probably 50% of the time. Tough one!
Otherwise, I can VERY clearly see now where a Library like React can come in handy. Updating dynamically changing elements in the DOM is a complete mess when having to write countless event handlers and DOM references.
But it works nonetheless and I tried my best to format and document everything as good as I can. Very happy!