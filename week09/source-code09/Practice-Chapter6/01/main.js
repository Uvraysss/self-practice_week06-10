const username = document.getElementById("username")
const password = document.getElementById("password")
const confirmpass = document.getElementById("confirm-password")
const email = document.getElementById("email")
const buttonSubmit = document.getElementById("submit")
const para = document.querySelector("p");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    let error = ''
    if (!username.value || !password.value || !confirmpass.value || !email.value) {
        error += "missing some values, please try again!"
    }


    if (password.value !== confirmpass.value  ) {
        error += "password and confirm do not matchg. check again"
    }

    if (error) {
        para.style.color = "red"
        para.innerHTML = error;
    } else {
        para.style.color = "green"
        const succes = "your Data complete"
        para.innerHTML = succes
    }
})