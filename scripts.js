const obj = document.getElementById('boton');
console.log(obj.innerHTML);
if (obj !== 'null') {

    obj.addEventListener("click", function(event) {
        event.preventDefault();
      
    // obtengo los campos
        var nombre = document.getElementById('nombre').value;
        var mensaje = document.getElementById('mensaje').value;
    
        console.log(nombre);
      
        window.location.href = 'https://api.whatsapp.com/send?phone=5491157556229&text=¡Hola Juan Pablo!%0A%0ASoy ' + nombre + ' y me contacto por ' + mensaje;
      });
}
