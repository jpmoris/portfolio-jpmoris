


const obj = document.getElementById("formulario-whatsapp");


if(obj !== null) {
    obj.addEventListener("submit", (event) => {
        event.preventDefault();
      
    // obtengo los campos
        var nombre = document.getElementById('nombre').value;
        var mensaje = document.getElementById('mensaje').value;
        alert("A continuación vas a ser redirigido a WhatsApp...");
        window.location.href = 'https://api.whatsapp.com/send?phone=5491157556229&text=¡Hola Juan Pablo!%0A%0ASoy ' + nombre + ' y me contacto por ' + mensaje;
      });
}