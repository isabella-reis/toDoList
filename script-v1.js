//This is me studying and understanding everything so I could do the final script

//Storing our user's input
const userInput = document.getElementById("userInput");
//Grabbing our button so we can use it on our addEvent thing
const button = document.getElementById("addThings");
//Grabbing our ul element so we can use it too
const myList = document.getElementById("toDoThings");
myList.innerHTML = "";

//Refactoring everything cuz less it's better and we don't wanna repeat ourselves
function inputLength() {
  return userInput.value.length;
}

//Everything here is so we can create a new li element everytime the user clicks our button or keypress enter.
//And we can append our new li element to our ul WITH the value that the user input.
function createListElement() {
  const li = document.createElement("li");
  const doneButton = document.createElement("button");
  li.appendChild(document.createTextNode(userInput.value));
  myList.appendChild(li);
  userInput.value = ""; //So it cleans our input after the user add it to their list
  doneButton.appendChild(document.createTextNode("Finished"));
  myList.appendChild(doneButton);
}

function addAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  //When our Enter is pressed, append a Child to our ul
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

function doneButtonClicked(event) {
  
}

//We're adding a listener so when the user click/ keypress, it calls our function.
button.addEventListener("click", addAfterClick);
userInput.addEventListener("keypress", addListAfterKeypress);
