/*Exercise 1: Multi-Level Click Handling (Event Bubbling & Target)
Task Requirements
- Create a gray <div> containing an orange <button> inside it.
- When the button is clicked, show this message in the console:
- Button clicked! Target: BUTTON, CurrentTarget: BUTTON
- When any other area of the div is clicked, show:
- Div clicked! Target: DIV, CurrentTarget: DIV
- When the body is clicked, show:
- Body clicked! */

const button = document.querySelector("button")
const div = document.querySelector("div")
const body = document.body

button.addEventListener("click", (event) => {
  console.log(`Button clicked! Target: ${event.target.nodeName}, CurrentTarget: ${event.currentTarget.nodeName}`)
})

div.addEventListener("click", (event) => {
  console.log(`Div clicked! Target: ${event.target.nodeName}, CurrentTarget: ${event.currentTarget.nodeName}`)
})

body.addEventListener("click", () => {
  console.log("Body clicked!")
})


/*Exercise 2: Membership Form with Validation
Task Requirements
- Create a <form> that contains:
- Username input (type="text")
- Password input (type="password")
- A submit button
- When clicking the submit button:
- Prevent the default form submission (preventDefault())
Validate:
If the username field is empty → show alert "Please enter a username."
If the password has fewer than 6 characters → show alert "Password is too short."
Otherwise → show alert "Registration successful!" */

const form = document.querySelector("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const submitButton = document.querySelector("input[type='submit']")

submitButton.addEventListener("click", (event) => {
  event.preventDefault()

  if (username.value.trim() === "") {
    alert("Please enter a username.")
  } else if (password.value.length < 6) {
    alert("Password is too short.")
  } else {
    alert("Registration successful!")
  }
})

/*Exercise 3: DOM-Ready User Interaction
Task Requirements
- When the DOM content is fully loaded (DOMContentLoaded), create an <h2> element with the text:
Welcome! The page is ready.
- Then append it to the <body>.
When all resources (images, CSS, scripts) are fully loaded (load event on window), log this message:
All resources are fully loaded!
- Add an input field with the ID "message".
Whenever the user types into it (input event), display the typed text in a <p> element below it in real time. */

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready!");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome! The page is ready.";
  document.body.prepend(heading);
})

window.addEventListener("load", () => {
  console.log("All resources are fully loaded!");
})

const input = document.getElementById("message");
const display = document.querySelector("p");

input.addEventListener("input", () => {
  display.textContent = input.value;
})