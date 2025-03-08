document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservacionForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario
        alert('Reservación Completada, su comprobante ha sido enviado a su correo electrónico. ¡Muchas gracias!');
        window.location.href = 'PaginaPrincipal.html'; // Redirige a la página principal
    });
});
