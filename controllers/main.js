let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
const btn_login = document.getElementById("btn_login");
let infoCorreo = "";
let infoContra = "";

async function consultaUsuario() {
  let resultado = await fetch("https://backendprojet-production.up.railway.app/consultaPropietario");
  let resul = await resultado.json();
  resul.forEach((propietario) => {
    infoCorreo += `${propietario.correo}`;
    infoContra += `${propietario.contraseña}`;
  });
  console.log(infoCorreo);
  console.log(infoContra);
}

function captura(event) {
  event.preventDefault();
  let email = emailInput.value;
  let pass = passInput.value;
  console.log(email, pass);
  console.log(infoCorreo);
  if (email !== infoCorreo){
    console.log("No existe");
  }
  else {
    console.log("Correcto");
  }
}

consultaUsuario();
btn_login.addEventListener("click", captura);
