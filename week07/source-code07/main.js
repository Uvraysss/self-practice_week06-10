const html1 = document.documentElement
const firstNode = document.firstChild
const firstElementChildNode = document.firstElementChild //กรองเฉาะ element Type
const lastNode = document.lastChildChild
const lastElementChildNode = document.lastElementChild //กรองเฉาะ element Type 

console.log(document)
console.log(html1)
console.log(firstNode)
console.log(firstElementChildNode)
console.log(lastNode)
console.log(lastElementChildNode)

console.log(document.body)
console.log(document.body.nodeName)
console.log(document.body.nodeType)
console.log(document.body.nodeValue)

if (document.body.nodeType === Node.ELEMENT_NODE)
  console.log(`body is an element node type`)
if (document.body.nodeType === Node.ATTRIBUTE_NODE)
  console.log(`body is an attribute node type`)
if (document.body.nodeType === Node.TEXT_NODE)
  console.log(`body is a text node type`)

//query div element with id "exampleElement"
const divElement = document.getElementById("exampleElement")
// div  childNodes
const divChildNodes = divElement.childNodes //return NodeList data type
console.log(`length: ${divElement.childNodes.length}`)
divChildNodes.forEach((child) => {
  console.log(child.nodeName)
  console.log(child.nodeType)
  console.log(child.nodeValue)
})
//div children
const divChildren = divElement.children //return HTMLCollection data type
console.log(`length: ${divElement.children.length}`)
Array.from(divChildren).forEach((child) => {
  console.log(child.nodeName)
  console.log(child.nodeType)
  console.log(child.nodeValue)
})

//1. create <p> element
const subject = document.getElementById('subject')
const newParagraph = document.createElement('p')
//1.5 create attribute id 
const idAttr = document.createAttribute("id")
idAttr.value = "int141"
newParagraph.setAttributeNode(idAttr)
// newParagraph.setAttribute("id", "int141")
newParagraph.setAttribute("style", "color: red")
newParagraph.setAttribute("name", "core")

//2. create text node then 3. append to <p> child
const pText = document.createTextNode('INT141')
newParagraph.appendChild(pText)
// newParagraph.textContent = "INT141"

//4.append <p> with text node to div element
subject.appendChild(newParagraph)

//get attribute value of "id"
console.log(newParagraph.getAttribute("id")) //int141
console.log(newParagraph.attributes[0]) // id = "int141"
console.log(newParagraph.attributes[0].ownerElement) //<p id="int141">INT141</p>

const pAttributes = newParagraph.attributes //get all attribute 
for (let i = 0; i < pAttributes.length; i++){
    const name = pAttributes[i].name //get attribute name
    const value = pAttributes[i].value // get attribute value
    if ( pAttributes[i].name === "id") console.log(name, value)
}

let el = document.getElementById("demo")
console.log(el.innerHTML)
console.log(el.innerText)
console.log(el.textContent)

const pElement = document.createElement("p")
// pElement.innerHTML = "<i>Sample Content</i>"
// pElement.textContent = "<i>Sample Content</i>"
pElement.innerText = "<i>Sample Content</i>"
document.body.appendChild(pElement)

//1. find all drinks under <ul>
const drink = document.getElementById("drink")
const all = drink.getElementsByTagName('li')
const allArray = Array.from(all);
allArray.forEach(li => console.log(li.textContent));

//2. get <li>Tea</li>
let teaDrink = allArray[1]
console.log(teaDrink.textContent)

//2.1 previous element sibling
console.log(teaDrink.previousElementSibling)
console.log(teaDrink.nextElementSibling)
console.log(teaDrink.parentElement)
