let lado1 = document.createElement("div");
let lado2 = document.createElement("div");
let lado3 = document.createElement("div");
let btn5 = document.createElement("div");
let resq5 = document.createElement("div");
resq5.id = "res5";

let ladoA = document.createElement("label");
ladoA.innerText = "Lado A:";

let ladoB = document.createElement("label");
ladoB.innerText = "Lado B:";

let ladoC = document.createElement("label");
ladoC.innerText = "Lado C:";

lado1.appendChild(ladoA);
lado2.appendChild(ladoB);
lado3.appendChild(ladoC);

let input01 = document.createElement("input");
input01.type = "number";
input01.id = "a"

let input02 = document.createElement("input");
input02.type = "number";
input02.id = "b";

let input03 = document.createElement("input");
input03.type = "number";
input03.id = "c";

let btnq5 = document.createElement("button");
btnq5.innerText = "Calcular";
btnq5.addEventListener("click", classificar);

let titulo05 = document.createElement("h1");
titulo05.innerText = "Questão 5";

let div_q05 = document.querySelector("#q5");
div_q05.appendChild(titulo05);
div_q05.appendChild(lado1);
div_q05.appendChild(lado2);
div_q05.appendChild(lado3);
div_q05.appendChild(btn5);
div_q05.appendChild(resq5);

lado1.appendChild(input01);
lado2.appendChild(input02);
lado3.appendChild(input03);
btn5.appendChild(btnq5);

function classificar() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  if ((a < b + c && a > Math.abs(b - c)) && (b < a + c && b > Math.abs(a - c)) && (c < a + b && c > Math.abs(a - b))) {
    if (a == b && a == c && b == c) {
      document.getElementById("res5").innerText = "O triângulo é equilátero!";
    } else if (a == b || a == c || b == c) {
      document.getElementById("res5").innerText = "O triângulo é isósceles!";
    }
    else {
      document.getElementById("res5").innerText = "O triângulo é escaleno!";
    }
  } else {
    console.log("Não é possível formar um triângulo.");
  }

}