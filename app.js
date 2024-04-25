const h1 = document.querySelector("#title");

console.dir(h1);
h1.innerText = "hi ppb";

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function copy() {
  alert("copier!");
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;

function handelWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowOffLine() {
  alert("Not conected wifi");
}
function handleWindowOnLine() {
  alert("good");
}

function clickMouseRight() {
  h1.innerText = "Mouse right";
}
window.addEventListener("resize", handelWindowResize);
window.addEventListener("copy", copy);
window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnLine);

function mouseRight() {
  h1.innerText = "mouse right";
}
window.addEventListener("contextmenu", mouseRight);
