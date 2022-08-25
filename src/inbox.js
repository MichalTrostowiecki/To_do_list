function displayInbox(mainDiv) {
  const inbox = document.createElement("div");
  inbox.classList.add("inbox-container");

  mainDiv.appendChild(inbox);

  return mainDiv;
}

export default displayInbox;
