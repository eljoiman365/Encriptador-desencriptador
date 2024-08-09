//Versión desktop

function valorCodificado(){
    let valor = String(document.getElementById("inputInicial").value);
    let valorMinuscula = valor.toLowerCase();

    valorMinuscula = valorMinuscula.replace(/e/g,"enter");
    valorMinuscula = valorMinuscula.replace(/i/g,"imes");
    valorMinuscula = valorMinuscula.replace(/o/g,"ober");
    valorMinuscula = valorMinuscula.replace(/u/g,"ufat");
    valorMinuscula = valorMinuscula.replace(/a/g,"ai");

    let input2 = document.getElementById("resultado");
    input2.innerHTML = valorMinuscula;
}

function desencriptar(){
    let valor = String(document.getElementById("inputInicial").value);
    let valorMinuscula = valor.toLowerCase();

    valorMinuscula = valorMinuscula.replace(/enter/g,"e");
    valorMinuscula = valorMinuscula.replace(/imes/g,"i");
    valorMinuscula = valorMinuscula.replace(/ober/g,"o");
    valorMinuscula = valorMinuscula.replace(/ufat/g,"u");
    valorMinuscula = valorMinuscula.replace(/ai/g,"a");

    let input2 = document.getElementById("resultado");
    input2.innerHTML = valorMinuscula;
}

function copiarTexto(){
    let texto = document.getElementById("resultado");
    let boton = document.getElementById("copiar");
    
    navigator.clipboard.writeText(texto.textContent);
}

function ocultar(){
    document.getElementById("bloque_input2").style.display = "none";
    document.getElementById("resultado").style.display = "flex";
}

function cambiarTexto (){
    let mensajeNuevo = document.getElementById("copiar"); 
    let mensajeTemporal = mensajeNuevo.textContent;
    mensajeNuevo.textContent = "Copiado";

    setTimeout(() => {
        mensajeNuevo.textContent = mensajeTemporal;
    }, 3000);
}

function borrarTexto(){
    let textoBorrado = document.getElementById("inputInicial").value = "";
}
//Versión Tablet

function ocultarVersionTablet(){
    document.getElementById("bloqueInput2VersionTablet").style.display = "none";
    document.getElementById("resultadoVersionTablet").style.display = "flex";
    document.getElementById("versionTabletCopiar").style.display = "flex"
}

function valorCodificadoTablet(){
    let valor = String(document.getElementById("inputInicialVersionTablet").value);
    let valorMinuscula = valor.toLowerCase();
 
    valorMinuscula = valorMinuscula.replace(/a/g,"ai");
    valorMinuscula = valorMinuscula.replace(/e/g,"enter");
    valorMinuscula = valorMinuscula.replace(/i/g,"imes");
    valorMinuscula = valorMinuscula.replace(/o/g,"ober");
    valorMinuscula = valorMinuscula.replace(/u/g,"ufat");

    let input2 = document.getElementById("resultadoVersionTablet");
    input2.innerHTML = valorMinuscula;
}

function desencriptarVersionTablet(){

    let valor = String(document.getElementById("inputInicialVersionTablet").value);
    let valorMinuscula = valor.toLowerCase();
    
     valorMinuscula = valorMinuscula.replace(/enter/g,"e");
     valorMinuscula = valorMinuscula.replace(/imes/g,"i");
     valorMinuscula = valorMinuscula.replace(/ober/g,"o");
     valorMinuscula = valorMinuscula.replace(/ufat/g,"u");
     valorMinuscula = valorMinuscula.replace(/ai/g,"a");
    
        let input2 = document.getElementById("resultadoVersionTablet");
        input2.innerHTML = valorMinuscula;
    }


function copiarTextoTablet(){
    let texto = document.getElementById("resultadoVersionTablet");
    let boton = document.getElementById("copiar");
    
    navigator.clipboard.writeText(texto.textContent);
}
function cambiarTextoVersionTablet(){
    let mensajeNuevo = document.getElementById("versionTabletCopiar"); 
    let mensajeTemporal = mensajeNuevo.textContent;
    mensajeNuevo.textContent = "Copiado";

    setTimeout(() => {
        mensajeNuevo.textContent = mensajeTemporal;
    }, 3000);
}
function borrarTextoTablet(){
    let textoBorrado = document.getElementById("inputInicialVersionTablet").value = "";
}

