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

    const fecha = new Date();
    console.log(fecha);
    const nuevoElemento = document.createElement("p");
    const nuevoTexto = document.createTextNode(`Depósito - Valor: $${valorDeposito.value} - ${fecha.toGMTString()}`);
    nuevoElemento.appendChild(nuevoTexto);
    const contenedor = document.querySelector(".historial");
    contenedor.appendChild(nuevoElemento);
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

    const fecha = new Date();
    const nuevoElemento = document.createElement("p");
    const nuevoTexto = document.createTextNode(`Retiro - Valor: $${valorRetiro.value} - ${fecha.toGMTString()}`);
    nuevoElemento.appendChild(nuevoTexto);
    const contenedor = document.querySelector(".historial");
    contenedor.appendChild(nuevoElemento);
    }
    //actualizar local storage

  }
}

const printUsuario = document.querySelector("#printUsuario");
const printSaldo = document.querySelector("#printSaldo");
const log = document.querySelector("#log");
const btnDepositar = document.querySelector("#depositar");
const btnRetirar = document.querySelector("#retirar");
const contenedorDeposito = document.querySelector("#contenedorDeposito");
const contenedorRetiro = document.querySelector("#contenedorRetiro");
const valorRetiro = document.querySelector("#valorRetiro");
const valorDeposito = document.querySelector("#valorDeposito");
const btnConfirmarRetiro = document.querySelector("#confirmarRetiro");
const btnConfirmarDeposito = document.querySelector("#confirmarDeposito");

let usuario = localStorage.getItem("usuarioActual");
let userPuente = JSON.parse(localStorage.getItem(usuario));

let user = new UserOperator(userPuente);

btnDepositar.addEventListener("click", mostrarValorDeposito);
btnRetirar.addEventListener("click", mostrarValorRetiro);

btnConfirmarDeposito.addEventListener("click", depositar);
btnConfirmarRetiro.addEventListener("click", retirar);

actualizaInfo();

function actualizaInfo() {
  userPuente = JSON.parse(localStorage.getItem(usuario));
  printUsuario.innerText = `Saludos: ${user.name}`;
  printSaldo.innerText = `Saldo Actual: $${userPuente.saldo}`;
}

function mostrarValorDeposito(){
    log.innerText = "";
    contenedorDeposito.classList.toggle("activar");
    contenedorRetiro.classList.add("activar");
};

function mostrarValorRetiro(){
    log.innerText = "";
    contenedorRetiro.classList.toggle("activar");
    contenedorDeposito.classList.add("activar");
};

function depositar(){
    log.innerText = "";
    if(valorDeposito.value && Number(valorDeposito.value) !== 0){
        user.depositar(valorDeposito.value);

    }else{
        log.innerText = "Debe ingresar un valor a depositar";
    }
    valorDeposito.value = "";

}

function retirar(){
    log.innerText = "";
    if(valorRetiro.value && Number(valorRetiro.value) !== 0){
        user.retirar(valorRetiro.value);
    }else{
        log.innerText = "Debe ingresar un valor a retirar";
    }
    valorRetiro.value = "";

}
