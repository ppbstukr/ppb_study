const ppb = document.querySelector("#title");


const superEventHandler = {
    mouseEnter: function () {
      ppb.innerText = "ppb mouse enter!";
    },
    mouseLeave: function () {
      ppb.innerText = "ppb mouse leave!";
    },
    resize: function () {
      ppb.innerText = "ppb resize!";
    },
    rightMouse: function () {
      ppb.innerText = "ppb rightMouse!";
    },
  };
  
  ppb.addEventListener("mouseenter", superEventHandler.mouseEnter);
  ppb.addEventListener("mouseleave", superEventHandler.mouseLeave);
  window.addEventListener("resize", superEventHandler.resize);
  window.addEventListener("contextmenu", superEventHandler.rightMouse);