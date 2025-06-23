const fs = require("fs");

const archivoCitas = "citas.json";

function registrar(nombre, edad, animal, color, enfermedad) {
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };

  let citas = [];

  // Si ya existe el archivo, leemos su contenido
  if (fs.existsSync(archivoCitas)) {
    const data = fs.readFileSync(archivoCitas, "utf-8");
    citas = JSON.parse(data);
  }

  citas.push(nuevaCita);

  fs.writeFileSync(archivoCitas, JSON.stringify(citas, null, 2), "utf-8");
  console.log("Cita registrada exitosamente.");
}

function leer() {
  if (!fs.existsSync(archivoCitas)) {
    console.log("No hay citas registradas.");
    return;
  }

  const data = fs.readFileSync(archivoCitas, "utf-8");
  const citas = JSON.parse(data);

  console.log("Citas registradas:");
  citas.forEach((cita, index) => {
    console.log(
      `#${index + 1} - Nombre: ${cita.nombre} | Edad: ${cita.edad} | Animal: ${
        cita.animal
      } | Color: ${cita.color} | Enfermedad: ${cita.enfermedad}`
    );
  });
}
module.exports = { registrar, leer };
