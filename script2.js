// script.js

function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function botonEncriptar() {
    const inputTexto = document.querySelector(".text-area").value;
    const textoEncriptado = encriptar(inputTexto);
    document.querySelector(".mensaje").value = textoEncriptado;
}

function botonDesencriptar() {
    const inputTexto = document.querySelector(".text-area").value;
    const textoDesencriptado = desencriptar(inputTexto);
    document.querySelector(".mensaje").value = textoDesencriptado;
    document.querySelector(".text-area").value = ""; 
}

document.getElementById("botonCopiar").addEventListener("click", function() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
});
