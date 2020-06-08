//initialize GridStack.js
var grid = GridStack.init({float: true})   



/* ----- GLOBAL VARIABLES ---- */
let isInEditMode = true //Can grid be edited on page load? default: true     



/* ----- DOM REFERENCES ----- */

//Main Window
let gridStackItems = document.querySelectorAll(".grid-stack-item");     //needs to be refreshed dynamically
const mainWindow = document.querySelector(".main-window");

//Navbar on top
const lockGridButton = document.getElementById("lock-button");
const addRemoveItemsButton = document.getElementById("add-remove-button");
const saveSettingsButton = document.getElementById("save-button");

//Sidenav
const sidenav = document.querySelector(".sidenav");
const sidenavElements = document.querySelectorAll(".sidenav-element");
const closeSidenavButton = document.getElementById("sidenav-close");
const cityIdApplyButton = document.getElementById("apply-city-id");

//Sidenav-Elements -> Add
const searchAddButton = document.getElementById("add-search-widget")
const weatherAddButton = document.getElementById("add-weather-widget");
const directionsAddButton = document.getElementById("add-directions-widget")
const newsAddButton = document.getElementById("add-news-widget");
const videosAddButton = document.getElementById("add-video-widget");
const translateAddButton = document.getElementById("add-translate-widget");

//Sidenav-Elements -> Remove
const weatherRemoveButton = document.getElementById("remove-weather-widget");
const directionsRemoveButton = document.getElementById("remove-directions-widget");
const searchBarRemoveButton = document.getElementById("remove-search-widget");
const newsRemoveButton = document.getElementById("remove-news-widget");
const videosRemoveButton = document.getElementById("remove-video-widget");
const translateRemoveButton = document.getElementById("remove-translate-widget");

//Div contents for adding Gridstack Widgets
const ddgDiv = `<div id="search-box" class="search-box grid-stack-item mt-2" data-gs-x="5" data-gs-y="6" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content"><div class="search-bar"><form target="_blank" method="get" action="http://duckduckgo.com"><img class="logo" height="40px" width="40px" src="https://duckduckgo.com/assets/common/dax-logo.svg" alt="DuckDuckGo Logo"><input name="q" type="text" placeholder="Search DuckDuckGo"/><button class="search-button hide-border" type="submit" data-toggle="tooltip" data-placement="top" title="Search DuckDuckGo"><i class="fas fa-search"></i></button></form></div></div></div>`
const defaultWeatherDiv = `<div id="weather-box" class="grid-stack-item mt-2" data-gs-x="0" data-gs-y="1" data-gs-width="3" data-gs-height="3"><div class="grid-stack-item-content"><a class="weatherwidget-io" href="https://forecast7.com/en/52d5213d40/berlin/" data-label_1="BERLIN" data-label_2="WEATHER" data-theme="pure" >BERLIN WEATHER</a></div></div>`;
const directionsDiv = `<div id="map-box" class="grid-stack-item mt-2" data-gs-x="0" data-gs-y="8" data-gs-width="4" data-gs-height="6"><div class="grid-stack-item-content"><iframe style='width:600px;height:390px; border: 1px solid black;' src="https://maps.openrouteservice.org/directions?n1=49.131408&n2=12.205811&n3=6&b=0&c=0&k1=en-US&k2=km"></iframe><br><small><a href='https://maps.openrouteservice.org/directions?n1=49.131408&n2=12.205811&n3=6&b=0&c=0&k1=en-US&k2=km' target="_blank">Fullscreen</a></small></div></div>`
const newsDiv = `<div id="news-box" class="grid-stack-item mt-2" data-gs-x="10" data-gs-y="4" data-gs-width="2" data-gs-height="6"><div class="grid-stack-item-content"><iframe src="https://www.euronews.com/embed/timeline" scrolling="no" style="border:1px solid black; border-radius: 5px; min-height:400px; width:95%; height:95%;"></iframe></div></div>`
const videosDiv = `<div id="invidious-box" class="grid-stack-item mt-2" data-gs-x="5" data-gs-y="13" data-gs-width="3" data-gs-height="1"><div class="grid-stack-item-content"><div class="search-bar"><form target="_blank" method="get" action="https://invidio.us/search"><img class="logo" height="40px" width="40px" src="https://invidio.us/favicon-32x32.png" alt="Invidious Logo" data-toggle="tooltip" data-placement="top" title="Invidious is an alternative FrontEnd for Youtube. It gets you the raw videos without most of tracking by Google."><input name="q" type="text" placeholder="Search Invidious"/><button class="search-button hide-border" type="submit" data-toggle="tooltip" data-placement="top" title="Search Invidious"><i class="fas fa-search"></i></button></form></div></div></div>`
const translateDiv = `<div id="translate-box" class="grid-stack-item mt-2" data-gs-x="5" data-gs-y="10" data-gs-width="3" data-gs-height="2"><div class="grid-stack-item-content"><a href="https://www.deepl.com/translator" target="_blank"><img src="https://www.deepl.com/img/logo/DeepL_LogoAndText_darkBlue.svg" alt="DeepL Logo"></a></div></div>`



/* ----- NAVBAR----- */

//listen for click on the "Enable/Lock Grid Editing" Button (upper right corner in SETTINGS)
lockGridButton.addEventListener("click", toggleEditMode) 


function toggleEditMode() {
  //check if the items have changed since last lock/unlock
  refreshGridStackItems();

  if (isInEditMode) {
    deactivateEditMode();
    isInEditMode = false;
  } else {
    activateEditMode();
    isInEditMode = true;
  }
}

function deactivateEditMode() {
  grid.movable(gridStackItems, false);
  grid.resizable(gridStackItems, false);
  changeLockIcon();
  gridStackItems.forEach((element) => {
    element.style.border = "none";
  });
}

function activateEditMode() {
  grid.movable(gridStackItems, true);
  grid.resizable(gridStackItems, true);
  changeLockIcon();
  gridStackItems.forEach((element) => {
    element.style.border = "3px solid lightgrey";
  });
}

//check for Edit Mote on Startup, can be altered in global bool
const checkForEditModeOnStartup = () => !isInEditMode ? deactivateEditMode() : false


/* ----- SIDEBAR NAVIGATION ----- */

//listen for click on the "Add/Remove Items" Button (upper right corner SETTINGS dropdown)
addRemoveItemsButton.addEventListener("click", toggleSidenav) 
closeSidenavButton.addEventListener("click", toggleSidenav)

function toggleSidenav() {
  if (sidenav.style.display === "none") {
    sidenav.style.display = "block";
    mainWindow.style.marginLeft = "160px"; //push everything else to the right
  } else {
    sidenav.style.display = "none";
    mainWindow.style.marginLeft = "0px"; //get window back to original size
  }

  /*
  enable edit mode as soon as sidebar opens.
  second condition: if this wouldnt get checked, 
  locking grid while sidebar is open would immediately 
  unlock the grid again on sidebar-close
  */
  if (!isInEditMode && sidenav.style.display === "block") {
    toggleEditMode();
  }
}

// ---- Event listener for every Sidenav-Item ----
document.querySelectorAll(".sidenav-element").forEach((element) => {
  //loop over each sidebar item, listen for click
  element.addEventListener("mouseup", () => {
    const buttonContainer = element.querySelector(".button-flex-container");
    const addRemoveAndSettingsButtons = element.querySelectorAll(
      ".sidenav-add-button, .sidenav-settings-button, .sidenav-remove-button"
    );

    //toggle the corresponding flexbox container div of "Add, (optional: Settings), Remove" buttons
    toggleButtonDiv(buttonContainer);

    function toggleButtonDiv(element) {
      if (element.style.display == "none") {
        element.style.display = "flex";
        addRemoveAndSettingsButtons.forEach((element) => {
          element.style.display = "block";
        });
      } else {
        element.style.display = "none";
        addRemoveAndSettingsButtons.forEach((element) => {
          element.style.display = "none";
        });
      }
    }
  });
});



// ---- event listener for DDG Search Box (add/remove)----
searchAddButton.addEventListener("click", () => grid.addWidget($(ddgDiv), 5, 6, 3, 1))
searchBarRemoveButton.addEventListener("click", () => grid.removeWidget("#search-box"))


// ---- event listener for Weather (add/remove/settings)----
weatherAddButton.addEventListener("click", () => {
  reload_js('https://weatherwidget.io/js/widget.min.js');
  getWeather()
  grid.addWidget($(defaultWeatherDiv), 0, 1, 3, 3);
})
weatherRemoveButton.addEventListener("click", () => grid.removeWidget("#weather-box"))
// --> settings -> Apply
cityIdApplyButton.addEventListener("click", () => applyCityId())


// ---- event listener for directions (add/remove)----
directionsAddButton.addEventListener("click", () => grid.addWidget($(directionsDiv), 0, 8, 4, 6))
directionsRemoveButton.addEventListener("click", () => grid.removeWidget("#map-box"))


// ---- event listener for News (add/remove) ----
newsAddButton.addEventListener("click", () => grid.addWidget($(newsDiv), 10, 4, 2, 6))
newsRemoveButton.addEventListener("click", () => grid.removeWidget("#news-box"))


// ---- event listener for Invidious Search (add/remove) ----
videosAddButton.addEventListener("click", () => grid.addWidget($(videosDiv), 5, 13, 3, 1))
videosRemoveButton.addEventListener("click", () => grid.removeWidget("#invidious-box"))


// ---- event listener for DeepL Translate (add/remove) ----
translateAddButton.addEventListener("click", () => grid.addWidget($(translateDiv), 5, 10, 3, 2))
translateRemoveButton.addEventListener("click", () => grid.removeWidget("#translate-box"))




/* ----- GENERAL FUNCTIONS ----- */

function refreshGridStackItems() {
  gridStackItems = document.querySelectorAll(".grid-stack-item");
}


function applyCityId() {
  const userCityInput = document.getElementById("user-city-input");
  let userWeatherDiv = `<div id="weather-box" class="grid-stack-item mt-2" data-gs-x="0" data-gs-y="1" data-gs-width="3" data-gs-height="3"><div class="grid-stack-item-content">${userCityInput.value}</div></div>`;
  grid.removeWidget("#weather-box");
  reload_js("https://weatherwidget.io/js/widget.min.js");
  getWeather();
  grid.addWidget($(userWeatherDiv), 0, 1, 3, 3);
}

function reload_js(src) {
  $('script[src="' + src + '"]').remove();
  $("<script>").attr("src", src).appendTo("head");
}

function changeLockIcon() {
  const lockIcon = document.getElementById("lock-button");
  if (lockIcon.classList.contains("fa-lock-open")) {
    lockIcon.className = "mt-4 mb-2 fas fa-lock";
  } else {
    lockIcon.className = "mt-4 mb-2 fas fa-lock-open";
  }
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




// 1. get position (x, y)
// 2. get size (x, y)
// 3. write (1+2) to storage
// 4. on startup, check for positions
// 5. make active widgets a class of "is-active"
// 6. write this to storage
// 7. check for and render only isActive on startup

grid.on("change", (change, gridStackItems) => {
  console.log(change, gridStackItems)
  console.log("Name is: " + gridStackItems[0].el.id)
  console.log("X is: " + gridStackItems[0].x)
  console.log("Y is: " + gridStackItems[0].y)
  console.log("Width is: " + gridStackItems[0].width)
  console.log("Height is: " + gridStackItems[0].height)
})





checkForEditModeOnStartup(); 
getWeather();