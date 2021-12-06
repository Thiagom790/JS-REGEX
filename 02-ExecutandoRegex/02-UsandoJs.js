const texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d";

const regexNove = RegExp("9");
console.log("Métodos da RegExp...");
// Ele verifica se encontra a expressão passada no texto
console.log(regexNove.test(texto));
console.log(regexNove.exec(texto));

const regexLetras = /[a-f]/g;
console.log("Métodos da string");
// O match pega a parte do texto que bate com meu regex
console.log(texto.match(regexLetras));
// o Search encontra o primeiro indice que ele encontrou aquele regex
console.log(texto.search(regexLetras));
console.log(texto.replace(regexLetras, "Achei"));
// Ele separa o regex de acordo com o regex
console.log(texto.split(regexLetras));
