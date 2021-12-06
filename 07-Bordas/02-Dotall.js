const texto =
  "Romário era um excelente jogador\n, mas hoje é um político questionador";

console.log(texto.match(/^r.*r$/gi)); //problema do dotall o . não resolve para \n
console.log(texto.match(/^r[\s\S]*r$/gi)); // o \S ele seleciona tudo que não é espaço
