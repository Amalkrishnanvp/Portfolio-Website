const toggleBtn = document.querySelector(".toggle-btn");
const navItems = document.querySelector(".navbar-items");

function showItems() {
    navItems.classList.toggle("toggle-items");
}

toggleBtn.addEventListener("click", () => {
    showItems();
});
