const email = document.getElementById("form");
const requestButton = document.querySelector("button");
const error = document.querySelector(".error-message");

const handleButton = (e) => {
    if (email.value === '')
    {
        e.preventDefault();
        error.innerHTML = `Oops! Please check your email`;
    }
}

requestButton.addEventListener("click", handleButton);