const xhr = new XMLHttpRequest();
const url = "https://api.datamuse.com/words?rel_rhy=";

let input = document.getElementById("text-input");
let output = document.getElementById("text-output");
let submitButton = document.getElementById("submit-button");

submitButton.onclick = function makeCheck() {
  if (input.value) {
    getServerResponse();
  } else {
    alert("Please type in a word you like to see rhymes of.");
  }
};

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getServerResponse();
  }
});

function getServerResponse() {
  let stringToSend = `${url}${input.value}`;

  fetch(`${stringToSend}`)
    .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      // get every single result from JSON response in string format
      jsonResponse.forEach((element) => {
        output.innerHTML += element.word + "\n"; // render Response to innerHTML of textarea
      });
    });
    cleanOutput();
}

function cleanOutput() {         //clean the textarea
  if (output.innerHTML != "") {
    output.innerHTML = "";
  }
}