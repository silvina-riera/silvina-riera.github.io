
function leerMas(menos, mas, botonTexto) {
    var menos = document.getElementById(menos);
    var mas = document.getElementById(mas);
    var botonTexto = document.getElementById(botonTexto);
  
    if (menos.style.display === "none") {
      menos.style.display = "inline";
      botonTexto.innerHTML = "Leer más";
      mas.style.display = "none";
    } else {
      menos.style.display = "none";
      botonTexto.innerHTML = "Leer menos";
      mas.style.display = "inline";
    }
  }



