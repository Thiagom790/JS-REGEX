const texto1 = "De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!";
const texto2 = "There is a big fog in NYC";

//? -> zero ou um (opicional)
// isso signifa que a letra "o" que vem antes do ? é opicional
const regex = /fogo?/gi;
console.log(texto1.match(regex));
console.log(texto2.match(regex));
