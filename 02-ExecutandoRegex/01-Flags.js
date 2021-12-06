// g - global
// i - ignore case

const texto = "Carlo assinou o abaixo-assinado";
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i));
console.log(texto.match(/ab|c/gi));
