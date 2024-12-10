const resultadoElement = document.getElementById('resultado');

function calcularAniosExactos(fechaSuministrada) {
    const fechaActual = new Date(); // Fecha actual
    const fechaInicio = new Date(fechaSuministrada); // Convertir a objeto Date

    // Validar que la fecha suministrada es válida
    if (isNaN(fechaInicio.getTime())) {
        throw new Error("La fecha suministrada no es válida.");
    }

    let diferenciaAnios = fechaActual.getFullYear() - fechaInicio.getFullYear();
    
    // Ajustar la diferencia si aún no se ha alcanzado el mes y día de este año
    if (
        fechaActual.getMonth() < fechaInicio.getMonth() ||
        (fechaActual.getMonth() === fechaInicio.getMonth() && fechaActual.getDate() < fechaInicio.getDate())
    ) {
        diferenciaAnios--;
    }

    resultadoElement.textContent = diferenciaAnios;

}

calcularAniosExactos("2013-02-01");