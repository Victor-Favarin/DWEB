// Recebe dois números e mostra soma, subtração, produto, divisão e resto
function operar() {
  const n1 = parseFloat(prompt("Digite o primeiro número:"));
  const n2 = parseFloat(prompt("Digite o segundo número:"));

  if (isNaN(n1) || isNaN(n2)) {
    alert("Valores inválidos!");
    return;
  }

  let mensagem =
    "Soma: " + (n1 + n2) +
    "\nSubtração (1º - 2º): " + (n1 - n2) +
    "\nProduto: " + (n1 * n2);

  if (n2 === 0) {
    mensagem += "\nDivisão: não é possível dividir por zero" +
                "\nResto: não é possível dividir por zero";
  } else {
    mensagem += "\nDivisão (1º / 2º): " + (n1 / n2).toFixed(2) +
                "\nResto (1º % 2º): " + (n1 % n2);
  }

  alert(mensagem);
}

do {
  operar();
} while (confirm("Deseja fazer outra operação?"));
