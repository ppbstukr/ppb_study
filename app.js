const ppb = document.querySelector("#title");

function handleTitleClick(){
  ppb.classList.toggle("clicked")
};

ppb.addEventListener("click", handleTitleClick);