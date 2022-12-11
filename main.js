const btnIniciar = document.querySelector("#iniciarSesion");
btnIniciar.addEventListener("click", getInfo);

function getInfo() {
  const log = document.querySelector("#log");

  if (document.querySelector("#id").value && document.querySelector("#password").value) {
    log.innerHTML = "";
    const userId = "ID"+document.querySelector("#id").value;
    const userPassword = document.querySelector("#password").value;
    console.log(userId, userPassword);

    let validarUsuario = localStorage.getItem(userId);
    if(validarUsuario){
        var user = JSON.parse(localStorage.getItem(userId));

        if(userPassword === user.password){
            console.log("Contraseña correcta");
            log.innerText = "Iniciando Sesión...";
            localStorage.setItem("usuarioActual", userId);
            setTimeout(goOperaciones, 4000);

        } else{
            console.log("Contraseña incorrecta");
            log.innerText = "Contraseña incorrecta";
        }

    } else{
        log.innerText = "No estás registrado, debes hacer el registro";
    }

  } else {
    log.innerText = "Debes ingresar Usuario y Contraseña";
  }
}

function goOperaciones(){
    //window.location.replace("./operaciones.html")
    window.location.assign("./operaciones.html");
}