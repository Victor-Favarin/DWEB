function maiorDeTres(a, b, c) {
  let maior = a;
  if (b > maior) maior = b;
  if (c > maior) maior = c;
  return maior;
}

function ordemCrescente(a, b, c) {
  return [a, b, c].sort(function (x, y) {
    return x - y;
  });
}

function ehPalindromo(texto) {
  const limpo = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  if (limpo === "") return "erro";

  const invertido = limpo.split("").reverse().join("");
  return limpo === invertido ? "é palíndromo" : "não é palíndromo";
}

function verificaSubconjunto(palavra1, palavra2) {
  if (
    palavra1 === undefined ||
    palavra2 === undefined ||
    palavra1.trim() === "" ||
    palavra2.trim() === ""
  ) {
    return "erro";
  }

  if (palavra1.toLowerCase().includes(palavra2.toLowerCase())) {
    return "é um subconjunto";
  }
  return "não é um subconjunto";
}

function diaDaSemana(data) {
  let d;
  if (typeof data === "string") {
    const partes = data.split("-");
    d = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
  } else {
    d = data;
  }
  if (isNaN(d.getTime())) return "erro";

  const dias = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  return dias[d.getDay()];
}

function executarMaior() {
  const a = parseFloat(document.getElementById("n1a").value);
  const b = parseFloat(document.getElementById("n1b").value);
  const c = parseFloat(document.getElementById("n1c").value);
  const saida = document.getElementById("res1");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    mostrar(saida, "Preencha os três números.", true);
    return;
  }
  mostrar(saida, "O maior número é " + maiorDeTres(a, b, c));
}

function executarOrdem() {
  const a = parseFloat(document.getElementById("n2a").value);
  const b = parseFloat(document.getElementById("n2b").value);
  const c = parseFloat(document.getElementById("n2c").value);
  const saida = document.getElementById("res2");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    mostrar(saida, "Preencha os três números.", true);
    return;
  }
  mostrar(saida, "Ordem crescente: " + ordemCrescente(a, b, c).join(", "));
}

function executarPalindromo() {
  const texto = document.getElementById("n3").value;
  const resposta = ehPalindromo(texto);
  const saida = document.getElementById("res3");

  if (resposta === "erro") {
    mostrar(saida, "Digite uma palavra ou frase.", true);
    return;
  }
  mostrar(saida, '"' + texto + '" ' + resposta);
}

function executarSubconjunto() {
  const p1 = document.getElementById("n4a").value;
  const p2 = document.getElementById("n4b").value;
  const resposta = verificaSubconjunto(p1, p2);
  const saida = document.getElementById("res4");

  if (resposta === "erro") {
    mostrar(saida, "erro: preencha as duas palavras.", true);
    return;
  }
  mostrar(saida, '"' + p2 + '" ' + resposta + ' de "' + p1 + '"');
}

function executarDiaSemana() {
  const data = document.getElementById("n5").value;
  const saida = document.getElementById("res5");

  if (data === "") {
    mostrar(saida, "Escolha uma data.", true);
    return;
  }
  mostrar(saida, "Essa data cai em: " + diaDaSemana(data));
}

function mostrar(elemento, mensagem, erro) {
  elemento.textContent = mensagem;
  elemento.className = erro ? "resultado erro" : "resultado ok";
}
