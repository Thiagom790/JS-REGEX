const cpfs = `CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23
    - 454.998.345-23
`;

console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));
