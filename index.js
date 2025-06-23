const { registrar, leer } = require('./operaciones');

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);


if(operacion === "registrar"){
 registrar(nombre, edad, animal, color, enfermedad)
 }
 else if(operacion === "leer"){
 leer()
 }
else {
 console.log("Operación no reconocida. Usa 'registrar' o 'leer'.");
 }