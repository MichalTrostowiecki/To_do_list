import displayInbox from "./inbox";
import displayProjects from "./projects";

// this functions creates HMTL for my website
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

  const form = document.createElement("form");
  form.classList.add("form");
  form.id = "form";

  const tittle = document.createElement("input");
  tittle.classList.add("tittle");
  tittle.type = "text";
  tittle.placeholder = "Thing to do";

  const dueDate = document.createElement("input");
  dueDate.classList.add("dueDate");
  dueDate.type = "date";
  dueDate.min = "2020-01-01";

  const description = document.createElement("textarea");
  description.classList.add("description");
  description.rows = "5";
  description.cols = "40";

  const enterBtn = document.createElement("button");
  enterBtn.classList.add("enterBtn");
  enterBtn.textContent = "Add";
  enterBtn.type = "button";
  enterBtn.addEventListener("click", () => {
    toDoThingCreation(tittle, dueDate, description);
  });

  mainDiv.appendChild(popUpForm);
  popUpForm.appendChild(form);
  form.appendChild(tittle);
  form.appendChild(enterBtn);
  form.appendChild(dueDate);
  form.appendChild(description);
}

// this function will create new object data from user input
function toDoThingCreation(tittle, dueDate, description) {
  const item = new ToDoThing(tittle.value, dueDate.value, description.value);

  console.log(item);
}

// This is Class for new TodoThing. I will have to place it in the right place maybe in the inbox
class ToDoThing {
  constructor(tittle, dueDate, description) {
    this.title = tittle;
    this.dueDate = dueDate;
    this.description = description;
  }
}

//These two functions will open and close forms to add new ToDo thing
function openForm() {
  document.querySelector("popUpForm").style.display = "block";
}

function closeForm() {
  document.querySelector("popUpForm").style.display = "none";
}

export default loadPage;
