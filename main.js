/**
 * This is where the program begins
 */
window.onload = main;
function main() {
   addEventListeners();
}

/**
 * Listens to the users click command and calls the right function
 */
function addEventListeners() {
    document.onclick = hideMenu;

    const myName = document.getElementById('name');
    myName.onclick = getStartPage;

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    mobileMenuButton.onclick = showMenu;

    const resume = document.getElementById('resume');
    resume.onclick = getResume;

    const portfolio = document.getElementById('portfolio');
    portfolio.onclick = getPortfolio;
    
    const aboutMe = document.getElementById('aboutMe');
    aboutMe.onclick = getAboutMe;
}

/**
 * This function will show the mobile menu
 * @param {object} event 
 */
function showMenu(event) {
    document.getElementById('mobile-menu-nav').classList.toggle('show');
    event.stopPropagation();

}
/**
 * This function will hide the menu
 */
function hideMenu() {
    document.getElementById('mobile-menu-nav').classList.remove('show');
}

/**
 * This function will get the user to resume page
 */
function getResume() {
    window.location.href = "https://elinarnten.github.io/CV/resume.html"
}

/**
 * This function will get the user to portfolio page
 */
function getPortfolio() {
    window.location.href = "https://elinarnten.github.io/CV/portfolio.html"
}

/**
 * This function will get the user to About me page
 */
function getAboutMe() {
    window.location.href = "https://elinarnten.github.io/CV/aboutMe.html"
}

/**
 * This function will get the user to start page
 */
function getStartPage() {
    window.location.href = "https://elinarnten.github.io/CV/"
}
