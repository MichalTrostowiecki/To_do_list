function displayInbox() {
  const mainDiv = document.querySelector(".main");
  const inbox = document.createElement("div");
  inbox.classList.add("inbox");

  mainDiv.appendChild(inbox);

  return mainDiv;
}

export default displayInbox;