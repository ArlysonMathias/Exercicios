const prompt = require("prompt-sync")();

function jogar() {
  let contVitoria = 0;
  let contDerrota = 0;
  let contEmpate = 0;
  let rodadas = parseInt(prompt("Quantas rodadas você quer jogar? "));

  const computador = { 1: "Pedra", 2: "Papel", 3: "Tesoura" };

  let i = 1;

  while (i <= rodadas) {
    let jogadaComp = Math.floor(Math.random(computador) * 3 + 1);

    console.log("\tBem vindo ao jogo do Jo ken Pô!");
    console.log("\tDigite 1 para Pedra");
    console.log("\tDigite 2 para Papel");
    console.log("\tDigite 3 para Tesoura");

    console.log(jogadaComp);

    let jogada = parseInt(prompt("Qual a sua jogada? "));
    if ((jogada == 1) | (jogada == 2) | (jogada == 3)) {
      jogadaValida = jogada;
    } else {
      console.log("Jogada inválida.");
    }

    if (jogadaValida == 1 && jogadaComp == 2) {
      console.log("Você jogou Pedra e computador jogou papel. ");
      console.log("Você Perdeu!");
      contDerrota++;
    } else if (jogadaValida == 1 && jogadaComp == 3) {
      console.log("Você jogou Pedra e computador jogou Tesoura. ");
      console.log("Você Venceu!");
      contVitoria++;
    } else if (jogadaValida == 2 && jogadaComp == 1) {
      console.log("Você jogou Papel e computador jogou Pedra. ");
      console.log("Você Venceu!");
      contVitoria++;
    } else if (jogadaValida == 2 && jogadaComp == 3) {
      console.log("Você jogou Papel e computador jogou Tesoura. ");
      console.log("Você Perdeu!");
      contDerrota++;
    } else {
      if (jogadaValida == 1) {
        console.log("Empate. Ambos jogaram Pedra");
        contEmpate++;
      } else if (jogadaValida == 2) {
        console.log("Empate. Ambos jogaram Papel");
        contEmpate++;
      } else {
        console.log("Empate. Ambos jogaram Tesoura.");
        contEmpate++;
      }
    }
    i++;
  }
  console.log(`Foram jogados ${rodadas} partidas. Você venceu ${contVitoria}, perdeu ${contDerrota}
  e empatou ${contEmpate} `);
  console.log("Deseja jogar novamente? ");
  let escolha = prompt("S ou N: ");
  if ((escolha == "S") | (escolha == "s") | (escolha == "Sim")) {
    return jogar();
  }
}
jogar();
console.log("Obrigado por jogar.");
