# SBA 316: The Document Object Model

This is a project for the DOM Manipulation assessment. I decided to continue with my "GadgetShack" theme (from my previous SBA 307 project). "GadgetShack" is an electronics e-commerce website. I wanted to create a dynamic and responsive registration page for this website. The goal was to create a single page web application where users can register for the club and get real-time feedback. I wanted to keep this registration website simple (keeping user's perspective in mind) and keep the theme similar to my SBA 307 website for future integration (maybe as my capstone project).

# Technology Used
* HTML
* CSS (Flexbox, Transitions)
* Javascript (DOM and BOM)

# Features
* **Dynamic Message:** The success message is not in the HTML file. It is created entirely by Javascript (`createElement`) when the user submits the form.
* **Form Validation:** I used both HTML validation (`required`, `minlength`) and Javascript logic to check if the password and confirm password fields match.
* **Real-time Feedback:** The username input changes color (orange to green) as you type, using the `input` event listener.
* **Navigate between parent-child:** I used `parentNode` in the close button event listener so that i can look up the DOM tree and remove the success message card.
* **Event Listeners:** I used 5 event listeners (submit, click, input, focus and blur) to handle different actions.
* I checked if user is on mobile or desktop (using `window.innerWidth` in BOM). I also used `window.alert` for error message.
* I used a blue and orange color theme (similar to SBA 307) so that i can integrate these two projects later on.


# Testing

I have created (and used during code creation) test points (log statement) at multiple places in the code, I have not removed them. They are commented at the time of submission and can be uncommented for future debugging and code check. These code checks looks something like:


////////////TESTING

//console.log('TESTING: assignment: ', assignment);

////////////



# Reflection

* **What could you have done differently during the planning stages of your project to make the execution easier?**

(1) I should have drawn the DOM tree structure on a paper first. When i started writing the JS code to create the success card, i got confused about which element is the parent and which is the child (like appending button to div, or div to container). If i had some sort of visual diagram, the `appendChild` logic would be easier.

(2) I should have planned my CSS classes for the dynamic elements (like `.success-card`) before writing the JS. i had to go back and forth between css and js file to make sure the class names match.

* **Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?**

(1) The requirement to "navigate between parent-child elements" gave me some issue. Usually i would just simply select the element by ID and remove it. To force myself to use the parent-child relationship, i had to figure out how to grab the parent of the close button using `parentNode`. I used `console.log` to check what `parentNode` was returning to debug it.

(2) The requirement to "Iterate over a collection of elements" was tricky because i didn't have a list of items to display. At first, i cleared the input manually, selected each input and cleared them. For this requirement, I created a loop to clear all input fields (selecting them using querySelectorAll) after submission. In future, i will try to plan for a list or array data structure from the start.

* **What would you add to, or change about your application if given more time?**

(1) I would like to save the registered users into a list or `localStorage`. Right now, when i refresh the page or click close, the data is gone.

(2) I would add better error messages that appear below the inputs (in red text) instead of using `window.alert`, which is kinda annoying for the user when it pops up multiple times.

* **Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again:**

(1) Always put the `getElementById` at the top of the file. It keeps the code clean.

(2) **Prevent Default:** Don't forget `event.preventDefault()` inside form submit event listeners. i wasted time debugging why my console logs were disappearing (bcuz the page was reloading).

(3) **BOM:** `window.innerWidth` is very useful for checking if the user is on mobile or regular desktop.

(4) **Testing:** Keep the testing console logs (`///////TESTING`) during code development, it really helps to see if the event listener is actually firing or not.



# References

I referred some examples from stackoverflow and lecture slides (codesandbox examples). Here are the link:

https://stackoverflow.com/questions/65393033/how-to-remove-placeholder-text-in-javascript

https://codesandbox.io/p/sandbox/documentfragment-example-t3dj56?file=%2Fsrc%2Findex.js%3A16%2C24-16%2C35&from-embed




