function mostrarDatosUsuario() {
    var nombreUsuario = document.getElementById("username").value;
    var emailUsuario = document.getElementById("mail").value;
    document.getElementById("nombreUsuario").textContent = nombreUsuario;
    document.getElementById("emailUsuario").textContent = emailUsuario;
    document.getElementById("datosUsuario").style.display = "block";
}