const menuIcon = document.querySelector(".humburger-menu");
const navBar = document.querySelector(".navbar");
menuIcon.addEventListener("click", ()=>{
  navBar.classList.toggle("active")
})