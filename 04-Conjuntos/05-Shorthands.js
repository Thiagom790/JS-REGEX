const texto = `1,2,3,4,5,6,a.b c!d?e\r\f    -
f_g`;

console.log(texto.match(/\d/g)); // numeros [0-9]
console.log(texto.match(/\D/g)); // não numeros [^0-9]

console.log(texto.match(/\w/g)); // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)); // não caracteres [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)); // espaços [ \t\n\r\f]
console.log(texto.match(/\S/g)); // não espaços [^ \t\n\r\f]

// \b \B