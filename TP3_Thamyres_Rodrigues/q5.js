let divQ5 = document.querySelector("#q5");
let h1Q5 = document.createElement("h1");
h1Q5.innerText = "Questão 5";
divQ5.appendChild(h1Q5);
divQ5.style = "margin-top: 15px;";

let ladoA = document.createElement("div");
let ladoB = document.createElement("div");
let ladoC = document.createElement("div");

let tipoTriangulo = document.createElement("div");
let divBtnQ5 = document.createElement("div");
divQ5.appendChild(ladoA);
divQ5.appendChild(ladoB);
divQ5.appendChild(ladoC);
divQ5.appendChild(divBtnQ5);
divQ5.appendChild(tipoTriangulo);

let label_ldAdQ5 = document.createElement("label");
label_ldAdQ5.innerText = "lado A: ";
label_ldAdQ5.classNane = "Q5";
let input_ldAQ05 = document.createElement("input")
input_ldAQ05.type = "number";
input_ldAQ05.id = "ldAQ5";

let label_ldBdQ5 = document.createElement("label");
label_ldBdQ5.innerText = "lado B: ";
label_ldBdQ5.classNane = "Q5";
let input_ldB05 = document.createElement("input")
input_ldB05.type = "number";
input_ldB05.id = "ldBQ5";
input_ldB05.style = "margin-top: 5px;"

let label_ldCdQ5 = document.createElement("label");
label_ldCdQ5.innerText = "lado C: ";
label_ldCdQ5.classNane = "Q5";
let input_ldCQ05 = document.createElement("input")
input_ldCQ05.type = "number";
input_ldCQ05.id = "ldCQ05";
input_ldCQ05.style = "margin-top: 5px;";

let btnQ5 = document.createElement("button");
btnQ5.innerText = "Verificar";
btnQ5.style = "margin-top: 5px;"
btnQ5.addEventListener("click", clickQuestao5);

ladoA.appendChild(label_ldAdQ5);
ladoA.appendChild(input_ldAQ05);
ladoB.appendChild(label_ldBdQ5);
ladoB.appendChild(input_ldB05);
ladoC.appendChild(label_ldCdQ5);
ladoC.appendChild(input_ldCQ05);
divBtnQ5.appendChild(btnQ5);
let pQ5 = document.createElement("p");
pQ5.id = "trianguloq5";
pQ5.style.display = "none";
tipoTriangulo.appendChild(pQ5);

function clickQuestao5(){
  numeroA = parseInt(document.getElementById("ldAQ5").value);
  numeroB = parseInt(document.getElementById("ldBQ5").value);
  numeroC = parseInt(document.getElementById("ldCQ05").value);
  pQ5.style.display = "block";
  if(isNaN(numeroA) || isNaN(numeroB) || isNaN(numeroC)){
    pQ5.innerText = "Por favor preencher todos os campos!"
  } else {
    let resultQ5 = verificaTriangulo(numeroA, numeroB, numeroC);
    pQ5.innerText = resultQ5;
  }
}

function verificaTriangulo(numeroA, numeroB, numeroC){
  if(numeroA + numeroB > numeroC && numeroB + numeroC > numeroA && numeroA + numeroC > numeroB){            
        if(numeroA == numeroB){
            if(numeroB == numeroC){
              return 'Triângulo Equilátero';
            }else{
              return 'Triângulo Isósceles';
            }
        } else if(numeroA == numeroC){
            return 'Triângulo Isósceles';
        } else if(numeroB == numeroC){
            return 'Triângulo Isósceles';
        } else{
            return 'Triângulo Escaleno';
        }                    
    }else{
      return 'Não é um triangulo!';
    }
}