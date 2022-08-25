import displayInbox from "./inbox";
import displayProjects from "./projects";

function loadPage() {
  const mainDiv = document.querySelector("main");

  displayInbox(mainDiv);
  displayProjects(mainDiv);
  addButton(mainDiv);
  popUpForm(mainDiv);
}

function addButton(mainDiv) {
  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.classList.add("addButton");
  mainDiv.appendChild(addButton);

  addButton.addEventListener("click", openForm);
}

// In this function I will want to create a form with inputs, then read value put by user
// into input and convert it into a new object using a class or fuctory function
function popUpForm(mainDiv) {
  const popUpForm = document.createElement("div");
  popUpForm.classList.add("popUpForm");

  mainDiv.appendChild(popUpForm);
}

//These two functions will open and close forms to add new ToDo thing
function openForm() {
  document.querySelector("popUpForm").style.display = "block";
}

function closeForm() {
  document.querySelector("popUpForm").style.display = "none";
}

export default loadPage;
