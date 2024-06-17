function Login(){
let usuario = "Nicolas Dentone";
let contraseña = "Dentone"
let acesso = false 


while (acesso != true){
    let intentoUsuario = prompt("Ingrese tu usuario")
    let intentoContraseña = prompt("Ingrese contraseña")



    if (usuario === intentoUsuario && contraseña=== intentoContraseña){
        alert (`Bienvenido ${usuario}`)
        let acesso = true;
        console.log ("Te registraste")
        break

    }else{
        alert("Usuario y contraseña incorrecta, intente nuevamente")
    }
}
}
  
Login()