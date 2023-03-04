const MenuToggle = document.querySelector(".MenuToggle");
const MenuToggleI = document.querySelector("#MenuToggleBurger");
const menuBurger = document.querySelector("#menuBurge");

MenuToggle.addEventListener("click", BtnToggleActivo);

function BtnToggleActivo() {
  menuBurger.classList.toggle("menuActivo");
  const BTN_Activo = menuBurger.classList.contains("menuActivo");
  MenuToggleI.classList = BTN_Activo ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
