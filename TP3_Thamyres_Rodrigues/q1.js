let div = document.querySelector("#q1");
let h1 = document.createElement("h1");
h1.textContent = "Questão 01";

let div_min = document.createElement("div");
let div_max = document.createElement("div");
let div_btn = document.createElement("div");
let div_res = document.createElement("div");
div_res.id = "resultadoQ1";

let label1 = document.createElement("label");
label1.textContent = "Valor mínimo: ";

let input1 = document.createElement("input");
input1.type = "number";
input1.id = "min"; 

let label2 = document.createElement("label");
label2.textContent = "Valor máximo: ";

let input2 = document.createElement("input");
input2.type = "number";
input2.id = "max";

let btn = document.createElement("button");
btn.innerText = "Calcular";

btn.addEventListener("click", cliqueQuestao01);

div.appendChild(h1);
div.appendChild(div_min);
div.appendChild(div_max);
div.appendChild(div_btn);
div.appendChild(div_res);
div_min.appendChild(label1);
div_min.appendChild(input1);
div_max.appendChild(label2);
div_max.appendChild(input2);
div_btn.appendChild(btn);

function cliqueQuestao01(){
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);
  let res = calcularMultiplos(min, max);
  document.getElementById("resultadoQ1").innerText = res;
}

function calcularMultiplos(min, max){
  let resultado = 0;  
  for(let i = min + 1; i < max; i++){
    if( (i % 2 == 0) && (i % 3 == 0)){
      resultado++; 
    }
  }
  return resultado;
}