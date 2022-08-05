const userInput = document.getElementById("userInput");
const addBtn = document.getElementById("addThings");
const myList = document.getElementById("toDoThings");
myList.innerHTML = "";

function inputLength() {
  return userInput.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  const inputValue = userInput.value;
  const btnRemove = document.createElement("button");
  const checkBox = document.createElement("input");

  btnRemove.innerHTML = "<img src='./icons8-lixo-64.ico' width='14px'>";
  li.appendChild(btnRemove);
  btnRemove.id = "btnRemoveStyle";
  btnRemove.onclick = itemRemove;

  //setting attributes to our checkbox
  checkBox.type = "checkbox";
  checkBox.name = "name";
  checkBox.value = "value";
  checkBox.onchange = checkBoxChecked;
  myList.appendChild(li);
  li.appendChild(checkBox);

  li.appendChild(document.createTextNode(inputValue));
  myList.appendChild(li);
  userInput.value = "";
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

function checkBoxChecked(event) {
  console.log(event.target.parentElement);
  if (event.target.checked == true) {
    event.target.parentElement.style.textDecoration = "line-through";
  } else {
    event.target.parentElement.style.textDecoration = "none";
  }
}

function itemRemove(event) {
  event.currentTarget.parentElement.remove();
}

addBtn.addEventListener("click", addAfterClick);
userInput.addEventListener("keypress", addListAfterKeypress);
