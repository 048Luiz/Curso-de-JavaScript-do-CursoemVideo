let agora = new Date();
let diasemana = agora.getDay();
console.log(`Hoje é ${diasemana}!`);
switch (diasemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("quinta");
    break;
  case 5:
    console.log("Sexta");
    break;
  case 6:
    console.log("Sabádo");
    break;
  default:
    console.log("ERRO");
}
