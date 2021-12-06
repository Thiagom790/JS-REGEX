const texto = "João é calmo, mas no transito fica nervoso.";

console.log(texto.match(/[\wÀ-ú]+/gi));

// Positive Lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));

//Negative Lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi));
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));
