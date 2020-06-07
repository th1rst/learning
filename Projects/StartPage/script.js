//initialize GridStack.js
var grid = GridStack.init({float: true})   



/* ----- GLOBAL VARIABLES ---- */
let isInEditMode = true; //Can grid be edited on page load? default: true     



/* ----- DOM REFERENCES ----- */

let gridStackItems = document.querySelectorAll(".grid-stack-item");     //needs to be refreshed dynamically
const lockGridButton = document.getElementById("lock-button");
const sidenav = document.querySelector(".sidenav");
const sidenavElements = document.querySelectorAll(".sidenav-element");
const mainWindow = document.querySelector(".main-window");
const addRemoveItemsButton = document.getElementById("add-remove-button");
const closeSidenavButton = document.getElementById("sidenav-close");
const cityIdApplyButton = document.getElementById("apply-city-id");

const searchAddButton = document.getElementById("add-search-widget")
const weatherAddButton = document.getElementById("add-weather-widget");
const directionsAddButton = document.getElementById("add-directions-widget")
const newsAddButton = document.getElementById("add-news-widget");
const videosAddButton = document.getElementById("add-video-widget");

const weatherRemoveButton = document.getElementById("remove-weather-widget");
const directionsRemoveButton = document.getElementById("remove-directions-widget");
const searchBarRemoveButton = document.getElementById("remove-search-widget");
const newsRemoveButton = document.getElementById("remove-news-widget");
const videosRemoveButton = document.getElementById("remove-video-widget");


//Div contents for adding Gridstack Widgets
const ddgDiv = `<div id="search-box" class="search-box grid-stack-item mt-2" data-gs-x="5" data-gs-y="6" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content"><div class="search-bar"><form target="_blank" method="get" action="http://duckduckgo.com"><img class="logo" height="40px" width="40px" src="https://duckduckgo.com/assets/common/dax-logo.svg" alt="DuckDuckGo Logo"><input name="q" type="text" placeholder="Search DuckDuckGo"/><button class="search-button hide-border" type="submit" data-toggle="tooltip" data-placement="top" title="Search DuckDuckGo"><i class="fas fa-search"></i></button></form></div></div></div>`
let weatherDiv = `<div id="weather-box" class="grid-stack-item mt-2" data-gs-x="0" data-gs-y="0" data-gs-width="3" data-gs-height="3"><div class="grid-stack-item-content"><a class="weatherwidget-io" href="https://forecast7.com/en/52d5213d40/berlin/" data-label_1="BERLIN" data-label_2="WEATHER" data-theme="pure" >BERLIN WEATHER</a></div></div>`;
const directionsDiv = `<div id="map-box" class="grid-stack-item mt-2" data-gs-x="0" data-gs-y="8" data-gs-width="4" data-gs-height="6"><div class="grid-stack-item-content"><iframe style='width:600px;height:390px; border: 1px solid black;' src="https://maps.openrouteservice.org/directions?n1=49.131408&n2=12.205811&n3=6&b=0&c=0&k1=en-US&k2=km"></iframe><br><small><a href='https://maps.openrouteservice.org/directions?n1=49.131408&n2=12.205811&n3=6&b=0&c=0&k1=en-US&k2=km' target="_blank">Fullscreen</a></small></div></div>`
const newsDiv = `<div id="news-box" class="grid-stack-item mt-2" data-gs-x="10" data-gs-y="8" data-gs-width="2" data-gs-height="6"><div class="grid-stack-item-content"><iframe src="https://www.euronews.com/embed/timeline" scrolling="no" style="border:1px solid black; border-radius: 5px; min-height:400px; width:95%; height:95%;"></iframe></div></div>`
const videosDiv = `<div id="invidious-box" class="grid-stack-item mt-2" data-gs-x="5" data-gs-y="12" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content"><div class="search-bar"><form target="_blank" method="get" action="https://invidio.us/search"><img class="logo" height="40px" width="40px" src="https://invidio.us/favicon-32x32.png" alt="Invidious Logo" data-toggle="tooltip" data-placement="top" title="Invidious is an alternative FrontEnd for Youtube. It gets you the raw videos without most of tracking by Google."><input name="q" type="text" placeholder="Search Invidious"/><button class="search-button hide-border" type="submit" data-toggle="tooltip" data-placement="top" title="Search Invidious"><i class="fas fa-search"></i></button></form></div></div></div>`





/* ----- SETTINGS MENU ----- */

//listen for click on the "Enable/Lock Grid Editing" Button (upper right corner in SETTINGS)
lockGridButton.addEventListener("click", toggleGrid) 

function toggleGrid() {
  refreshGridStackItems() //check if the items have changed since last lock/unlock

  if (isInEditMode) {
    grid.movable(gridStackItems, false);              //disable dragging
    grid.resizable(gridStackItems, false);            //disable resizing
    lockGridButton.value = "Enable Grid Editing"      //change text in settings menu
    
    gridStackItems.forEach(element => {               //remove border
        element.style.border = "none";
    });
    isInEditMode = false;                             //toggle isInEditMode (enable grid editing on/off)
  } else {
    grid.movable(gridStackItems, true);
    grid.resizable(gridStackItems, true);
    lockGridButton.value = "Lock Grid Editing"
    
    gridStackItems.forEach(element => {
        element.style.border = "3px solid lightgrey";
    });
    isInEditMode = true;
  }
}

  




/* ----- SIDEBAR NAVIGATION ----- */

//listen for click on the "Add/Remove Items" Button (upper right corner SETTINGS dropdown)
addRemoveItemsButton.addEventListener("click", toggleSidenav) 
closeSidenavButton.addEventListener("click", toggleSidenav)

function toggleSidenav() {
  if (sidenav.style.display === "none") {
    sidenav.style.display = "block";
    mainWindow.style.marginLeft = "160px";    //push everything else to the right
  } else {
    sidenav.style.display = "none";           
    mainWindow.style.marginLeft = "0px";      //get window back to original size
  }
}



// ---- Event listener for every Sidenav-Item ----
document.querySelectorAll(".sidenav-element").forEach((element) => {      

  //loop over each sidebar item, listen for click
  element.addEventListener("mouseup", () => {
    const buttonContainer = element.querySelector(".button-flex-container")
    const addRemoveAndSettingsButtons = element.querySelectorAll(".sidenav-add-button, .sidenav-settings-button, .sidenav-remove-button")

    //toggle the corresponding flexbox container div of "Add, (optional: Settings), Remove" buttons
    toggleButtonDiv(buttonContainer)

    function toggleButtonDiv(element) {
      if (element.style.display == "none") {
        element.style.display = "flex";
          //toggle add, (settings), remove buttons
          addRemoveAndSettingsButtons.forEach(element => {
            element.style.display = "block"
          });
      } else {
        element.style.display = "none";
        //toggle add, (settings), remove buttons
        addRemoveAndSettingsButtons.forEach(element => {
          element.style.display = "none"
        });
      }
    }
  })
})

// ---- event listener for Weather ----
// --> add
weatherAddButton.addEventListener("click", () => {
  reload_js('https://weatherwidget.io/js/widget.min.js');
  getWeather()
  grid.addWidget($(weatherDiv), 0, 0, 2, 4);
})

// --> remove
weatherRemoveButton.addEventListener("click", () => grid.removeWidget("#weather-box"))

// --> Settings

// --> settings -> Apply
cityIdApplyButton.addEventListener("click", () => checkWeatherForCityId())



// ---- event listener for directions ----
// --> add
directionsAddButton.addEventListener("click", () => grid.addWidget($(directionsDiv), 0, 8, 4, 6))

// --> remove
directionsRemoveButton.addEventListener("click", () => grid.removeWidget("#map-box"))



// ---- event listener for DDG Search Box ----
// --> add
searchAddButton.addEventListener("click", () => grid.addWidget($(ddgDiv), 1, 5, 3, 1))

// --> remove 
searchBarRemoveButton.addEventListener("click", () => grid.removeWidget("#search-box"))



// ---- event listener for News ----
// --> add
newsAddButton.addEventListener("click", () => grid.addWidget($(newsDiv), 10, 8, 2, 6))

// --> remove 
newsRemoveButton.addEventListener("click", () => grid.removeWidget("#news-box"))



// ---- event listener for Invidious Search ----
// --> add
videosAddButton.addEventListener("click", () => grid.addWidget($(videosDiv), 5, 12, 3, 1))

// --> remove 
videosRemoveButton.addEventListener("click", () => grid.removeWidget("#invidious-box"))





function refreshGridStackItems() {
  gridStackItems = document.querySelectorAll(".grid-stack-item");
}

function reload_js(src) {
    $('script[src="' + src + '"]').remove();
    $('<script>').attr('src', src).appendTo('head');
}

function getWeather() {
  !function(d,s,id){
    var js,fjs = d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)) {
      js=d.createElement(s);
      js.id=id;
      js.src='https://weatherwidget.io/js/widget.min.js';
      fjs.parentNode.insertBefore(js,fjs);
    }}(document,'script','weatherwidget-io-js'); 
}



getWeather()

/* OLD WEATHER 

let userCityId // is user city ID set? default: no




function checkWeatherForCityId() {
  let cityIdInputField = document.getElementById("user-city-input");
  const defaultCityId = "2950159";
  userCityId = cityIdInputField.value;
  
  if (userCityId === "" || userCityId === null) {
    console.log("defaultCityId used! (User input is EMPTY STRING or NULL)")
    getWeather(defaultCityId)
  } else {
    console.log(`UserCityID used! UserCityId is ${userCityId}.`)
    getWeather(userCityId);
  }
}




function getWeather(cityId) {
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
        id: 22,
        cityid: cityId,
        appid: 'be57e605be76597fe7dfa2e9513f1392',
        units: 'metric',
        containerid: 'openweathermap-widget-22',
    });
    }
    

    (function() {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    })();

 



checkWeatherForCityId()




*/









