const btnRegistrar = document.querySelector("#registrar");
btnRegistrar.addEventListener("click", confirmarRegistro);

function confirmarRegistro() {
  const log = document.querySelector("#log");

  if (
    document.querySelector("#id").value &&
    document.querySelector("#password").value && document.querySelector("#name").value
  ) {
    log.innerHTML = "";
    const userId = "ID" + document.querySelector("#id").value;
    const userPassword = document.querySelector("#password").value;
    const userName = document.querySelector("#name").value;
    console.log(userId, userPassword);

    let nuevoUsuario = new User(userId, userPassword, userName);
    console.log(Object(nuevoUsuario));

    localStorage.setItem(userId, JSON.stringify(nuevoUsuario));

    log.innerText = "Registro realizado con éxito, redireccionando...";

    setTimeout(back, 4000);
    
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

function back(){
    history.back();
}
