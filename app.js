/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const list = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment()
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
/*
//I tried to call function here to build the nav sections, but I used another method as demanded
section.addNewSection();
section.addNewSection();
section.addNewSection();
section.addNewSection();
menu.buildMenu();
goToTop();
*/
// I want to build a loop over sections  to get id and data__nav for each section
// We can use for loop , forEach , function or object

sections.forEach(section =>{
    // we made arrow function instead of call back function
    // I want section id and section data__nav attriute
    const sectionId = section.getAttribute("id")  //we also can use instead : section.id
    const sectionTitle = section.getAttribute("data-nav")  // we also can use instead: section.dataset.nav 
    const listItem = document.createElement("li")
    const listLink = document.createElement("a")
// I want to add href, title and class attriute to links  
    listLink.href = `#${sectionId}`   //we also can use this instead :  listLink.setAttribute(href, "#" + sectionId)
    listLink.textContent = sectionTitle;
    listLink.classList.add("menu__link");
    // I'll add a smooth scroll to anchors here
    listLink.addEventListener("click", event =>{   // event = evt = horse
        event.preventDefault();
        section.scrollIntoView({
            behaviour: "smooth"
        })
    })   
    listItem.appendChild(listLink);
    fragment.appendChild(listItem);  //we put all listItems in a fragment to make it easier to load

})
list.appendChild(fragment);             //fragment will load out of forEach

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
// We will make observer pattern here to callBack options
const links = document.querySelectorAll("a.menu__link")
const callBack = (entries) =>{
    let section = entries[0];
    section.target.classList.remove("your-active-class");
    //notice : I can change these words : (your-active-class) in CSS file so as we can change them here in J.S file
    if(section.isIntersecting) {                 // intersecting means if section is existing in the page
        section.target.classList.add("your-active-class"); 
        links.forEach(link =>{
            if (link.textContent === section.target.dataset.nav) {
               link.classList.add("active-that-link");
            } else {
                link.classList.remove("active-that-link");
            }
        })
    } else{
        section.target.classList.remove("your-active-class");
    }
}
const options = {
    root: null,
    threshold: 0.3
}    
const observer = new IntersectionObserver(callBack, options);

// Build menu 
//here I will apply what to observe on 
window.addEventListener("scroll", event => {
    sections.forEach(section =>{
        observer.observe(section);
    })
})
// Scroll to section on link click

// we can use another method to scroll : 
/*
window.addEventListener("scroll", Event =>{
    sections.forEach(section =>{
        observer.observe(section);
    })
})
*/
//another way to 
/*
wondow.addEventListener("scroll", event={
    sections.forEach(section =>{
        const sectionTop = section.getBoundingClientRect().top;
        section.classList.remove('your-active-class')
        if(sectionTop >= 0 && sectionTop < 250) {
            section.classList.add("your-active-class")
            links.forEach(link => {
                if(link.textContent === section.dataset.nav){
                    link.classList.add("active-that-link")    
                }else{
                    link.classList.remove("active-that-link")    

                }
            })       
        }else{
            section.classList.remove('your-active-class')

        }
    })
})
*/

//we add the responsive class to to the topnav when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



// Set sections as active
