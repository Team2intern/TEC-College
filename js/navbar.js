const customNav = document.getElementsByClassName("navbar-collapse")[0];
const customNavIcon = document.getElementsByClassName("navbar-toggler")[0];

customNavIcon.addEventListener("click", () => {
  customNavIcon.classList.toggle("collapsed");
  let navAttr = customNavIcon.getAttribute("aria-expanded");
  if (navAttr == false) {
    navAttr = true;
  } else {
    navAttr = false;
  }
  customNavIcon.setAttribute("aria-expanded", navAttr);
  customNav.classList.toggle("show");
});
