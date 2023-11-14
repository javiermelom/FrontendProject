const API_URL = "https://backendprojet-production.up.railway.app"

const correoInput = document.getElementById("email-input");
const contraseñaInput = document.getElementById("pass-input");
const btnLogin = document.getElementById("btn_login");
correoInput.addEventListener("input", validarFormulario);
contraseñaInput.addEventListener("input", validarFormulario);



function validarFormulario() {
  const correo = correoInput.value.trim();
  const contraseña = contraseñaInput.value.trim();
  btnLogin.disabled = correo === "" || contraseña === "";
}




btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const correo = correoInput.value;
  const contraseña = contraseñaInput.value;
  if (correo.trim() !== "" && contraseña.trim() !== "") {
    consultaUsuario(correo, contraseña);
  } else {
    console.log('Por favor, complete ambos campos.');
  }
});




async function consultaUsuario(correo, contraseña) {
  try {
    const resultado = await fetch(`${API_URL}/consultaPropietarios`);
    const usuarios = await resultado.json();
    console.log("AQUÍ ESTA LA DATA", usuarios);
    // TRUE OR FALSE
    const usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña);
    if (usuarioEncontrado) {
      localStorage.setItem('User', JSON.stringify(usuarioEncontrado.idpropietario))
      window.location.href = '../home.html';
    } else {
      console.log('Información incorrecta');
      alert("Usuario o contraseña Incorrectos");
    }
  } catch (error) {
    console.error(error);
  }
}
