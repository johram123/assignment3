// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submitButton = document.getElementById("submit-button");
var main = document.getElementById("contact-page");

function thank_you() {
    let message = document.createElement("p");
    message.textContent = "Thank you for your message!";
    message.style.fontSize = "24px";
    main.innerHTML = "";
    main.appendChild(message);
}

console.log("hello again");

submitButton.addEventListener("click", thank_you);
