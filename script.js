
let numeroDigitado = "";

function digitar(n) {
    if (numeroDigitado.length < 2) {
        numeroDigitado += n;
        
        document.getElementById("numero-digitado").innerText = numeroDigitado;
        if (numeroDigitado.length === 2) {
            if (numeroDigitado === "24") {
                document.getElementById("nome-candidato").innerText = "Fabricio cachorra";
                document.getElementById("partido-candidato").innerText = "FC";
            } else if (numeroDigitado === "21") {
                document.getElementById("nome-candidato").innerText = "Monster hunter world";
                document.getElementById("partido-candidato").innerText = "MHW";
            } else if (numeroDigitado === "67") {
                document.getElementById("nome-candidato").innerText = "Neymar jr";
                document.getElementById("partido-candidato").innerText = "NM";
            }   else if (numeroDigitado === "13") {
                document.getElementById("nome-candidato").innerText = "rato do pt";
                document.getElementById("partido-candidato").innerText = "PT";
             } else if (numeroDigitado === "22") {
                document.getElementById("nome-candidato").innerText = "Mossad";
                document.getElementById("partido-candidato").innerText = "PL";
             }  else {
                document.getElementById("nome-candidato").innerText = "VOTO NULO";
                document.getElementById("partido-candidato").innerText = "NULO";
            }
        }
    }
}
function branco() {
    numeroDigitado = ""; 
    document.getElementById("numero-digitado").innerText = "VOTO EM BRANCO";
    document.getElementById("nome-candidato").innerText = "";
    document.getElementById("partido-candidato").innerText = "";
}


function corrige() {
    numeroDigitado = "";
    document.getElementById("numero-digitado").innerText = "";
    document.getElementById("nome-candidato").innerText = "";
    document.getElementById("partido-candidato").innerText = "";
}

function confirma() {
   
    if (numeroDigitado.length > 0 || document.getElementById("numero-digitado").innerText === "VOTO EM BRANCO") {
        alert("FIM! Voto computado com sucesso."); 
    } else {
        alert("Digite um número ou escolha Branco antes de confirmar!");
    }
}