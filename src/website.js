import displayInbox from "./inbox";
import displayProjects from "./projects";

function loadPage() {
  const mainDiv = document.querySelector("main");

  displayInbox(mainDiv);
  displayProjects(mainDiv);
  addButton(mainDiv);
}

function addButton(mainDiv) {
  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.classList.add("addButton");
  mainDiv.appendChild(addButton);

  addButton.addEventListener("click", newThing(mainDiv));
}

function newThing(mainDiv) {
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("inputDiv");

  const input = document.createElement("input");
  input.classList.add("tittle");

  mainDiv.appendChild(inputDiv);
  mainDiv.appendChild(input);

  const userInput = document.createElement("p");
  userInput.textContent = input.value;
  mainDiv.appendChild(userInput);
}

function addForm() {}

export default loadPage;
