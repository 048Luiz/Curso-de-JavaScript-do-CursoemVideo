//Estruturas de repetição, continuam a testar enquanto a condição for TRUE, caso a condição dê FALSE, ela sai do bloco e segue seu caminho.

let n1 = 1;
while (n1 <= 10) {
  console.log(`Passo ${n1}`);
  n1++;
} //Estrutura de repetição com teste lógico no inicio, primeiro testa, depois executa. Caso seja TRUE, repete. Caso FALSE, sai do bloco e segue o caminho.

let n2 = 1;
do {
  console.log(`Passo ${n2}`);
  n2++;
} while (n2 <= 10);
//Estrutura de repetição com teste lógico no final, primeiro executa, depois testa. Caso seja TRUE, repete. Caso FALSE, sai do bloco e segue o caminho.
