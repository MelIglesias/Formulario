document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const emailInput = document.getElementById("email");
    const password1Input = document.getElementById("password1");
    const password2Input = document.getElementById("password2");
    const terminosCheckbox = document.getElementById("terminos");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      validateForm();
    });
  
    function validateForm() {
      const errors = [];
  
      if (nombreInput.value.trim() === "") {
        setError(nombreInput, "El campo Nombre no puede estar vacío");
        errors.push("Nombre");
      } else {
        clearError(nombreInput);
      }
  
      if (apellidoInput.value.trim() === "") {
        setError(apellidoInput, "El campo Apellido no puede estar vacío");
        errors.push("Apellido");
      } else {
        clearError(apellidoInput);
      }
  
      if (!isValidEmail(emailInput.value)) {
        setError(emailInput, "El Email debe tener un formato válido");
        errors.push("Email");
      } else {
        clearError(emailInput);
      }
  
      if (password1Input.value.length < 6) {
        setError(password1Input, "La contraseña debe tener al menos 6 caracteres");
        errors.push("Contraseña");
      } else {
        clearError(password1Input);
      }
  
      if (password1Input.value !== password2Input.value) {
        setError(password2Input, "Las contraseñas no coinciden");
        errors.push("Repetir contraseña");
      } else if (password1Input.value !== "") {
        clearError(password2Input);
      }
  
      if (!terminosCheckbox.checked) {
        alert("Debes aceptar los términos y condiciones del servicio");
      }
  
      if (errors.length === 0) {
        alert("Formulario enviado con éxito");
      }
    }
  
    function setError(input, message) {
      input.classList.add("is-invalid");
      const errorFeedback = input.parentElement.querySelector(".invalid-feedback");
      if (errorFeedback) {
        errorFeedback.textContent = message;
      }
    }
  
    function clearError(input) {
      input.classList.remove("is-invalid");
      const errorFeedback = input.parentElement.querySelector(".invalid-feedback");
      if (errorFeedback) {
        errorFeedback.textContent = "";
      }
    }
  
    function isValidEmail(email) {
      // Utiliza una expresión regular para validar el formato del correo electrónico.
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    }
  });