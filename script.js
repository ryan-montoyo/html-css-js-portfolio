function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Toggle body overflow
    document.body.classList.toggle("menu-open");
}


// Dark / light mode

const btn = document.getElementById('modeToggle');
const btn2 = document.getElementById('modeToggle2');
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme"); 
const images = document.querySelectorAll(".about-pic");

if(currentTheme === "dark"){
    setDarkMode();
}

btn.addEventListener("click", function (){
    setTheme();
});

btn2.addEventListener("click", function (){
    setTheme();
});

function setTheme(){
    let currentTheme = document.body.getAttribute("theme");

    if(currentTheme === "dark"){
        setLightMode();
    }
    else{
        setDarkMode();
    }
}

function setDarkMode(){
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");

    // Update icon sources to dark mode
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
        icon.src = icon.getAttribute("src-dark");
    });

    // Update image sources to dark mode
    const images = document.querySelectorAll(".about-pic");
    images.forEach((image) => {
        image.src = image.getAttribute("src-dark");
    });
}

function setLightMode(){
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");

    // Update icon sources to light mode
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
        icon.src = icon.getAttribute("src-light");
    });

    // Update image sources to light mode
    const images = document.querySelectorAll(".about-pic");
    images.forEach((image) => {
        image.src = image.getAttribute("src-light");
    });
}





