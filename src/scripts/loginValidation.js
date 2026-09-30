const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("floatingInput");
const passwordInput = document.getElementById("floatingPassword");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", function (event) {

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    loginError.textContent = "";

    if (email === "" || password === "") {
        event.preventDefault();
        loginError.textContent = "Preencha o e-mail e a senha.";
        return;
    }

    if (!emailInput.checkValidity()) {
        event.preventDefault();
        loginError.textContent = "Digite um endereço de e-mail válido.";
        return;
    }

    if (password.length < 6) {
        event.preventDefault();
        loginError.textContent = "A senha deve possuir pelo menos 6 caracteres.";
        return;
    }
});
