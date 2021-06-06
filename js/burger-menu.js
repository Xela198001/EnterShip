const menuElem = document.querySelector("#menu");
const buttonOpen = document.querySelector(".button-burger");
const buttonClose = menuElem.querySelector(".button-close");
console.log('buttonClose: ', buttonClose);

function handleLink(event) {
  
}

function menuShowHide(event) {

  if (menuElem.matches(".hidden")) {
    menuElem.classList.remove('hidden');
    menuElem.addEventListener("click", function menuHide(event) {
      const target = event.target;
      if (target.matches(".item-link")) {
        menuShowHide();
        menuElem.removeEventListener("click", menuHide);
      }
    });
  } else {
    menuElem.classList.add("hidden");
  }
}

buttonOpen.addEventListener("click", menuShowHide);
buttonClose.addEventListener('click', menuShowHide);

