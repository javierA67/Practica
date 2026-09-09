const readline = require("readline");

const interfaz = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const preguntar = (mensaje) =>
	new Promise((resolver) => interfaz.question(mensaje, resolver));

async function procesarExamen() {
	const nombre = await preguntar("Ingrese el nombre del estudiante: ");
	const notaIngresada = await preguntar("Ingrese la nota obtenida (0.0 a 10.0): ");
	const nota = parseFloat(notaIngresada);

	if (isNaN(nota) || nota < 0 || nota > 10) {
		console.log("Error: la nota debe ser un valor numérico entre 0.0 y 10.0.");
	} else {
		let desempeño;

		if (nota >= 9) {
			desempeño = "Desempeño Excelente (Aprobado)";
		} else if (nota >= 6) {
			desempeño = "Desempeño Satisfactorio (Aprobado)";
		} else {
			desempeño = "Reprobado — Requiere refuerzo";
		}

		console.log("Reporte del estudiante");
		console.log(`Nombre: ${nombre}`);
		console.log(`Nota: ${nota.toFixed(1)}`);
		console.log(`Desempeño: ${desempeño}`);
	}

	interfaz.close();
}

procesarExamen();
