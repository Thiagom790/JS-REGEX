// . ? * + - ^ $ | [] {} () \ :
const texto = "1,2,3,4,5,6,a,b c!d?e";
// o '\' no regex significa scape
const regexPonto = /\./g;
console.log(texto.split(regexPonto));

// esse simbolo | significa ou no regex
const regexSimbolos = /,|\.|\?|!| /g;
console.log(texto.split(regexSimbolos));
