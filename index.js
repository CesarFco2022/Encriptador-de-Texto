function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/e/gi, "3p")
    .replace(/i/gi, "1m3")
    .replace(/a/gi, "41")
    .replace(/o/gi, "0b3r")
    .replace(/u/gi, "8f4t");

  if (texto.length != 0) {
    document.getElementById("resultado").value = textoCifrado;
    tituloMensaje.textContent = "Texto Encriptado";
    parrafo.textContent = "";
    muñeco.src = "./img/logrado.jpg";
    document.getElementById("texto").value="";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto
    .replace(/3p/gi, "e")
    .replace(/1m3/gi, "i")
    .replace(/41/gi, "a")
    .replace(/0b3r/gi, "o")
    .replace(/8f4t/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("resultado").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./img/exito.jpg";
      document.getElementById("texto").value="";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function copiar(){
 let copia = document.getElementById("resultado");
 copia.select();
 document.execCommand("copy");
 console.log(copia);

}