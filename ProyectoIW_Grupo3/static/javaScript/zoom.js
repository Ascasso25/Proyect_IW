var contMas = 0;
var contMenos = 0;

var a = document.getElementsByTagName("table")[0];
var pixelesActuales = window.getComputedStyle(a, null).getPropertyValue('font-size');


function contadorPlus() {
    contMenos = 0;

    pixelesActuales = window.getComputedStyle(a, null).getPropertyValue('font-size');


    contMas = contMas + 3;
    var tamaño = (parseInt(pixelesActuales.replace(/px/, "")) + contMas) + "px";
    document.getElementsByTagName("table")[0].style.fontSize = tamaño;
}

function contadorMinus() {
    contMas = 0;

    pixelesActuales = window.getComputedStyle(a, null).getPropertyValue('font-size');

    contMenos = contMenos + 3;
    var tamaño = (parseInt(pixelesActuales.replace(/px/, "")) - contMenos) + "px";
    document.getElementsByTagName("table")[0].style.fontSize = tamaño;
}

function restablecerZoom() {
    contMenos = 0;
    contMas = 0;
    document.getElementsByTagName("table")[0].style.fontSize = '18px';
};

document.getElementById("zoomIn").addEventListener("click", contadorPlus);
document.getElementById("zoomOut").addEventListener("click", contadorMinus);
document.getElementById("restablecer").addEventListener("click", restablecerZoom);