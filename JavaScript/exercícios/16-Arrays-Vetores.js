const number = [
  "Nome: Luiz Fernando Araújo",
  "Idade: 21 anos",
  "Profissão: Vigia",
  "Cidade atual: Tijucas SC",
  "Data de nascimento: 07/01/2004",
];

/* for (let after = 0; after < number.length; after++) {
  console.log(`A posição ${after}, tem valor dê ${number[after]}`);
}  */

for (let after in number) {
  console.log(number[after]);
}
