/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de BlackJack!");

    // Função para converter um array de cartas em uma string
    function cartasString(cartas) {
    return cartas.map((carta) => carta.texto).join(", ");
    }
    
    // Função para calcular a pontuação de um array de cartas
    function calcularPontuacao(cartas) {
    let pontuacao = cartas.reduce((soma, carta) => soma + carta.valor, 0);
    
    // Se tiver um ás e a pontuação estiver abaixo de 12, adiciona 10 à pontuação
    if (cartas.some((carta) => carta.valor === 11) && pontuacao < 12) {
    pontuacao += 10;
    }
    
    return pontuacao;
    }
    
    const iniciarRodada = confirm("Quer iniciar uma nova rodada?");
    
    if (!iniciarRodada) {
    console.log("O jogo acabou.");
    } else {
    console.log("Iniciando nova rodada...");
    
    let usuarioCartas = [comprarCarta(), comprarCarta()];
    let computadorCartas = [comprarCarta(), comprarCarta()];
    
    // Loop para verificar se há dois Ases na mão do usuário ou do computador
    while (
    usuarioCartas[0].valor === 11 &&
    usuarioCartas[1].valor === 11 &&
    computadorCartas[0].valor === 11 &&
    computadorCartas[1].valor === 11
    ) {
    usuarioCartas = [comprarCarta(), comprarCarta()];
    computadorCartas = [comprarCarta(), comprarCarta()];
    }
    
    let pontuacaoUsuario = calcularPontuacao(usuarioCartas);
    let pontuacaoComputador = calcularPontuacao(computadorCartas);
    
    let continuarComprando = true;

// Loop principal do jogo
while (continuarComprando && pontuacaoUsuario < 21) {
   console.log(`Usuário - cartas: ${cartasString(usuarioCartas)} - pontuação ${pontuacaoUsuario}`);
   console.log(`Computador - carta: ${computadorCartas[0].texto}`);
   
   // Pergunta ao usuário se deseja continuar comprando
   const comprarNovaCarta = confirm("Deseja comprar mais uma carta?");
   
   if (comprarNovaCarta) {
   const novaCarta = comprarCarta();
   usuarioCartas.push(novaCarta);
   pontuacaoUsuario = calcularPontuacao(usuarioCartas);

   if (pontuacaoUsuario > 21) {
      console.log(`Usuário - cartas: ${cartasString(usuarioCartas)} - pontuação ${pontuacaoUsuario}`);
      console.log(`Computador - cartas: ${cartasString(computadorCartas)} - pontuação ${pontuacaoComputador}`);
      console.log("O computador ganhou!");
      continuarComprando = false;
   }
} else {
   continuarComprando = false;
   while (pontuacaoComputador < pontuacaoUsuario && pontuacaoComputador <= 21) {
      const novaCarta = comprarCarta();
      computadorCartas.push(novaCarta);
      pontuacaoComputador = calcularPontuacao(computadorCartas);
      console.log(`Computador comprou a carta ${novaCarta.texto} - pontuação ${pontuacaoComputador}`);
   }
 
   if (pontuacaoComputador > 21) {
      console.log(`Usuário - cartas: ${cartasString(usuarioCartas)} - pontuação ${pontuacaoUsuario}`);
      console.log(`Computador - cartas: ${cartasString(computadorCartas)} - pontuação ${pontuacaoComputador}`);
      console.log("O usuário ganhou!");
   } else if (pontuacaoUsuario > pontuacaoComputador) {
      console.log(`Usuário - cartas: ${cartasString(usuarioCartas)} - pontuação ${pontuacaoUsuario}`);
      console.log(`Computador - cartas: ${cartasString(computadorCartas)} - pontuação ${pontuacaoComputador}`);
      console.log("O usuário ganhou!");
   } else if (pontuacaoComputador > pontuacaoUsuario) {
      console.log(`Usuário - cartas: ${cartasString(usuarioCartas)} - pontuação ${pontuacaoUsuario}`);
      console.log(`Computador - cartas: ${cartasString(computadorCartas)} - pontuação ${pontuacaoComputador}`);
      console.log("O computador ganhou!");
   } else {
      console.log(`Usuário - cartas: ${cartasString(usuarioCartas)} - pontuação ${pontuacaoUsuario}`);
      console.log(`Computador - cartas: ${cartasString(computadorCartas)} - pontuação ${pontuacaoComputador}`);
      console.log("Empate!");
   }
}
}
} 