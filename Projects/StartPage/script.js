//initialize GridStack.js
var grid = GridStack.init({float: true})   

//--- GLOBAL VARIABLES ---


let isInEditMode = true; //Can grid be edited on page load? default: true     
let userCityId // is user city ID set? default: no


//DOM References
const lockButton = document.getElementById("lock-button");
const gridStackItems = document.querySelectorAll(".grid-stack-item");
const sidenav = document.querySelector(".sidenav");
const sidenavElements = document.querySelectorAll(".sidenav-element");
const mainWindow = document.querySelector(".main-window");
const dropTarget = document.querySelector(".drop-target"); //unused, may be in use later
const addRemoveItemsButton = document.getElementById("add-remove-button");
const closeSidenavButton = document.getElementById("sidenav-close");
const cityIdApplyButton = document.getElementById("apply-city-id")






/* ----- SETTINGS MENU ----- */

//listen for click on the "Enable/Lock Grid Editing" Button (upper right corner in SETTINGS)
lockButton.addEventListener("click", toggleGrid) 

function toggleGrid() {
  if (isInEditMode) {
    grid.movable(".grid-stack-item", false);              //disable dragging
    grid.resizable(".grid-stack-item", false);            //disable resizing
    lockButton.value = "Enable Grid Editing"              //change lock button
    
    gridStackItems.forEach(element => {                   //remove border
        element.style.border = "none";
    });
    isInEditMode = false;                                  //toggle isInEditMode (enable grid editing on/off)
  } else {
    grid.movable(".grid-stack-item", true);
    grid.resizable(".grid-stack-item", true);
    lockButton.value = "Lock Grid Editing"
    
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

//event listener for Weather settings


cityIdApplyButton.addEventListener("click", () => {
  let cityIdInputField = document.getElementById("user-city-input");
  userCityId = cityIdInputField.value;
  console.log(userCityId)
  console.log(typeof(userCityId))
  console.log(myWidgetParam)
  checkWeatherForCityId(userCityId)
  console.log(myWidgetParam)
})



function checkWeatherForCityId() {
  const defaultCityId = "2950159";
  userCityId ? getWeather(userCityId) : getWeather(defaultCityId)
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