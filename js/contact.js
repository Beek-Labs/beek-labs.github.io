function verificarCaptcha() {
    // Obtener la respuesta del CAPTCHA
    var captchaResponse = grecaptcha.getResponse();

    // Si la respuesta es vacía, mostrar un mensaje de error
    if (captchaResponse.length === 0) {
        alert("Please solve the CAPTCHA to continue.");
        return;
    }

    // Si la respuesta es válida, enviar el formulario
  document.getElementById("contact_from").submit();
  document.getElementById('contact_from').addEventListener('submit', function(event) {
    // Prevenir la redirección del formulario
    event.preventDefault();
  
    // Crear una instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();
  
    // Configurar la petición
    xhr.open('POST', 'https://formbold.com/s/91AE9');
  
    // Enviar la petición
    xhr.send(new FormData(event.target));
  });
}
