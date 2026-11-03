const TOTAL = 5; 
let respostas = [];

function $(id) {
  return document.getElementById(id);
}

function mostrarMensagem(texto) {
  $("mensagem").textContent = texto;
}

function adicionarResposta() {
  const idade = Number($("idade").value);
  const sexo = $("sexo").value;
  const opiniao = Number($("opiniao").value);

  if (respostas.length >= TOTAL) {
    mostrarMensagem(`Já foram registradas as ${TOTAL} respostas.`);
    return;
  }
  if ($("idade").value === "" || !Number.isInteger(idade) || idade < 0 || idade > 120) {
    mostrarMensagem("Informe uma idade válida (número inteiro de 0 a 120).");
    return;
  }
  if (sexo === "") {
    mostrarMensagem("Selecione o sexo.");
    return;
  }
  if (opiniao === 0) {
    mostrarMensagem("Selecione a opinião.");
    return;
  }

  respostas.push({ idade, sexo, opiniao });
  mostrarMensagem("");
  $("idade").value = "";
  $("sexo").value = "";
  $("opiniao").value = "";
  $("idade").focus();
  atualizarTela();
}

function calcularResultados() {
  const n = respostas.length;
  const idades = respostas.map(r => r.idade);

  const soma = idades.reduce((acc, i) => acc + i, 0);
  const otimoBom = respostas.filter(r => r.opiniao >= 3).length;

  return {
    media: soma / n,
    maisVelha: Math.max(...idades),
    maisNova: Math.min(...idades),
    pessimo: respostas.filter(r => r.opiniao === 1).length,
    pctOtimoBom: (otimoBom / n) * 100,
    feminino: respostas.filter(r => r.sexo === "feminino").length,
    masculino: respostas.filter(r => r.sexo === "masculino").length,
    outros: respostas.filter(r => r.sexo === "outros").length
  };
}

function atualizarTela() {
  const n = respostas.length;
  $("contador").textContent = `Respostas registradas: ${n} de ${TOTAL}`;

  const completo = n >= TOTAL;
  $("btnAdicionar").disabled = completo;
  if (completo) {
    mostrarMensagem(`Pesquisa completa: as ${TOTAL} respostas foram registradas.`);
  }

  if (n === 0) {
    document.querySelectorAll("#resultados dd").forEach(dd => (dd.textContent = "–"));
    return;
  }

  const r = calcularResultados();
  $("resMedia").textContent = `${r.media.toFixed(1)} anos`;
  $("resMaisVelha").textContent = `${r.maisVelha} anos`;
  $("resMaisNova").textContent = `${r.maisNova} anos`;
  $("resPessimo").textContent = `${r.pessimo} pessoa(s)`;
  $("resOtimoBom").textContent = `${r.pctOtimoBom.toFixed(1)}%`;
  $("resFem").textContent = r.feminino;
  $("resMasc").textContent = r.masculino;
  $("resOutros").textContent = r.outros;
}

function gerarTeste() {
  const sexos = ["feminino", "masculino", "outros"];
  respostas = [];
  for (let i = 0; i < TOTAL; i++) {
    respostas.push({
      idade: 10 + Math.floor(Math.random() * 70),
      sexo: sexos[Math.floor(Math.random() * sexos.length)],
      opiniao: 1 + Math.floor(Math.random() * 4)
    });
  }
  mostrarMensagem("");
  atualizarTela();
}

function recomecar() {
  respostas = [];
  mostrarMensagem("");
  $("btnAdicionar").disabled = false;
  atualizarTela();
}


$("btnAdicionar").addEventListener("click", adicionarResposta);
$("btnTeste").addEventListener("click", gerarTeste);
