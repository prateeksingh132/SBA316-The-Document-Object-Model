
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
// Step 4: use BOM methods
///// Step 5: using event listeners and form validation logic: /////
// inside the event listener (submit), first, start with preventDefault() to stop reload.
// get the values from the input fields (username, password, confirm password) and store them in variables.
// validation check: if password !== confirmPassword, then its an error.
// if error: change the border style of input to red. show a window.alert() message. and return (stop the function).
// if no error: reset the style back to the default one.
//////// start DOM MANIPULATION (Step 6): 
// create a new div element (successCard). add a class to it for styling.
// create h3 element for welcome message. add text content.
// create p element for details. add text content.
// create a button element (closeBtn). add text content.
// append h3, p, and button to the successCard div.
// finally, append the successCard to the messageArea div in the HTML.
// clear the form inputs.
/////// Traversal logic (Step 7):
// add a click event listener to the new close button.
// inside this listener, find the parent of the button using .parentNode property.
// remove that parent from the messageArea using .removeChild().
// Step 8: add another event listener (input event); i have to create another event listener for satisfy one of the requirements (include input with DOM event-based validation.), i chose input event so that i can get real-time feedback. If username is too short ( like < 3), make outline orange.
//


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
const messageArea = document.querySelector('#dynamicMessageArea');


/////// Step 4: 
// using BOM (Browser Object Model) 
// Requirement: use at least one BOM property or method.
// Goal: i wannna check if the user is on a small screen (mobile).
// i am just logging it for now, but in a real app I might show a different layout (maybe for capstone?).

console.log(`Window Width is: ${window.innerWidth}`);

if (window.innerWidth < 600) {
    console.log("using BOM (Browser Object Model)");
    console.log("Note: user is on a mobile sized screen.");
}




//////// Step 5: 
// using event listeners and form validation logic
// Goal: Listen for the 'submit' event on the form.
// Important: i need to use event.preventDefault() otherwise when the page refreshes i will lose my data.
// the browser refreshes by default, preventDefault stops that

registerForm.addEventListener('submit', function (event) {

    ////////////TESTING
    //console.log('TESTING: event: ', event);
    ////////////

    // preventing default refresh behavior
    //event.preventDefault();

    console.log("Form submitted... Starting validation check.");

    // Step 5a: form validation logic
    // i need to check if passwords match.

    const passwordValue = passInput.value;
    const confirmValue = passConfirmInput.value;
    const usernameValue = userInput.value;

    ////////////TESTING
    // console.log('TESTING: passwordValue: ', passwordValue);
    // console.log('TESTING: confirmValue: ', confirmValue);
    // console.log('TESTING: usernameValue: ', usernameValue);
    ////////////

    ////// Error Handling Check:
    // if passwords don't match, i need to show an error and STOP the function.
    if (passwordValue !== confirmValue) {
        console.log("Error: Passwords do not match.");

        // Requirement: Modify style or class using DOM
        // Goal: i will change the border to red to show visually the error.
        passConfirmInput.style.border = "2px solid red";
        passConfirmInput.style.backgroundColor = "#ffe6e6";

        // Requirement: Use BOM method (window.alert)
        window.alert("Error: Passwords do not match. Please try again.");
        return; // this stop the function here.
    }

    // now, if we get here, this means validation passed.
    // so now, we just reset the styles just in case they were red from a previous error
    passConfirmInput.style.border = "2px solid #dfdddd";
    passConfirmInput.style.backgroundColor = "white";



    /////////// Step 6: 
    // DOM Manipulation (adding elements)
    // Goal: i am gonna create a "Success Card" and add it to the dynamicMessageArea div.


    ///// Requirement: Create element, append element, modify textContent.

    // 1. create the main container div
    const successCard = document.createElement('div');

    // 2. add class for styling (i added the .success-card in css)
    successCard.classList.add('success-card');


    ////////////TESTING
    //console.log('TESTING: successCard: ', successCard);
    ////////////

    // 3. create the heading
    const heading = document.createElement('h3');
    // using template literal
    heading.textContent = `Welcome, ${usernameValue}!`;

    // 4. create the paragraph text
    const para = document.createElement('p');
    // using template literal
    para.textContent = `You have successfully joined GadgetShack.`;

    // 5. create a close button for this message
    const closeBtn = document.createElement('button');
    closeBtn.textContent = "Close";
    // add class for styling (i added the .close-btn in css)
    closeBtn.classList.add('close-btn');

    // 6. append everything together (it shows parent-child relationship)
    successCard.appendChild(heading);
    successCard.appendChild(para);
    successCard.appendChild(closeBtn);


    ////////////TESTING
    //console.log('TESTING: successCard: ', successCard);
    ////////////

    // 7. append the whole success card to the DOM (messageArea)
    // for this, first, i have to clear any old messages so they don't mess things up
    messageArea.innerHTML = '';
    messageArea.appendChild(successCard);


    ////////////TESTING
    //console.log('TESTING: messageArea: ', messageArea);
    ////////////

    // if we are here, then i just need to clear the form inputs since we are done

    // userInput.value = '';
    // emailInput.value = '';
    // passInput.value = '';
    // passConfirmInput.value = '';

    // Requirement: Iterate over a collection of elements to accomplish some task.
    // Goal: so instead of clearing the inputs individually like above, i am gonna just iterate over the inputs using for-loop and will clear them. for this i will need to get all the inputs using queryselectorall.
    const allInputs = registerForm.querySelectorAll('input');

    ////////////TESTING
    //console.log('TESTING: allInputs: ', allInputs);
    ////////////

    for(let i=0;i<allInputs.length;i++){
        allInputs[i].value = '';
    } 



    ////////// Step 7: 
    // DOM traversal and removing elements
    // Goal: when the 'Close' is clicked, i am gonna remove the success message.


    ////// Requirement: iterate/navigate between parent-child.

    closeBtn.addEventListener('click', function (closeEvent) {
        // DOM Traversal: i am gonna find the parent of the button (which is the successCard div)
        const parentDiv = closeBtn.parentNode;

        ////////////TESTING
        //console.log('TESTING: parentDiv: ', parentDiv);
        ////////////

        // DOM Removal
        messageArea.removeChild(parentDiv);

        ////////////TESTING
        //console.log('TESTING: messageArea: ', messageArea);
        ////////////

        console.log("Success message removed using parentNode.");

        console.log("Form successfully submitted...");
    });

});



/////////// Step 8: 
// Adding another event listener (input event)
// Requirement: include input with DOM event-based validation.
// Goal: i have to create another event listener for this requirement, i chose input event so that i can get real-time feedback. If username is too short ( like < 3), make outline orange.

userInput.addEventListener('input', function(inputEvent) {
    
    //console.log("User is typing...");

    ////////////TESTING
    // console.log('TESTING: inputEvent: ', inputEvent);
    ////////////TESTING

    ////////////TESTING
    // console.log('TESTING: userInput.value.length: ', userInput.value.length);
    ////////////TESTING
    

    // Requirement: Modify at least one attribute of an element in response to user interaction.
    // i am changing the style of the input in response to the input event
    if (userInput.value.length < 3) {
        // show warning color
        userInput.style.borderColor = "orange"; 
    } else {
        // show good color
        userInput.style.borderColor = "#2ecc71"; // green
    }
});