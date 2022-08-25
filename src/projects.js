function displayProjects() {
  const mainDiv = document.querySelector("main");
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects-container");

  mainDiv.appendChild(projectsDiv);

  return mainDiv;
}

export default displayProjects;
