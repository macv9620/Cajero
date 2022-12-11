class UserOperator {
  constructor({ name, password, saldo, user }) {
    this.name = name;
    this.user = user;
    this.password = password;
    this.saldo = userPuente.saldo;
  }
  //Definir métodos
  depositar(valorDepositado) {
    log.innerText = "";
    this.saldo += Number(valorDepositado);

    //actualizar localstorage
    localStorage.setItem(usuario, JSON.stringify(user));
    actualizaInfo();
    log.innerText = "Depósito realizado con éxito";
  }

  retirar(valorRetirado) {
    if (this.saldo - Number(valorRetirado) < 0) {
      console.log("No tienes saldo");
      log.innerText = "No tienes saldo suficiente para retirar esa cantidad";
    }else{
    this.saldo -= Number(valorRetirado);
    localStorage.setItem(usuario, JSON.stringify(user));
    actualizaInfo();
    log.innerText = "Retiro realizado con éxito";
    }
    //actualizar local storage

  }
}

const printUsuario = document.querySelector("#printUsuario");
const printSaldo = document.querySelector("#printSaldo");
const log = document.querySelector("#log");

let usuario = localStorage.getItem("usuarioActual");
let userPuente = JSON.parse(localStorage.getItem(usuario));

let user = new UserOperator(userPuente);

console.log(user);

actualizaInfo();

function actualizaInfo() {
  userPuente = JSON.parse(localStorage.getItem(usuario));
  printUsuario.innerText = `Saludos: ${user.name}`;
  printSaldo.innerText = `Saldo Actual: $${userPuente.saldo}`;
}
