// En un sistema necesitamos validar información de usuarios antes de guardarla.
// Actualmente el sistema tiene este código:

function registrarUsuario(usuario) {
  if (usuario.nombre === "") {
    console.log("El nombre es obligatorio");
  }

  if (usuario.email === "") {
    console.log("El email es obligatorio");
  }
}

function actualizarUsuario(usuario) {
  if (usuario.nombre === "") {
    console.log("El nombre es obligatorio");
  }

  if (usuario.email === "") {
    console.log("El email es obligatorio");
  }
}

function eliminarUsuario(usuario) {
  if (usuario.nombre === "") {
    console.log("El nombre es obligatorio");
  }

  if (usuario.email === "") {
    console.log("El email es obligatorio");
  }
}

const usuario = {
  nombre: "",
  email: "",
};

registrarUsuario(usuario);
actualizarUsuario(usuario);
eliminarUsuario(usuario);
