const loginForm = document.querySelector("#app");
const loginInput = document.querySelector("#app input");
const loginButton = document.querySelector("#app button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "";
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit)
} else {}