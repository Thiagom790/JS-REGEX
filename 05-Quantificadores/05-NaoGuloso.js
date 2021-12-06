const texto = "<div>Conteudo 1</div><div>Conteudo 2</div>";

// quantificadores SÃO gulosos (greedy)
console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

// quantidicadores NÃO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));
