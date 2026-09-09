const readline = require("readline");

const interfaz = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const preguntar = (mensaje) =>
	new Promise((resolver) => interfaz.question(mensaje, resolver));

async function calcularCompra() {
	const montoIngresado = await preguntar("Ingrese el monto de la compra: $");
	const tipoEnvio = await preguntar("Tipo de envío (1: Normal / 2: Express): ");
	const membresia = (await preguntar("¿Posee membresía Premium? (S/N): "))
		.trim()
		.toUpperCase();
	const subtotal = Number(montoIngresado);

	if (isNaN(subtotal) || subtotal < 0) {
		console.log("Error: el monto de la compra debe ser un número válido no negativo.");
	} else if (tipoEnvio !== "1" && tipoEnvio !== "2") {
		console.log("Error: el tipo de envío debe ser exactamente 1 o 2.");
	} else if (membresia !== "S" && membresia !== "N") {
		console.log("Error: la membresía Premium debe indicarse con S o N.");
	} else {
		const tarifaEnvio = tipoEnvio === "1" ? 5 : 10;
		const envioGratis = subtotal >= 100 || membresia === "S";
		const costoEnvio = envioGratis ? 0 : tarifaEnvio;
		const descuento = subtotal > 150 ? subtotal * 0.1 : 0;
		const total = subtotal - descuento + costoEnvio;

		console.log("Desglose de la compra");
		console.log(`Subtotal: $${subtotal.toFixed(2)}`);
		console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
		console.log(`Costo de envío: $${costoEnvio.toFixed(2)}`);
		console.log(`Total final: $${total.toFixed(2)}`);
	}

	interfaz.close();
}

calcularCompra();
