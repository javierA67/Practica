const readline = require("readline");

const interfaz = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

interfaz.question("Ingrese el nombre del cliente: ", (nombreCliente) => {
	interfaz.question("Ingrese la cantidad de días de vigencia: ", (diasIngresados) => {
		const dias = parseInt(diasIngresados, 10);
		const hoy = new Date();
		const fechaExpiracion = new Date(hoy);

		fechaExpiracion.setDate(hoy.getDate() + dias);

		console.log("\nCOMPROBANTE DE RESERVA");
		console.log(`Cliente: ${nombreCliente.toUpperCase()}`);
		console.log(`Fecha de emisión: ${hoy.toLocaleDateString("es-SV")}`);
		console.log(`Fecha límite de expiración: ${fechaExpiracion.toLocaleDateString("es-SV")}`);

		interfaz.close();
	});
});
