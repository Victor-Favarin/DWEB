function jogar(escolhaUsuario) {
    let opcoes = ["pedra", "papel", "tesoura"];

    let numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = opcoes[numeroAleatorio];

    let resultado;


    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    }

    else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        resultado = "Você venceu!";
    }
 
    else {
        resultado = "O computador venceu!";
    }

    document.getElementById("resultado").innerHTML =
        "Você escolheu: " + escolhaUsuario +
        "<br>Computador escolheu: " + escolhaComputador +
        "<br><br>" + resultado;
}
