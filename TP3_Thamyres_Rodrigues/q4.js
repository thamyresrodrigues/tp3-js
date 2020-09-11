let div_qtdQ4 = document.createElement("div");
let div_minQ4 = document.createElement("div");
let div_maxQ4 = document.createElement("div");
let div_btnQ4 = document.createElement("div");
let div_tituloQ4 = document.createElement("h1");
let div_resultQ4 = document.createElement("div");
div_tituloQ4.innerText = "Questão 04"

let divQ4 = document.querySelector("#q4");

divQ4.style = "margin-top: 15px;"
divQ4.appendChild(div_tituloQ4);
divQ4.appendChild(div_qtdQ4);
divQ4.appendChild(div_minQ4);
divQ4.appendChild(div_maxQ4);
divQ4.appendChild(div_btnQ4);
divQ4.appendChild(div_resultQ4);

let label_qtdQ4 = document.createElement("label");
label_qtdQ4.innerText = "Quantidade de números: ";
label_qtdQ4.className = "Q4";

let input_qtd04 = document.createElement("input")
input_qtd04.type = "number";
input_qtd04.id = "qtQ4";
input_qtd04.style = "margin-top: 5px; "

let label_mindQ4 = document.createElement("label");
label_mindQ4.innerText = "Número mínimo: ";
label_mindQ4.className = "Q4";
let input_mind04 = document.createElement("input")
input_mind04.type = "number";
input_mind04.id = "minQ4";
input_mind04.style = "margin-top: 5px;";

let label_maxdQ4 = document.createElement("label");
label_maxdQ4.innerText = "Número máximo: ";
label_maxdQ4.className = "Q4";
let input_maxd04 = document.createElement("input")
input_maxd04.type = "number";
input_maxd04.id = "maxQ4";
input_maxd04.style = "margin-top: 5px;";

let btnQ4 = document.createElement("button");
btnQ4.innerText = "Calcular";
btnQ4.addEventListener("click", calcularValor);

div_qtdQ4.appendChild(label_qtdQ4);
div_qtdQ4.appendChild(input_qtd04);
div_minQ4.appendChild(label_mindQ4);
div_minQ4.appendChild(input_mind04);
div_maxQ4.appendChild(label_maxdQ4);
div_maxQ4.appendChild(input_maxd04);
div_btnQ4.appendChild(btnQ4);
div_btnQ4.style = "margin-top: 5px;"

let pQ4 = document.createElement("p");
pQ4.id = "idq4";
pQ4.style.display = "none";
div_resultQ4.appendChild(pQ4);

function calcularValor() {
    let minQ4 = parseInt(document.getElementById("minQ4").value);
    let maxQ4 = parseInt(document.getElementById("maxQ4").value);
    let qtdQ4 = parseInt(document.getElementById("qtQ4").value);
    pQ4.style.display = "block";
    let resultQ4 = gerarAleatorio(minQ4, maxQ4, qtdQ4);
    pQ4.innerText = resultQ4;
}

function gerarAleatorio(minQ4, maxQ4, qtdQ4) {
    let listaQ4 = [];
    while (listaQ4.length < qtdQ4) {
        let valor = Math.round((Math.random() * (maxQ4 - minQ4)) + minQ4);
        if (!listaQ4.includes(valor)) {
            listaQ4.push(valor);
        }
    }
    listaQ4.sort(sortfunction);
    let formatQ4 = ""
    for (let i of listaQ4) {
        formatQ4 += i.toString() + " ";
    }
    return formatQ4;
}

function sortfunction(a, b) {
    return (a - b)
}