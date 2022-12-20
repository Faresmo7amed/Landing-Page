/**
 * Define Global Variables
 * 
*/
var sections = Array.from(document.querySelectorAll('section'));
var navList = document.getElementById('navbar-list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/*this function for create and add items in nav list*/
function newList() {
    sections.forEach(section => {
/*to now the section number name*/
        sectionNum = section.getAttribute('data-nav');
/*to now the section id*/
        sectionPath = section.id;
/*to ceate the section items*/
        listLink = document.createElement('li');
/*to adding items*/
        listLink.innerHTML = `<a class="menu-link" href=" #${sectionPath}">${sectionNum}</a>`;
/*to add menu*/
        navList.appendChild(listLink);
    })
}
function sectionView(element) {
/*to determine viewed section with bounding*/
    var postion = element.getBoundingClientRect();
/*to get position*/
    return (postion.top >= 0);
}
function activeToggle() {
/*to loope all over all sections*/
    for (section of sections) {
/*if the one of the main Scetions in view*/ 
        if (sectionView(section)) {
/*to apply active section properties*/
            if (!section.classList.contains(`your-active-class`)) {
                section.classList.add(`your-active-class`);
            }
        } else {
/*to remove active section properties*/
            section.classList.remove(`your-active-class`);
        }
    }
}
// build the nav
newList();
// Scroll to anchor ID using scrollTO event
document.addEventListener(`scroll`, activeToggle);