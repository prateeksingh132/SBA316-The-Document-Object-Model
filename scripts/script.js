
///// Objectives from assignment doc
// You will create a small single-page web application.
// Use DOM properties, methods, and techniques to create a web application that provides a dynamic user experience.
// Use BOM properties, methods, and techniques to facilitate creation of a dynamic web application.
// Demonstrate profi ciency with event-driven programming and DOM events.
// Implement basic form validation using any combination of built-in HTML validation attributes and DOM-event-driven JavaScript validation.

/////////GOAL
// GOAL: i am gonna create a single page application for GadgetShack, my tech ecommerce website that i created for SBA 307.
// GOAL: This page for my ecommerce website, GadgetShack, will be a registration form, where user can enter their username, email and password and it show a success message when user submits it properly.
// GOAL: This page should not reload, but content should change.
// GOAL: Make sure it satisfy all the DOM/BOM/Validation requirement mentioned in the doc, --> that will be in my script.
// GOAL: Focus more on User experience: Since its a single page, maybe focus more of styling, it should look good (do it later when i have time)

///////// Things to keep in mind:
// 1. Use DOM methods (createElement, appendChild)
// 2. Validate forms (dont let empty password submit)
// 3. Make it look good (use SBA 307 styles)
// 4. Use BOM properties (window, alert)

//// Remember (from dylan/lecture):
// 1. Get elements first using querySelector or getElementById.
// 2. Use Event Listeners (click, submit, etc).
// 3. Prevent default form submission behavior.
// 4. Use DOM properties to modify the page (innerHTML, style, classList).
// 5. Use BOM properties.

//////// WHAT I KNOW:
// Its supposed to be a single page website
// Combine topics of HTML/CSS and Javascript/DOM/BOM
// The main gist of this SBA is showing usage of DOM/BOM/Form validation in JS script, the HTML and CSS styling is secondary (I will beautify the page when I have time), but I wanna make sure first that I get the requirement mentioned in the doc right  
///// NOTE: so, this is basically a project to manipulate the DOM to create a dynamic user experience. so, the idea is that i am gonna create a form for registration and i need to show a success message when user submits it properly.
///// I have HTML elements; the form, inputs (username, password etc) and an empty div for messages (added in html as dynamicMessageArea).
// script.js is where all my logic goes. I have to connect the HTML to JS.
/////////// I have to first establish the connection between the html elements and my js code:
/// 1. I need to select the elements. I can do that using getElementByIdor queryselctor.
/// 2. The form will need a event listener. It should be 'submit' event. and i must stop the page reload using preventDefault(), otherwise i lose all my data.
/// 3. Validation is key here. I need to check if 'password' and 'confirm password' are same. HTML handles the 'required' part, but JS must handle the matching logic.
/// 4. Note: If they dont match, i need to alert the user, with like a message and even better, just change the style (maybe border color) to show error. it will look good as well 
/// 5. DOM Creation: If everything is good, i need to create a new element. which shows a successful submission, maybe like a 'Success Card'. It is not in HTML, so i will have to create it using createElement().
/// 6. This success card will have a heading, some text and a CLOSE button (important, think of logic here how to acheive this).
/// 7. So, i will need to use appendChild() to put the text inside the card, and then put the card inside the dynamicMessageArea div, which i created in the HTML.
/// 8. VERY IMPORTANT: The close button needs to work. when clicked, it should remove the success card. (Think of how to get this working)
/// 

////////LOGIC - step by step
// Step 1. Create a simple registration form in index.html, dont make it complicated, keep it simple
// Step 2. Create simple styling for this form page. Remember: The main gist of this SBA is showing usage of DOM/BOM/Form validation in JS script, the HTML and CSS styling is secondary (I will beautify the page when I have time), but I wanna make sure first that I get the requirement mentioned in the doc right. Keep the styling similar to SBA 307 GadgetShack, dark blue and orage theme.  
// Step 3. Script work: get the dom elements
// Step 4: 


//////////////////////////////////// SBA 316

console.log("\n");
console.log("////////////// SBA 316: The Document Object Model ////////////// ");
console.log("\n");

/////// Step 3: 
// Getting the required DOM elements first
// Goal: I need to select the form and inputs so that I can use them later.
// I should just simply use getElementById or querySelector as its one of the requirment as well.
console.log("Step 3: Getting the required DOM elements first... ");
console.log("\n");

const registerPage = document.getElementById('registerPage');
const registerForm = document.getElementById('registerForm');
const userInput = document.getElementById('user');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const passConfirmInput = document.getElementById('passConfirm');


// Requirement: Use querySelector.
// I am using querySelector here to grab the div where i will put the message.
const messageArea = document.querySelector('dynamicMessageArea');


/////// Step 4: 
// using BOM (Browser Object Model) 
// Requirement: use at least one BOM property or method.
// Goal: i wannna to check if the user is on a small screen (mobile).
// i am just logging it for now, but in a real app I might show a different layout (maybe for capstone?).

console.log(`Window Width is: ${window.innerWidth}`);

if (window.innerWidth < 600) {
    console.log("using BOM (Browser Object Model)");
    console.log("Note: user is on a mobile sized screen.");
}
