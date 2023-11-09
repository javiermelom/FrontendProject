const email_input = document.getElementById("emailInput");
const pass_input = document.getElementById("passInput");
const btnLogin = document.getElementById("btn-login");

const users = [
  { name: "Mali", password: "123", balance: 200 },
  { name: "Gera", password: "456", balance: 290 },
  { name: "Maui", password: "789", balance: 67 },
];


btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  let email = email_input.value;
  let pass = pass_input.value;

  let loggedUser = users.find(user => user.name === email && user.password === pass)
  if(loggedUser)
  {
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));// java script object notation JSON
    window.location.href = "./home.html";
  }
  else
  {
    alert("Usuario o contraseña Incorrectos");
  }
});