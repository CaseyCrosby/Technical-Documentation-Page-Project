const navbar = document.getElementById("navbar")
const navBtn = document.getElementById("nav-btn")

navBtn.addEventListener("click", () => {
    if (navbar.style.display == "none") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none"
    }
})