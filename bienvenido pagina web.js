function mostrarDialogo() {
    document.getElementById('dialog-box').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('nombreInput').focus();
}

function saludar() {
    var nombre = document.getElementById('nombreInput').value;
    document.getElementById('dialog-box').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.innerHTML += '<p>Hola ' + nombre + ', bienvenido a mi página web.</p>';
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(mostrarDialogo, 1000);
});