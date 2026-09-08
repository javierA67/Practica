const readline = require("readline");

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interfaz.question("Ingrese el nombre completo del estudiante: ", (nombreOriginal) => {
  interfaz.question("Ingrese el año de nacimiento: ", (anioNacimiento) => {
    const nombreLimpio = nombreOriginal.trim();
    const nombreMayusculas = nombreLimpio.toUpperCase();
    const primerNombre = nombreMayusculas.split(" ")[0];
    const ultimosDosDigitos = anioNacimiento.slice(-2);
    const codigoUsuario = `${primerNombre.slice(0, 3)}${ultimosDosDigitos}-ESTUDIANTE`;

    console.log(`\nNombre formateado: ${nombreMayusculas}`);
    console.log(`Cantidad de caracteres del nombre original: ${nombreOriginal.length}`);
    console.log(`Código de Usuario: ${codigoUsuario}`);

    interfaz.close();
  });
});
