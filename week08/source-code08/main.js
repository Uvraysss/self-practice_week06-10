/* document.getElementById(idValue) //return the first object with ID value
document.querySelector(cssSelector) //return the first element that matches selector
document.querySelectorAll(cssSelector) //return all elements that matches selector (NodeList - Arry like (can use for each, 
if you want to use array functions, you need to convert array like to array)) */

//1. query an element node that has id soup
const soupMenu = document.getElementById('soup')
//2. query an element nodes that have class "vegan" 
const vegan = document.querySelectorAll('.vegan')
//3. query any element nodes that have class "meat" 
const meats = document.querySelectorAll('.meat')

console.log(soupMenu)
console.log(vegan) // NodeList(3) [li.vegan, li.vegan, li.vegan]
console.log(meats) // NodeList(4) [li.meat, li.meat, li.meat, li.meat] 

//4.
const firstveganelement = document.querySelector(".vegan")
//5.
const firstmeatselement = document.querySelector(".meat")

console.log(firstveganelement)
console.log(firstmeatselement)


const soupSelectorElement = document.querySelectorAll('#soup')
console.log(soupSelectorElement) //NodeList [ ul#soup ]
console.log(soupSelectorElement.length) //1
console.log(soupSelectorElement[0]) //<ul id="soup">
soupSelectorElement.forEach((ele) => console.log(ele)) //<ul id="soup">

let beefSoupElement
meats.forEach((ele) => {
    const meatElements = ele
    //find meats element that has text value equals to "Beef Soup" <li class="meat">Beef Soup</li> and store in variable
    if (meatElements.textContent.trim().includes("Beef Soup")) {
    beefSoupElement = meatElements
    console.log(beefSoupElement)
    }
    console.log(meatElements)
})

//trverse all children nodes of <ul id="appetizer"> by using sibling relationship
{
    /*<ul id="appetizer">
        <li class="vegan">Vegetable Rolls</li>
        <li class="meat">Chicken Wings</li>
        <li class="meat">Tuna Sandwich</li>
    </ul>*/
} 

const appetizer = document.getElementById('appetizer')
//visit all nodes sibling under <ul id='appetizer'>
let current = appetizer.firstElementChild
while (current != null) {
  console.log(current.textContent.trim())
  current = current.nextElementSibling
}

//getElementsByName 
const nameAttrElements = document.getElementsByName("fname")
console.log(nameAttrElements)
//NodeList implements forEach, not other array function
nameAttrElements.forEach((ele) => console.log(ele))

//getElementsByTagName - tag name (HTMLCollection)
const liElements = document.getElementsByTagName("li")
console.log(liElements)
//HTMLCollection does not implement forEach, you must convert to array before you use array function
//liElements.forEach((ele) => console.log(ele)) - Error
const liElementsArray = Array.from(liElements)
liElementsArray.forEach((ele) => console.log(ele))

//getElementsByClassName - class name (HTML Collection)
const veganClassElements = document.getElementsByClassName("vegan")
console.log(veganClassElements)

//Single Node - getElementById, querySelector
//Collection nodes (Array-like (length, index) (NodeList|HTMLCollection)) - querySelectorAll, 
//getElementsByName, getElementsByTagName, getElementsByClassName

const firstIdElements = document.querySelector("#soup, #appetizer")
console.log(firstIdElements) // ได้ appetizer ก่อน เพราะเจอก่อน
console.log(firstIdElements.length)

const firstIdElement = document.querySelectorAll("#soup, #appetizer")
console.log(firstIdElement) // ได้ appetizer ก่อน เพราะเจอก่อน
console.log(firstIdElement.length)

/* <ul id="soup">
        <li class="meat">Spicy Bacon-Corn Soup</li>
        <!-- 1. remove Vegeable Soup -->
        <li class="vegan">Vegetable Soup</li>
        <!-- 2. insertBefore -->
        <!-- <li class=""vegan>Cabbage Soup</li> -->
        <!-- 3. replace Beef Soup with Pork Soup -->
        <li class="meat">Beef Soup</li>
        <li class="vegan">Coconut Soup</li>
</ul>*/

//<!-- 1. remove Vegeable Soup -->
//1. find parent element
const ulParent = document.getElementById("soup")
console.group(ulParent)
//2. get its children
const ulChildren = ulParent.children
let vegetElement = null
//3. find element node that satifies condition "Vegetable Soup"
Array.from(ulChildren).forEach((liEle) => {
if (liEle.textContent.trim() === "Vegetable Soup") vegetElement = liEle
})
//4. remove element 3.
ulParent.removeChild(vegetElement)


//<!-- 2. insertBefore -->
//1. find parent element
const ulParents = document.getElementById("soup")
console.group(ulParents)
//2. create new element node 
const newLiElement = document.createElement("li")
newLiElement.textContent = "Cabbage Soup"
newLiElement.setAttribute("class", "vegan")
//3. find reference node 
let beefElement = null
const liChildren = ulParents.children
Array.from(liChildren).forEach((ele) => {
    if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
//4. insertBefore
ulParents.insertBefore(newLiElement,beefElement)

/*
// 3. replace  Beef Soup with Pork Soup
//1. find parent element
const ulParent = document.getElementById("soup")
console.log(ulParent)
//2. create new element node
const newLiElement = document.createElement("li")
newLiElement.textContent = "Pork Soup"
newLiElement.setAttribute("class", "meat")
//3. find reference node
let beefElement = null
const liChildren = ulParent.children
Array.from(liChildren).forEach((ele) => {
  if (ele.textContent.trim() === "Beef Soup") beefElement = ele
})
//4. replace
ulParent.replaceChild(newLiElement, beefElement) */

//self-prctices

/*
<ul id="book-list">
  <li class="novel">Harry Potter</li>
  <li class="comic">Naruto</li>
  <li class="novel">The Hobbit</li>
  <li class="magazine">National Geographic</li>
  <li class="novel">Lord of the Rings</li>
</ul>
*/

//1.Remove the book titled “Naruto” from the list
//Find the <li> element whose text is "Naruto" and remove it from <ul id="book-list">.
const Parent = document.getElementById("book-list") 
const child = Parent.children
let bookElement = null
Array.from(child).forEach((liEle) => {
    if(liEle.textContent.trim() === "Naruto") bookElement = liEle
})
Parent.removeChild(bookElement)

//2.Insert a new book “One Piece” (class="comic") before “The Hobbit”
//Use createElement and insertBefore.
const Parent1 = document.getElementById("book-list")
const newLiElement1 = document.createElement("li")
newLiElement1.textContent = "One Piece"
newLiElement1.setAttribute("class", "comic")
let hobbitElement = null
const children = Parent1.children
Array.from(children).forEach((liEle) => {
    if(liEle.textContent.trim() === "The Hobbit") hobbitElement = liEle
})
Parent1.insertBefore(newLiElement1,hobbitElement)

//3.Replace the book “Lord of the Rings” with “Game of Thrones” (class="novel")
//Use replaceChild.
const Parent2 = document.getElementById("book-list")
const newLiElement2 = document.createElement("li")
newLiElement2.textContent = "Game of Thrones"
newLiElement2.setAttribute("class", "novel")
let LordElement = null
const child2 = Parent2.children
Array.from(child2).forEach((liEle) => {
  if (liEle.textContent.trim() === "Lord of the Rings") LordElement = liEle
})
Parent2.replaceChild(newLiElement2, LordElement)

//Loop through all the books in <ul id="book-list"> and log each book name
//Use firstElementChild + nextElementSibling.
const book = document.getElementById("book-list")
let cur = book.firstElementChild
while (cur != null) {
  console.log(cur.textContent.trim())
  cur = cur.nextElementSibling
}

//Find the first book with class="novel" and log "Found Novel: <book name>"
//Use querySelector(".novel").
const FirstNovel = document.querySelector(".novel")
if (FirstNovel) {
  console.log("Found Novel: " + FirstNovel.textContent.trim())
}
