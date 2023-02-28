let titulo = document.querySelector(".titulo");
titulo.textContent = "Health & Nutrition"

// Cálculo IMC
let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso")
let peso = tdPeso.textContent;


let tdAltura = paciente.querySelector(".info-altura");
let altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc");

let pesoValido = true;
let alturaValida = true;

if (peso <= 0 || peso >= 400) {
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido";
    pesoValido = false;
}

if (altura <= 0 || altura >= 3) {
  console.log("Altura inválida")
  tdImc.textContent = "Altura inválida";
  alturaValida = false;
}

if (pesoValido && alturaValida) {
  let imc = peso / (altura * altura);
  tdImc.textContent = imc;
}
