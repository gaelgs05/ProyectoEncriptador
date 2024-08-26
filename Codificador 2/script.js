const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copyButton = document.querySelector('.copiar');

/*    
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){ 
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ber"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
    return stringEncriptada;
}

function btnDesencriptar(){ 
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ber"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
    return stringDesencriptada;
}

// Función para copiar el texto al portapapeles
function copiarAlPortapapeles() {
    mensaje.select(); // Seleccionar el texto en el área de mensaje
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Usar la API Clipboard para copiar el texto
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert('Texto copiado con éxito');
        })
        .catch(err => {
            alert('Error al copiar el texto: ' + err);
        });
}
function mostrarMensajeExito() {
    const mensajeExito = document.getElementById('mensaje-exito');
    mensajeExito.style.display = 'block';
    setTimeout(() => {
        mensajeExito.style.display = 'none';
    }, 2000); // Mostrar el mensaje durante 2 segundos
}


