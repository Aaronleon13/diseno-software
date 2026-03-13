//USANDO HERENCIA
//Problema:
//un avión no es un pájaro
//solo comparten comportamiento

class Volador {
  volar() {
    console.log("Está volando");
  }
}

class Pajaro extends Volador {}
class Avion extends Volador {}

const pajaro = new Pajaro();
pajaro.volar();

const avion = new Avion();
avion.volar();
