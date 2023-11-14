let userCookie = JSON.parse(localStorage.getItem("User")) || undefined;
const deleteCookie = document.getElementById('log-out').addEventListener('click', cerrarSesion)

function cerrarSesion() {
  userCookie = undefined  
  localStorage.removeItem('User')
  window.location.href = "../../index.html"
}

if (userCookie) {
  document.getElementById("get-user").addEventListener("click", getUser);

  // Solo para verificar ID usuario
  async function getUser() {
    console.log(userCookie)
  }

  const API_URL = "https://backendprojet-production.up.railway.app"

  let btnConsulProp = document.getElementById("btn-prop").addEventListener("click", consultaPropietario);
  let btnConsulGranja = document.getElementById("btnConsulGranja").addEventListener("click", consultaGranja);
  let btnConsulGanado = document.getElementById("btnConsulGanado").addEventListener("click", consultaGanado);
  let btnConsulCaracteristic = document.getElementById("btnConsulCaracteristic").addEventListener("click", consultaCaracteristicas_ganado);
  let btnConsulDistri = document.getElementById("btnConsulDistri").addEventListener("click", consultaDistribucion);
  let btnConsulProv = document.getElementById("btnConsulProv").addEventListener("click", consultaProveedor);

  async function model(route) {
    let contenedor = document.getElementById("contenedor");
    let resultado = await fetch(route);
    let resultadojson = await resultado.json();

    return resultadojson
    // contenedor.innerHTML = "";
    // resultadojson.forEach((propietario) => {
    //   contenedor.innerHTML += `<br>${propietario.idpropietario}${")"} ${propietario.nombre_propietario}${", cel:"}${propietario.celular}
    //   <button onclick = "borrarPropietario(${propietario.idpropietario})">Eliminar registro</button>`;
    // });
  }

  async function consultaPropietario() {
    const usuarioSesion = model(`${API_URL}/consultaPropietario/${userCookie}`)
    usuarioSesion
      .then(res=>{
        console.log(res)
        console.log(res.idpropietario);
      })
      .catch(err => console.error(err))
    // console.log(userCookie);
  }

  async function consultaGranja() {
    let contenedor = document.getElementById("contenedor");
    let resultado = await fetch(`${API_URL}/granjaPropietario/${userCookie}`);
    let resultadojson = await resultado.json();
    console.log(resultadojson);
    // contenedor.innerHTML = "";
    // resultadojson.forEach((granja) => {
    //   contenedor.innerHTML += `<br>${granja.idgranja}${")"} ${granja.nombre} ${"- Ubicada en el Municipio de:"} ${granja.municipio}
    //   <button onclick = "borrarGranja(${granja.idpropietario})">Eliminar registro</button>`;
    // });
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

} else {
  window.location.href = "../../index.html"
}