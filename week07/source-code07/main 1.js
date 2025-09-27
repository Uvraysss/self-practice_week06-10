//self-prctices

/* Question 1
Given the following HTML:
<div id="profile">
  <h2>John Doe</h2>
  <p style="display:none">Secret Info</p>
  <p>Web Developer</p>
</div>
Write code to:
- Display the value of .innerHTML of <div id="profile">
- Display the value of .innerText
- Display the value of .textContent */

const profile = document.getElementById("profile")

console.log("innerHTML:")
console.log(profile.innerHTML)

console.log("innerText:")
console.log(profile.innerText)

console.log("textContent")
console.log(profile.textContent)

/* Question 2
From the <ol id="animals">:
<ol id="animals">
  <li>Dog</li>
  <li>Cat</li>
  <li>Bird</li>
  <li>Fish</li>
</ol>
- Write code to display all the animal names.
- Find the previousElementSibling and nextElementSibling of <li>Bird</li>.
- Display the parent of <li>Bird</li>. */ 

const animals = document.getElementById("animals")
const listItems = animals.getElementsByTagName("li")

const listArray = Array.from(listItems)

console.log("All animals:")
listArray.forEach(li => console.log(li.textContent))

const bird = listArray[2]
console.log("Bird:", bird.textContent)

console.log("Previous sibling:", bird.previousElementSibling.textContent)
console.log("Next sibling:", bird.nextElementSibling.textContent)
console.log("Parent element:", bird.parentElement)

/* Question 3
Add a new <p> element inside <section id="course"> with the following attributes:
id = "js101"
style = "font-weight:bold; color:green"
name = "programming"
content = "JavaScript 101" */

const course = document.getElementById("course")
const newP = document.createElement("p")

newP.setAttribute("id", "js101")
newP.setAttribute("style", "font-weight:bold; color:green")
newP.setAttribute("name", "programming")

const text = document.createTextNode("JavaScript 101")
newP.appendChild(text)

course.appendChild(newP)

/* Question 4
Create a <div> element and assign the text:
<u>Final Exam</u>
Test setting the text using:
.innerHTML
.innerText
.textContent
Then compare the results displayed on the webpage. */

const div = document.createElement("div")

div.innerHTML = "<u>Final Exam</u>"
document.body.appendChild(div)


const div2 = document.createElement("div")

div2.innerText = "<u>Final Exam</u>"
document.body.appendChild(div2)

const div3 = document.createElement("div")

div3.textContent = "<u>Final Exam</u>"
document.body.appendChild(div3)

/* Question 5
Given the following DOM structure:
<section id="news">
  <article>Article A</article>
  <article>Article B</article>
  <article>Article C</article>
</section>
- Find the number of child nodes of <section id="news">.
- Display the nodeName of each child.
- Display only the text (textContent) of each <article>. */

const newsSection = document.getElementById("news")
console.log("Number of child nodes:", newsSection.childNodes.length)

newsSection.childNodes.forEach(node => {
  console.log("Node name:", node.nodeName);
})

const articles = newsSection.getElementsByTagName("article")
Array.from(articles).forEach(article => {
  console.log("Article text:", article.textContent)
})

