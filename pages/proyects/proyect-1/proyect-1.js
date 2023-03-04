const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const DropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", DropdownMenuOpen);

function DropdownMenuOpen() {
  DropdownMenu.classList.toggle("open");
  const isOpen = DropdownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
