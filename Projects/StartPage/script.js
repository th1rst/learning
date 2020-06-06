//initialize GridStack.js
var grid = GridStack.init({float: true})   

//--- GLOBAL VARIABLES ---


let isInEditMode = true; //Can grid be edited on page load? default: true     
let userCityId // is user city ID set? default: no


//DOM References
const lockGridButton = document.getElementById("lock-button");
const gridStackItems = document.querySelectorAll(".grid-stack-item");
const sidenav = document.querySelector(".sidenav");
const sidenavElements = document.querySelectorAll(".sidenav-element");
const mainWindow = document.querySelector(".main-window");
const dropTarget = document.querySelector(".drop-target"); //unused, may be in use later
const addRemoveItemsButton = document.getElementById("add-remove-button");
const closeSidenavButton = document.getElementById("sidenav-close");
const cityIdApplyButton = document.getElementById("apply-city-id");

const searchAddButton = document.getElementById("add-search-widget")
const weatherAddButton = document.getElementById("add-weather-widget");
const directionsAddButton = document.getElementById("add-directions-widget")
const newsAddButton = document.getElementById("add-news-widget");

const weatherRemoveButton = document.getElementById("remove-weather-widget");
const directionsRemoveButton = document.getElementById("remove-directions-widget");
const searchBarRemoveButton = document.getElementById("remove-search-widget");
const newsRemoveButton = document.getElementById("remove-news-widget");




/* ----- SETTINGS MENU ----- */

//listen for click on the "Enable/Lock Grid Editing" Button (upper right corner in SETTINGS)
lockGridButton.addEventListener("click", toggleGrid) 

function toggleGrid() {
  if (isInEditMode) {
    grid.movable(".grid-stack-item", false);              //disable dragging
    grid.resizable(".grid-stack-item", false);            //disable resizing
    lockGridButton.value = "Enable Grid Editing"              //change lock button
    
    gridStackItems.forEach(element => {                   //remove border
        element.style.border = "none";
    });
    isInEditMode = false;                                  //toggle isInEditMode (enable grid editing on/off)
  } else {
    grid.movable(".grid-stack-item", true);
    grid.resizable(".grid-stack-item", true);
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



//Event listener for every Sidenav-Item
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
  grid.addWidget("#weather-box")
})

// --> remove
weatherRemoveButton.addEventListener("click", () => grid.removeWidget("#weather-box"))

// --> settings
cityIdApplyButton.addEventListener("click", () => checkWeatherForCityId())






// ---- event listener for directions ----
// --> remove
directionsRemoveButton.addEventListener("click", () => grid.removeWidget("#map-box"))



// ---- event listener for DDG Search Box ----
// --> remove 
searchBarRemoveButton.addEventListener("click", () => {
  grid.removeWidget("#search-box")
} )







// ---- event listener for News ----
// --> remove 
newsRemoveButton.addEventListener("click", () => {
  grid.removeWidget("#news-box")
} )

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
        id: 15,
        cityid: cityId,
        appid: 'be57e605be76597fe7dfa2e9513f1392',
        units: 'metric',
        containerid: 'openweathermap-widget-15',
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