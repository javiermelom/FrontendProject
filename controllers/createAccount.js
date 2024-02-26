const API_URL = "https://backendprojet-production.up.railway.app"
let enviar = document.getElementById("btn-create").addEventListener("click", agregarPropietario);


async function agregarPropietario() {
    try {
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
        let res = await fetch("http://backendprojet-production.up.railway.app/agregarPropietario",
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(objetoEnviar),
          }
        );
        const resultado = res.status;
        console.log(resultado);
        if (resultado === 200) {
            console.log("Usuario creado");
            setTimeout(() => {
                window.location.href = "../home.html"
            }, 500);
        }
        else if (resultado === 400) {
            console.log("Informacion no valida");
        }
        else {
            console.error(error); 
        };
    } catch (error) {
        console.error(error);
    }
}
