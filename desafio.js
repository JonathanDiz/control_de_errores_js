/* Desafío: javaScript

Nombre de Desafío: control_de_errores_js

Instrucciones */


/* Crea una funcion la cual devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch */

// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  try {
    this.nombre = nombre
    this.edad = edad
    let myGato = {
      nombre: "Michi",
      edad: 2
    }
    return myGato
    function meow (){
      return "Meow!"
    }
    return meow()
  
  } catch (error) {
    console.error("Este es un error Meow!")
  }
  return crearGato
  }

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  try {
    this.objeto = objeto
    this.property = property
    objeto.property = null
    return agregarPropiedad
  
  } catch (error) {
      console.error("Este es un error")    
  }
  return agregarPropiedad
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  try {
    this.objeto = objeto
    this.metodo = metodo
    objeto.metodo = null
    if (objeto.metodo === null){
      return null
  }
} catch (error) {
    console.error("Este es un error")
  }  
  return invocarMetodo
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
try {
  objetoMisterioso = {
  numeroMisterioso: Math.floor(Math.random)
}
numeroMisterioso = objetoMisterioso.numeroMisterioso * 5
return numeroMisterioso
  
} catch (error) {
    console.error("Este es un error") 
}
return multiplicarNumeroDesconocidoPorCinco
}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  try {
    this.objeto = objeto
    this.unaPropiedad = unaPropiedad
    delete objeto.unaPropiedad
    return objeto

  } catch (error) {
    console.error("Este es un error") 
  }
  return eliminarPropiedad
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  try {
    this.nombre = nombre
    this.email = email
    this.password = password
    let usuario = {
      nombre: 'Jonathan',
      email: 'example@gamil.com',
      password: '1293lñasñjr0392'
    }
    return usuario
    
  } catch (error) {
    console.error("Este es un error")
  }
  return nuevoUsuario
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  try {
    usuario = {
      email: 'example@gmail.com'
    }
    if(usuario.email !== null){
      return true
    }
  } catch (error) {
      console.error("Este es un error")
  }
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  try {
    this.objeto = objeto
    this.propiedad = propiedad
    objeto = {
      key: propiedad
    }
    if (objeto.key !== null){
      return true
    }
    if (objeto.key === null){
      return false
    }
    return objeto

  } catch (error) {
      console.error("Este es un error")
  }

}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
  try {
    usuario = {
      password: "1340lsafpj83854390"
    }
    this.password = password
    if (usuario.password === password){
      return true
    }
    if (usuario.password !== password){
      return false
    }
    return usuario

  } catch (error) {
      console.error("Este es un error")
  }
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  try {
    usuario = {
      password: "223dlñfjo398"
    }
    usuario = {
      nuevaPassword: "aqlñldkwq230eñdsak"
    }
    usuario.password = new nuevaPassword
    this.nuevaPassword = nuevaPassword
  
    if (usuario.password !== usuario.nuevaPassword){
      usuario.password = usuario.nuevaPassword
      return password
    }
    return usuario
    
  } catch (error) {
      console.error("Este es un error")
  }
  return actualizarPassword
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  try {
    usuario = {
      amigos: ["Eric", "Bastian"]
    }
    usuario.amigos.push["Alex"]
    return usuario
    
  } catch (error) {
      console.error("Este es un error")
  }
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  try {
    let usuario = {
      usuarios: ['Alex', 'Bastian', 'Eric'],
      esPremium: true
    }
    this.usuarios = usuarios
    return usuario.usuarios
    
  } catch (error) {
      console.error("Este es un error")
  }
  return pasarUsuarioAPremium
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  try {
    usuario = {
      posts: likes[0]
    }
      for (let x = 0; x < posts.likes; x++) {
        const likes = likes[0];
        likes++
      } 
      return usuario.posts.likes
    
  } catch (error) {
      console.error("Este es un error")
  }
  return sumarLikesDeUsuario
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  try {
    function calcularPrecioDescuento(){
      producto = {
        precio: 20,
        porcentajeDeDescuento: .2
      }
      producto.calcularPrecioDescuento = precio - (precio * porcentajeDeDescuento)
      return producto
    }
    return calcularPrecioDescuento
    
  } catch (error) {
      console.error("Este es un error")
  }
}