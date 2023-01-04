document.getElementById('contact_quote').addEventListener('submit', function(event) {
    // Prevenir la redirección del formulario
    event.preventDefault();
  
    // Crear una instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();
  
    // Configurar la petición
    xhr.open('POST', 'https://formbold.com/s/oPZa9');
  
    // Enviar la petición
    xhr.send(new FormData(event.target));
  });
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
function show_message(){
    Swal.fire({
        icon: 'success',
        title: 'Email Sent successfully.',
        text: 'Thanks!',
        closeOnClickOutside: false,
        confirmButtonText: 'Exit'
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload();
        }
      })
}
