console.log("I am in")

const burger = document.querySelector(".header__burger")
const mobileMenu = document.querySelector(".mobile__menu")
burger.addEventListener("click", () => {
    burger.classList.toggle("open")
    mobileMenu.classList.toggle("open")
})

window.addEventListener("resize", () => {
    burger.classList.remove("open")
    mobileMenu.classList.remove("open")
});