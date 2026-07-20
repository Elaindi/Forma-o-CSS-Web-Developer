const menu = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

menu.addEventListener("click", () => {

    sidebar.classList.toggle("close");
    content.classList.toggle("expand");

});