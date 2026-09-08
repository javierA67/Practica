const readline = require("readline");

const interfaz = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

interfaz.question("Ingrese el peso del paquete en kilogramos: ", (pesoIngresado) => {
	interfaz.question("Ingrese la tarifa por kilogramo en dólares: ", (tarifaIngresada) => {
		const peso = Number(pesoIngresado);
		const tarifa = Number(tarifaIngresada);
		const costoBase = peso * tarifa;
		const costoRedondeado = Math.round(costoBase);
		const costoMinimo = Math.floor(costoBase);
		const costoMaximo = Math.ceil(costoBase);

		const formatoMoneda = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

		console.log("\nResumen de la cotización");
		console.log(`Costo Base: ${formatoMoneda.format(costoBase)}`);
		console.log(`Costo Redondeado Tradicional: ${formatoMoneda.format(costoRedondeado)}`);
		console.log(`Costo Mínimo (Hacia abajo): ${formatoMoneda.format(costoMinimo)}`);
		console.log(`Costo Máximo (Hacia arriba): ${formatoMoneda.format(costoMaximo)}`);

		interfaz.close();
	});
});
