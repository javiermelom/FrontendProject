async function consultaUsuario(correo, contraseña) {
  try {
    const resultado = await fetch("https://backendprojet-production.up.railway.app/consultaPropietario");

    const usuarios = await resultado.json()

    for (const usuario of usuarios) {
      const usuarioEncontrado = usuario.correo === correo && usuario.contraseña === contraseña;

      if (usuarioEncontrado) {
        window.location.href = './home.html'
      } else {
        console.log('Información incorrecta');
      }
    }
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("btn_login").addEventListener("click", (e) => {
  e.preventDefault()

  const correo = document.getElementById("email-input").value;
  const contraseña = document.getElementById("pass-input").value;

  consultaUsuario(correo, contraseña)
});
