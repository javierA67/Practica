const readline = require("readline");

const interfaz = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

interfaz.question("Ingrese la cantidad de horas estacionadas: ", (horasIngresadas) => {
	const horas = Number(horasIngresadas);

	if (isNaN(horas) || !Number.isInteger(horas) || horas <= 0) {
		console.log("Error: ingrese una cantidad de horas entera mayor que cero.");
	} else {
		let total;

		if (horas === 1) {
			total = 2;
		} else if (horas <= 4) {
			total = horas * 1.5;
		} else {
			total = horas * 1;
		}

		console.log("Ticket de estacionamiento");
		console.log(`Horas cobradas: ${horas}`);
		console.log(`Total a pagar: $${total.toFixed(2)}`);
	}

	interfaz.close();
});
