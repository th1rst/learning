//initialize GridStack.js
var grid = GridStack.init({float: true})   

//Can grid be edited on page load? default: true
let isInEditMode = true;      

//DOM References
const lockButton = document.getElementById("lock-button");
const gridStackItems = document.querySelectorAll(".grid-stack-item");
const sidenav = document.querySelector(".sidenav");
const sidenavElements = document.querySelectorAll(".sidenav-element")
const mainWindow = document.querySelector(".main-window");
const dropTarget = document.querySelector(".drop-target")
const addRemoveElementsButton = document.getElementById("add-remove-button")





/* ----- SETTINGS MENU ----- */

lockButton.addEventListener("click", function toggleGrid() {
  if (isInEditMode) {
    grid.movable(".grid-stack-item", false);              //disable dragging
    grid.resizable(".grid-stack-item", false);            //disable resizing
    lockButton.value = "Enable Grid Editing"              //change lock button
    gridStackItems.forEach(element => {                   //remove border
        element.style.border = "none";
    });
    isInEditMode = false;                                  //change variable
  } else {
    grid.movable(".grid-stack-item", true);
    grid.resizable(".grid-stack-item", true);
    lockButton.value = "Lock Grid Editing"
    gridStackItems.forEach(element => {
        element.style.border = "3px solid lightgrey";
    });
    isInEditMode = true;
  }
});




/* ----- SIDEBAR NAVIGATION ----- */

addRemoveElementsButton.addEventListener("click", toggleSidenav) 

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

    //toggle the corresponding flexbox container div of the add and remove button
    toggleButtonDiv(buttonContainer)

    function toggleButtonDiv(element) {
      if (element.style.display == "none") {
        element.style.display = "flex";
          //toggle add and remove buttons
          addRemoveAndSettingsButtons.forEach(element => {
            element.style.display = "block"
          });
      } else {
        element.style.display = "none";
        //toggle add and remove buttons
        addRemoveAndSettingsButtons.forEach(element => {
          element.style.display = "none"
        });
      }
    }
  })
})





function getWeather() {
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
        id: 15,
        cityid: '2950159',
        appid: 'be57e605be76597fe7dfa2e9513f1392',
        units: 'metric',
        containerid: 'openweathermap-widget-15',
    });

    (function() {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    })();
}




getWeather();