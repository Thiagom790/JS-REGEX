const texto =
  "Romário era um excelente jogador\n, mas hoje é um político questionador";

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi)); //^ inicio da linha/string (quando fora de um grupo)
console.log(texto.match(/r$/gi)); //$ fim da linha

console.log(texto.match(/^r.*r$/gi)); //problema do dotall o . não resolve para \n
