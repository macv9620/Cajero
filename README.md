# Cajero
Proyecto módulo 2 Devf
***
Proyecto "Cajero" para módulo 2 del Master en Codign Devf.


El proyecto contiene 3 interfaces: Incio de Sesión, Registro y Operaciones.

1 - Inicio de Sesión: esta página contiene la información para iniciar sesión y tiene las siguientes validaciones y funcionalidades:
  a) No permite iniciar sesión si no se ingresan usuario y contraseña.<br />
  b) Si se ingresan usuario y contraseña valida si el usuario existe en el localStorage, si no existe indica que se debe generar un registro y si existe valida si la contraseña ingresada es la correcta para proceder con el inicio de sesión.<br />
  c) Contiene un log que va indicando al usuario lo que está ocurriendo.<br />
  d) tiene un link "Regístrate" que lleva al usuario a la página de registro en caso de ser un usuario nuevo.<br />
  
  
2 - Registro: esta página permite al usuario generar un registro y tiene las siguientes validaciones y funcionalidades:
  a) No permite generar el registro si alguno de los 3 campos (usuario, nombre o contraseña) se encuentra vacío.
  b) Contiene un log que va indicando al usuario lo que está ocurriendo.
  c) Al completar el registro se implementa un conteo regresivo para redireccionar a la página de inicio de sesión.
  
  
3 - Operaciones: una vez el usuario se encuentra registrado e ingresa el usuario y contraseña correcta se inicia sesión accediendo a la página de operaciones, en la cual se tienen las siguientes validaciones y funcionalidades:
  a) Se tienen dos recuadros donde se muestra el nombre del usuario que inició sesión y el saldo que tiene actualmente (se asigna saldo inicial = 0 a los usuarios nuevos).
  b) Se tienen dos botones donde cada uno despliega el input para ingresar la cantidad a depositar o retirar.
  c) Al ingresar la cantidad a retirar o depositar se valida si la cantidad es igual a 0, si la cantidad es un número o si la cantidad está vacía, en ninguno de estos 3 casos permite depositar o retirar dinero.
  d) Al depositar y retirar dinero el "Saldo Actual" se va actualizando y almacenando en el localStorage, de igual manera se implementa un log transaccional que va registrando las operaciones hechas en la sesión actual.
  e) Se implementa un botón de cerrar sesión que retorna al usuario a la página del inicio de sesión.
  f) Se pueden crear múltiples usuarios y tener saldos independientes almacenados en la localStorage, se implementa el parámetro "usuarioActual" en la localStorage que permite diferenciar cual usuario está iniciando sesión para que en la página de operaciones sólo se muestre el usuario que generó el inicio de sesión con la información que esté almacenada en el localStorage.
  

