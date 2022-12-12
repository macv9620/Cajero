let timer = 0;
let log;

const btnRegistrar = document.querySelector("#registrar");
btnRegistrar.addEventListener("click", confirmarRegistro);

function confirmarRegistro() {
  log = document.querySelector("#log");

  if (
    document.querySelector("#id").value &&
    document.querySelector("#password").value &&
    document.querySelector("#name").value
  ) {
    log.innerText = "";
    const userId = "ID" + document.querySelector("#id").value;

    const userPassword = document.querySelector("#password").value;
    const userName = document.querySelector("#name").value;
    console.log(userId, userPassword);

    let nuevoUsuario = new User(userId, userPassword, userName);

    localStorage.setItem(userId, JSON.stringify(nuevoUsuario));

    //log.innerText = "Registro realizado con éxito, redireccionando...";

    timer = 6;
    setInterval(conteo, 1000);
    //setTimeout(back, 4000);
    //back();
  } else {
    log.innerText = "Debes ingresar Usuario, Nombre y Contraseña";
  }
}

class User {
  constructor(user, password, name) {
    this.name = name;
    this.user = user;
    this.password = password;
    this.saldo = 0;
  }
}

function back() {
  history.back();
}

function conteo() {
  if (timer > 0) {
    log.innerText = `Registro realizado con éxito, redireccionando en ${timer}s`;
    timer--;
  } else {
    back();
  }
}
