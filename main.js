window.onload = main;

function main() {
   addEventListeners();
}
function addEventListeners() {
    document.onclick = hideMenu;
    const myName = document.getElementById('name');

    myName.onclick = getAboutMe;
    
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.onclick = showMenu;

    const mobileResume = document.getElementById('mobile-resume');
    mobileResume.onclick = getResume;

    const mobilePortfolio = document.getElementById('mobile-portfolio');
    mobilePortfolio.onclick = getPortfolio;
    
    const mobileAboutMe = document.getElementById('mobile-aboutMe');
    mobileAboutMe.onclick = getAboutMe;
}

function showMenu(event) {
    document.getElementById('mobile-menu-nav').classList.toggle('show')
    event.stopPropagation();

}
function hideMenu() {
    document.getElementById('mobile-menu-nav').classList.remove('show')
}
function getResume() {

}
function getPortfolio() {

}
function getAboutMe() {
    window.location.href = "http://127.0.0.1:5501/index.html";
}