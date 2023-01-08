// function verificarCaptcha() {
//     // Obtener la respuesta del CAPTCHA
//     var captchaResponse = grecaptcha.getResponse();

//     // Si la respuesta es vacía, mostrar un mensaje de error
//     if (captchaResponse.length === 0) {
//         alert("Please solve the CAPTCHA to continue.");
//         return;
//     }

//     // Si la respuesta es válida, enviar el formulario
//     var formulario = document.getElementById("contact_form");
//     formulario.submit();
// }
function captchaVerificado() {
    // Habilitar el botón de envío del formulario
    var botonEnviar = document.querySelector("#contact_form button[type=button]");
    botonEnviar.disabled = false;
}
