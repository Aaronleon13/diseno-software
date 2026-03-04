// Principio de Responsabilidad Única (SRP)
// Una clase debe tener una sola razón para cambiar
// Este ejemplo es incorrecto porque la clase Usuario tiene múltiples responsabilidades
// 1. Guardar en base de datos
// 2. Enviar correo
// 3. Eliminar reporte

// class Usario {
//   constructor(nombre, email) {
//     this.nombre = nombre;
//     this.email = email;
//   }

//   guardarEnBaseDeDatos() {
//     console.log(`Guardando usuario ${this.nombre} en la base de datos`);
//   }

//   enviarCorreo() {
//     console.log(`Enviando correo a ${this.email}`);
//   }

//   eliminarReporte(idReporte) {
//     console.log(`Eliminando reporte ${idReporte} del usuario ${this.nombre}`);
//   }
// }
// const usuario = new Usario("Brayan", "brayan@gmail.com");
// usuario.guardarEnBaseDeDatos();
// usuario.enviarCorreo();
// usuario.eliminarReporte(123);

// const usuario2 = new Usario("Sebastian", "sebastian@gmail.com");
// usuario2.guardarEnBaseDeDatos();
// usuario2.enviarCorreo();
// usuario2.eliminarReporte(456);

// Ejemplo correcto de SRP
// Separar las responsabilidades en diferentes clases
// 1. Clase Usuario
// 2. Funcion guardarUsuarioEnBaseDeDatos
// 3. Funcion enviarCorreo
// 4. Funcion eliminarReporte

class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class UsuarioRepository {
  guardar(usuario) {
    console.log(`Guardando usuario ${usuario.nombre} en la base de datos`);
  }
  eliminar(usuario) {
    console.log(`Eliminando usuario ${usuario.nombre} de la base de datos`);
  }
}

class EmailRepository {
  enviar(usuario) {
    console.log(`Enviando correo a ${usuario.email}`);
  }
}

class ReportRepository {
  eliminar(usuario, idReporte) {
    console.log(
      `Eliminando reporte ${idReporte} del usuario ${usuario.nombre}`,
    );
  }
}

const usuario = new Usuario("Brayan", "brayan@gmail.com");

const usuarioRepository = new UsuarioRepository();
const emailService = new EmailService();
const reportRepository = new ReportRepository();

// Crear usuario
usuarioRepository.guardar(usuario);
usuarioRepository.eliminar(usuario);

// Enviar correo
emailService.enviar(usuario);

// Eliminar reporte
reportRepository.eliminar(usuario, 123);
