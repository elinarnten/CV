window.onload = main;

function main() {
   addEventListeners();
}
function addEventListeners() {
    document.onclick = hideMenu;

    const myName = document.getElementById('name');
    myName.onclick = getStartPage;

    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.onclick = showMenu;

    const resume = document.getElementById('resume');
    resume.onclick = getResume;

    const portfolio = document.getElementById('portfolio');
    portfolio.onclick = getPortfolio;
    
    const aboutMe = document.getElementById('aboutMe');
    aboutMe.onclick = getAboutMe;
}

function showMenu(event) {
    document.getElementById('mobile-menu-nav').classList.toggle('show');
    event.stopPropagation();

}
function hideMenu() {
    document.getElementById('mobile-menu-nav').classList.remove('show');
}
function getResume() {
    window.location.href = "http://127.0.0.1:5501/resume.html";
    window.location.href = "elinarnten.github.io/Laboration2/resume.html"
}
function getPortfolio() {
    window.location.href = "http://127.0.0.1:5501/portfolio.html";
}
function getAboutMe() {
    window.location.href = "http://127.0.0.1:5501/aboutMe.html";
}
function getStartPage() {
    window.location.href = "http://127.0.0.1:5501/index.html";
}