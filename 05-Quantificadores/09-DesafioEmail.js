const texto = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
`;

// 1º versão
console.log(texto.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g));
// 2º versão
console.log(texto.match(/\w+@\w+\.\w{2,4}/g));
//3º versão
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g));
//4º versão
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));

//no futuro ....
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.w{2})?/g));
