const menuButton = document.querySelector(".menu-button button");

const menuList = document.querySelector(".menu-list");

menuButton.addEventListener("click", function() {

    menuList.classList.toggle("show");
});  