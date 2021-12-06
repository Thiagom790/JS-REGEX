// no inicio.....
//Um byte (8 bits) - 256 caracteres
// Simbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes Váriavel - Expansível
// Suporta mais de 1 Milhão Caractes
// Atualmente tem mais de 100.00 caracteres atríbuidos

// https://unicode-table.com/pt/

const texto = "aʬc௵d";
console.log(texto.match(/\u02AC|\u0BF5/g));
