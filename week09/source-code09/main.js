const whom = prompt("What is your name?", "typing your name");
const confirmYourName = confirm(`You are ${whom}`);
confirmYourName ? alert(`Hello, ${whom}`) : alert(`Hello, guest`);

const okButton = document.querySelector("div>button")
console.log(okButton)

//1. annonymous handler function with bubble event flow (default)
okButton.addEventListener("click", (e) => {
    console.log(`even.target: ${e.target}`)
    console.log("Button was clicked!")
})

/*does not work with annonymouse function
okButton.removeEventListener("click", () => {
    alert("Button was clicked!")
})*/

//2. named function with bubble event flow (default)
function getTarget(e) {
   alert(`${e.target.nodeName} was fired!`)
}
function getMessage() {
  const yourMessage = prompt("What is your message", "typing your message...")
  alert(yourMessage)
}

//3. add more than one handler functions
okButton.addEventListener("click", getTarget)
okButton.addEventListener("click", getMessage)

/*4. remove handler function
okButton.removeEventListener("click", getTarget)*/

okButton.addEventListener("click", (e) => {
  console.log(`event.target: ${e.target}`)
  console.log(`event.currentTarget: ${e.currentTarget}`)
  console.log(`event.eventPhase: ${e.eventPhase}`)
  console.log(`event.type: ${e.type}`)
  console.log("Button was clicked!")
})
const divElement = document.querySelector("div")
divElement.addEventListener("click", (event) => {
  console.log(`event.target: ${event.target}`)
  console.log(`event.currentTarget: ${event.currentTarget}`)
  console.log(`event.eventPhase: ${event.eventPhase}`)
  console.log(`event.type: ${event.type}`)
  console.log("Div element was clicked!")
})

const bodyElement = document.body
bodyElement.addEventListener("click", (event) => {
  console.log(`event.target: ${event.target}`)
  console.log(`event.currentTarget: ${event.currentTarget}`)
  console.log(`event.eventPhase: ${event.eventPhase}`)
  console.log(`event.type: ${event.type}`)
  console.log("Body element was clicked!")
})

const aElement = document.querySelector("a")
aElement.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("visit link was canceled")
})

//when click submit button, prevent default behavior and validate form data
const submitButton = document.querySelector("input[type='submit']")
console.log(submitButton)

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  //validate data
  const inputElements = document.querySelectorAll("input")
  inputElements.forEach((ele) => {
    const attr = ele.getAttribute("type")
    if (attr === "text") {
      if (ele.value.trim().length === 0) console.log("invalid data")
    }
  })
})
 
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is ready!')
  const heading = document.createElement('h2')
  heading.textContent = 'This was added when DOM was ready!'
  document.body.appendChild(heading)
  console.log('Heading added now.')
})
window.addEventListener('load', () => {
  console.log('All resources (images, CSS, scripts) are fully loaded!')
  console.log('Page is fully loaded')
})
 
/*const info = document.getElementById('info')
 // Window resize event
window.addEventListener('resize', () => {
  info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
})
 // Window scroll event
window.addEventListener('scroll', () => {
  info.textContent = `Scrolled to Y: ${window.scrollY}`
})*/

const info = document.getElementById('info')

info.addEventListener('mouseout', (event) => {
  console.log('mouse out')
})
 info.addEventListener('mouseover', (event) => {
  console.log('mouse over')
})

window.addEventListener('mousemove', (event) => {
  info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
}) 

const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keyup', (event) => {
  if (event.key === 'Enter')  console.log(event.target.value)
})

const message = document.querySelector("#message")
const display = document.querySelector("p")
message.addEventListener('input', function() {
    display.textContent = message.value
})


