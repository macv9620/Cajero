# Cajero
Proyecto módulo 2 Devf
***
Proyecto "Cajero" para módulo 2 del Master en Codign Devf.


El proyecto contiene 3 interfaces: Incio de Sesión, Registro y Operaciones.<br />

1 - Inicio de Sesión: esta página contiene la información para iniciar sesión y tiene las siguientes validaciones y funcionalidades:<br /><br />
  a) No permite iniciar sesión si no se ingresan usuario y contraseña.<br /><br />
  b) Si se ingresan usuario y contraseña valida si el usuario existe en el localStorage, si no existe indica que se debe generar un registro y si existe valida si la contraseña ingresada es la correcta para proceder con el inicio de sesión.<br /><br />
  c) Contiene un log que va indicando al usuario lo que está ocurriendo.<br /><br />
  d) tiene un link "Regístrate" que lleva al usuario a la página de registro en caso de ser un usuario nuevo.<br /><br />
  
  
2 - Registro: esta página permite al usuario generar un registro y tiene las siguientes validaciones y funcionalidades:<br />
  a) No permite generar el registro si alguno de los 3 campos (usuario, nombre o contraseña) se encuentra vacío.<br />
  b) Contiene un log que va indicando al usuario lo que está ocurriendo.<br />
  c) Al completar el registro se implementa un conteo regresivo para redireccionar a la página de inicio de sesión.<br />
  
  
3 - Operaciones: una vez el usuario se encuentra registrado e ingresa el usuario y contraseña correcta se inicia sesión accediendo a la página de operaciones, en la cual se tienen las siguientes validaciones y funcionalidades:<br />
  a) Se tienen dos recuadros donde se muestra el nombre del usuario que inició sesión y el saldo que tiene actualmente (se asigna saldo inicial = 0 a los usuarios nuevos).<br />
  b) Se tienen dos botones donde cada uno despliega el input para ingresar la cantidad a depositar o retirar.<br />
  c) Al ingresar la cantidad a retirar o depositar se valida si la cantidad es igual a 0, si la cantidad es un número o si la cantidad está vacía, en ninguno de estos 3 casos permite depositar o retirar dinero.<br />
  d) Al depositar y retirar dinero el "Saldo Actual" se va actualizando y almacenando en el localStorage, de igual manera se implementa un log transaccional que va registrando las operaciones hechas en la sesión actual.<br />
  e) Se implementa un botón de cerrar sesión que retorna al usuario a la página del inicio de sesión.<br />
  f) Se pueden crear múltiples usuarios y tener saldos independientes almacenados en la localStorage, se implementa el parámetro "usuarioActual" en la localStorage que permite diferenciar cual usuario está iniciando sesión para que en la página de operaciones sólo se muestre el usuario que generó el inicio de sesión con la información que esté almacenada en el localStorage.<br />
  

