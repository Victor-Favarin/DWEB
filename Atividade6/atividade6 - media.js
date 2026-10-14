// Lê o nome e as quatro notas, calcula e mostra a média aritmética
function calcularMedia() {
  const nome = prompt("Digite o nome do aluno:");
  if (nome === null || nome.trim() === "") {
    alert("Nome inválido!");
    return;
  }

  let soma = 0;
  for (let i = 1; i <= 4; i++) {
    const nota = parseFloat(prompt("Digite a nota " + i + " de " + nome + ":"));
    if (isNaN(nota)) {
      alert("Nota inválida! Operação cancelada.");
      return;
    }
    soma += nota;
  }

  const media = soma / 4;
  alert("Aluno: " + nome + "\nMédia aritmética: " + media.toFixed(2));
}

do {
  calcularMedia();
} while (confirm("Deseja calcular a média de outro aluno?"));
