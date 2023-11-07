let boton = document.getElementById("boton");
let enviar = document.getElementById("enviar");
// let url = "http://localhost:3000/consultaPropietario";
let url = "https://backendprojet-production.up.railway.app/consultaPropietario";

async function getinfo() {
  let contenedor = document.getElementById("contenedor");
  let resultado = await fetch(url);
  let resultadojson = await resultado.json();
  console.log(resultadojson);
  contenedor.innerHTML = "";
  resultadojson.forEach((propietario) => {
    contenedor.innerHTML += `<br>${propietario.nombre_propietario} ${propietario.celular}
    <br><button onclick = "borrarPropietario(${propietario.idpropietario})">Eliminar registro</button>`;
  });
}
// getinfo();
async function agregarPropietario() {
  let nombre = document.getElementById("nombre_propietario").value;
  let celular = document.getElementById("celular").value;
  let correo = document.getElementById("correo").value;
  let contraseña = document.getElementById("contraseña").value;

  let objetoEnviar = {
    nombre,
    celular,
    correo,
    contraseña,
  };

  let res = await fetch("http://backendprojet-production.up.railway.app/agregarPropietario",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(objetoEnviar),
    }
  );

  let result = await res.json();
  console.log(result);
}

async function borrarPropietario(id) {
  let res = await fetch(`http://backendprojet-production.up.railway.app/borrarPropietario/${id}`,
  {
    method: "DELETE",
  });

  let result = await res.json();
  console.log(result);
}

boton.addEventListener("click", getinfo);
enviar.addEventListener("click", agregarPropietario);
