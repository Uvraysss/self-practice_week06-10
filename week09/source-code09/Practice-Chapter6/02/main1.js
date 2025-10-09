const input = document.getElementById("keyInput")
const logDiv = document.getElementById("keyLog")

function logKey(key) {
  const p = document.createElement("p")
  if (key === "Enter") {
    p.style.color = "blue"
    p.textContent = `You pressed: ${key}`
  } else {
    p.style.color = "black"
    p.textContent = `You pressed: ${key}`
  }
  logDiv.appendChild(p)
}

input.addEventListener("keydown", (event) => {
  logKey(event.key);
})
