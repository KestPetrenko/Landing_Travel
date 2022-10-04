let body = document.querySelector("body");
let bl = document.querySelector("#vkl").addEventListener("click", start);

function start() {
    let a = body.classList.toggle("black");
    localStorage.setItem("tema", JSON.stringify(a))
}

let a = JSON.parse(localStorage.getItem("tema"));
if (a == true) {
    body.classList.toggle("black");
}




const form = document.forms[0];

form.addEventListener("submit", function (e) {
    alert("Форма отправлена");
});

form.addEventListener("change", eventHandler)
form.addEventListener("invalid", eventHandler, true);

function eventHandler(e) {
    if (e.target.tagName != "INPUT") {
        return;
    }

    checkErrorAndSetMessage(e.target);
}

function checkErrorAndSetMessage(input) {

    if (input.validity.valueMissing) {
        input.setCustomValidity("Пожалуйста, заполните это поле");
    }
    else if (input.validity.tooShort) {
        input.setCustomValidity("Значение не может быть менее 6 символов");
    }
    else if (input.validity.tooLong) {
        input.setCustomValidity("Значение не может быть более 16 символов");
    }
    else if (input.validity.typeMismatch) {
        input.setCustomValidity("Пожалуйста, укажите правильный email адрес");
    }
    else {
        input.setCustomValidity("");
    }
}