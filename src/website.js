import displayInbox from "./inbox";
import displayProjects from "./projects";

function loadPage() {
  const mainDiv = document.querySelector("main");

  displayInbox(mainDiv);
  displayProjects(mainDiv);
  addNewThing(mainDiv);
}

function addNewThing(mainDiv) {
  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.classList.add("addButton");
  addButton.addEventListener("click", () => {
    console.log("clicked");
  });

  mainDiv.appendChild(addButton);
}

export default loadPage;
