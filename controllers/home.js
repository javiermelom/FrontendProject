let btnConsulProp = document.getElementById("btnConsulProp");
let btnConsulGranja = document.getElementById("btnConsulGranja");
let btnConsulGanado = document.getElementById("btnConsulGanado");
let btnConsulCaracteristic = document.getElementById("btnConsulCaracteristic");
let btnConsulDistri = document.getElementById("btnConsulDistri");
let btnConsulProv = document.getElementById("btnConsulProv");
let enviar = document.getElementById("enviar");


async function consultaPropietario() {
  let contenedor = document.getElementById("contenedor");
  let resultado = await fetch("https://backendprojet-production.up.railway.app/consultaPropietario");
  let resultadojson = await resultado.json();
  contenedor.innerHTML = "";
  resultadojson.forEach((propietario) => {
    contenedor.innerHTML += `<br>${propietario.idpropietario}${")"} ${propietario.nombre_propietario}${", cel:"}${propietario.celular}
    <button onclick = "borrarPropietario(${propietario.idpropietario})">Eliminar registro</button>`;
  });
}

async function consultaGranja() {
  let contenedor = document.getElementById("contenedor");
  let resultado = await fetch("https://backendprojet-production.up.railway.app/consultaGranja");
  let resultadojson = await resultado.json();
  contenedor.innerHTML = "";
  resultadojson.forEach((granja) => {
    contenedor.innerHTML += `<br>${granja.idgranja}${")"} ${granja.nombre} ${"- Ubicada en el Municipio de:"} ${granja.municipio}
    <button onclick = "borrarGranja(${granja.idpropietario})">Eliminar registro</button>`;
  });
}

async function consultaGanado() {
  let contenedor = document.getElementById("contenedor");
  let resultado = await fetch("https://backendprojet-production.up.railway.app/consultaGanado");
  let resultadojson = await resultado.json();
  contenedor.innerHTML = "";
  resultadojson.forEach((ganado) => {
    contenedor.innerHTML += `<br>${ganado.idganado} ${")"} ${ganado.nombre} ${"Numero Registro:"} ${ganado.num_registro}
    <button onclick = "borrarGanado(${ganado.idganado})">Eliminar registro</button>`;
  });
}

async function consultaCaracteristicas_ganado() {
  let contenedor = document.getElementById("contenedor");
  let resultado = await fetch("https://backendprojet-production.up.railway.app/consultaCaracteristicas_ganado");
  let resultadojson = await resultado.json();
  contenedor.innerHTML = "";
  resultadojson.forEach((caracteristicas) => {
    contenedor.innerHTML += `<br>${caracteristicas.idcaracteristicas_ganado} ${")"} ${caracteristicas.raza} ${"peso:"} ${caracteristicas.peso}
    <button onclick = "borrarCaracteristicas_ganado(${caracteristicas.idcaracteristicas_ganado})">Eliminar registro</button>`;
  });
}

async function consultaDistribucion() {
  let contenedor = document.getElementById("contenedor");
  let resultado = await fetch("https://backendprojet-production.up.railway.app/consultaDistribucion");
  let resultadojson = await resultado.json();
  contenedor.innerHTML = "";
  resultadojson.forEach((distribucion) => {
    contenedor.innerHTML += `<br>${distribucion.id_propietario} ${","} ${distribucion.id_proveedor}
    <button onclick = "borrarDistribucion(${distribucion.iddistribucion})">Eliminar registro</button>`;
  });
}

async function consultaProveedor() {
  let contenedor = document.getElementById("contenedor");
  let resultado = await fetch("https://backendprojet-production.up.railway.app/consultaProveedor");
  let resultadojson = await resultado.json();
  contenedor.innerHTML = "";
  resultadojson.forEach((proveedor) => {
    contenedor.innerHTML += `<br>${proveedor.idproveedor} ${")"} ${proveedor.nombre} ${"y precio de concentrado de:"} ${proveedor.precio_concentrado} ${"por kilo"}
    <button onclick = "borrarProveedor(${proveedor.id_proveedor})">Eliminar registro</button>`;
  });
}




async function agregarPropietario() {
  let nombre_propietario = document.getElementById("nombre_propietario").value;
  let celular = document.getElementById("celular").value;
  let correo = document.getElementById("correo").value;
  let pass = document.getElementById("pass").value;
  let objetoEnviar = {
    nombre_propietario,
    celular,
    correo,
    pass,
  };
  let res = await fetch("http://backendprojet-production.up.railway.app/agregarPropietario",{
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(objetoEnviar)
  });
  let resultado = await res.json();
}



async function borrarPropietario(id) {
  let res = await fetch(`http://backendprojet-production.up.railway.app/borrarPropietario/${id}`,
  {
    method: "DELETE",
  });
  let result = await res.json();
}

async function borrarGranja(id) {
  let res = await fetch(`http://backendprojet-production.up.railway.app/borrarGranja/${id}`,
  {
    method: "DELETE",
  });
  let result = await res.json();
}

async function borrarGanado(id) {
  let res = await fetch(`http://backendprojet-production.up.railway.app/borrarGanado/${id}`,
  {
    method: "DELETE",
  });
  let result = await res.json();
}

async function borrarCaracteristicas_ganado(id) {
  let res = await fetch(`http://backendprojet-production.up.railway.app/borrarCaracteristicas_ganado/${id}`,
  {
    method: "DELETE",
  });
  let result = await res.json();
}

async function borrarDistribucion(id) {
  let res = await fetch(`http://backendprojet-production.up.railway.app/borrarDistribucion/${id}`,
  {
    method: "DELETE",
  });
  let result = await res.json();
}

async function borrarProveedor(id) {
  let res = await fetch(`http://backendprojet-production.up.railway.app/borrarProveedor/${id}`,
  {
    method: "DELETE",
  });
  let result = await res.json();
}



btnConsulProp.addEventListener("click", consultaPropietario);
btnConsulGranja.addEventListener("click", consultaGranja);
btnConsulGanado.addEventListener("click", consultaGanado);
btnConsulCaracteristic.addEventListener("click", consultaCaracteristicas_ganado);
btnConsulDistri.addEventListener("click", consultaDistribucion);
btnConsulProv.addEventListener("click", consultaProveedor);


enviar.addEventListener("click", agregarPropietario);
