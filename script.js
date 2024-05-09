alert(" Insira dois números e, a partir daí,vamos calcular:");

let firstNumber = prompt("Digite o primeiro número");
let secondNumber = prompt("Digite o segundo número");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " + multi);
alert("Divisão: " + div);
alert("Resto da divisão: " + restDiv);

if (sum % 2 == 0) {
  alert("A soma dos dois números é par");
} else {
  alert("A soma dos dois números é ímpar");
}

if (firstNumber != secondNumber) {
  alert("Os números inseridos são diferentes");
} else {
  alert("Os números inseridos são iguais");
}
