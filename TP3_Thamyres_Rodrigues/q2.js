let div_q2 = document.querySelector("#q2");
let h1_q2 = document.createElement("h1");
h1_q2.textContent = "Questão 02";

let div_fatorial = document.createElement("div");
let div_btn_q2 = document.createElement("div");
let div_res2 = document.createElement("div");
div_res2.id = "resultadoQ2";  

let labelfat = document.createElement("label");
labelfat.textContent = "Calcular o fatorial de: ";

let inputfat = document.createElement("input");
inputfat.type = "number";
inputfat.id = "fat";

let btn2 = document.createElement("button");
btn2.innerText = "Calcular";

btn2.addEventListener("click", mostrar_resultado);

div_q2.appendChild(h1_q2);
div_q2.appendChild(div_fatorial);
div_q2.appendChild(div_btn_q2);
div_q2.appendChild(div_res2);
div_fatorial.appendChild(labelfat);
div_fatorial.appendChild(inputfat);
div_btn_q2.appendChild(btn2);

function calcular_fatorial(numero){
    let resultado = 1;
    let contador_q2 = 1;
  
    while(contador_q2 <= numero){
     resultado *= contador_q2;
     contador_q2++;
    }
    return resultado;
}

function mostrar_resultado(){
  let fat = parseInt(document.getElementById("fat").value); 
    let inicio = new Date().getTime();
    let format = `Fatorial: ${calcular_fatorial(fat)}`;
    let fim = new Date().getTime();
    let tempo = fim - inicio;
    format += `\nTempo gasto para calcular: ${tempo < 1 ? "<1" : tempo}ms`
    document.getElementById("resultadoQ2").innerText = format;
  
}
