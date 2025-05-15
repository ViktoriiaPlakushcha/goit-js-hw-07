const input = document.querySelector("#name-input");
const span = document.getElementById('name-output');
input.addEventListener("input", handlerInput);

function handlerInput(event) {
    const text = event.target.value.trim();
    span.textContent = text || "Anonymous";
};

