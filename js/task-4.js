const form = document.querySelector(".login-form");
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const userEmail = event.target.elements.email.value.trim();
    const userPassword = event.target.elements.password.value.trim();
    if (!userEmail || !userPassword) {
        alert(`'All form fields must be filled in'`);
        return;
    }
    const userInfo = {
        email: userEmail,
        password: userPassword,
    }
    console.log(userInfo); 
    form.reset();
}

