const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
const navigationLinks = navigation.querySelectorAll("a");
const currentYear = document.getElementById("currentYear");

menuButton.addEventListener("click", () => {
    const menuIsOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);
    menuButton.textContent = menuIsOpen ? "✕" : "☰";
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

currentYear.textContent = new Date().getFullYear();