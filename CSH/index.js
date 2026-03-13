//USANDO HERENCIA
//Problema:
//un avión no es un pájaro
//solo comparten comportamiento

// class Volador {
//   volar() {
//     console.log("Está volando");
//   }
// }

// class Pajaro extends Volador {}
// class Avion extends Volador {}

// const pajaro = new Pajaro();
// pajaro.volar();

// const avion = new Avion();
// avion.volar();

//Composicion

class Volar {
  volar() {
    console.log("Está volando");
  }
}

class Nadar {
  nadar() {
    console.log("Está nadando");
  }
}

class Pajaro {
  constructor() {
    this.volador = new Volar();
    this.nadador = new Nadar();
  }

  volar() {
    this.volador.volar();
  }

  nadar() {
    this.nadador.nadar();
  }
}

class Avion {
  constructor() {
    this.volador = new Volar();
  }

  volar() {
    this.volador.volar();
  }
}
console.log("-----------Pajaros-----------");
const paloma = new Pajaro();
paloma.volar();

const halcon = new Pajaro();
halcon.volar();

const pato = new Pajaro();
pato.nadar();
pato.volar();

console.log("-----------Aviones-----------");
const boing747 = new Avion();
boing747.volar();

const jet = new Avion();
jet.volar();

const cessna402 = new Avion();
cessna402.volar();
