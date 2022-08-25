function displayProjects(mainDiv) {
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects-container");

  mainDiv.appendChild(projectsDiv);

  return mainDiv;
}

export default displayProjects;
