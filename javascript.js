function valorCampo(value) {
    document.getElementById("pantalla").value += value;
}

function calcular() {
    const resultado = document.getElementById("pantalla");
    try {
        resultado.value = eval(resultado.value);
    } catch {
        resultado.value = "Error";
    }
}

function limpiarResultado() {
    document.getElementById("pantalla").value = "";
}