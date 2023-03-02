let titulo = document.querySelector(".titulo");
titulo.textContent = "Health & Nutrition";

// Cálculo IMC
let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {

  let paciente = pacientes[i];
  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  let pesoValido = true;
  let alturaValida = true;

  if (peso <= 0 || peso >= 400) {
    console.log("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3) {
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    let imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}