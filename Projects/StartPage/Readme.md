THIS IS A WORK IN PROGRESS

Since I don't like the privacy-invading nature of Google and other big tech companies alike, I liked the idea of making a privacy Startpage which provides access to great open source alternatives
without the need to look for them. Just add them to the Startpage and the user is good to go.
Stumbling accross Gridstack.js, I thought it would be cool if you could drag around the individual elements.

The end goal is to have a customizable StartPage where you can choose what service you like to see. 
As a bonus, I'd like to implement a feature where the user settings are stored in the Browsers LocalStorage so no cookies are used.

Currently implemented:
- Customizable Grid via Gridstack.js. Default: edit mode (can be locked in settings)
- DuckDuckGo Search Bar
- Openstreetmap (Openroute) Directions
- OpenWeatherMap API Call (default: Berlin). Settings can be set to desired city (needs page refresh)
- Euronews WorldNews Widget
- Invidious Search Bar
- Sidebar-navigation (items can be removed but not yet added)


What I like to implement in the future (in order):
- Sidebar (re-)adding items
- Individual Resizing of Grid Items (or make Gridstack container of the static ones not resizable)
- Some kind of Notes-App eventually
- An alternative to Google Translate
- saving settings (Grid Items in use and their location, Weather City ID) to LocalStorage.
- whatever comes into mind, any input is highly appreciated


Since this is my first own project besides Tutorial tasks, I like to stick to the basics.

Technologies used so far:

- HTML
- CSS including Flexbox Elements
- Vanilla JavaScript
- Bootstrap 4
- FontAwesome
- Gridstack.js
