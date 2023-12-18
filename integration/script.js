let mobileMenuBtn = document.querySelector(".mobile-menu-button");
let topHeader = document.querySelector(".top-header");
let mobileMenu = document.querySelector(".top-header .content");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
    topHeader.classList.toggle("expanded"); // Alterna a classe expanded
});
