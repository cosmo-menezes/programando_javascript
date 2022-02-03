console.log("trabalhando com listas");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`, `Paraíba`);
listaDeDestinos.length;

console.log(listaDeDestinos);

console.log(listaDeDestinos);

console.log(listaDeDestinos[2]);

const idadeComprador = 18;
const estaAcompanhada = true;

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("comprador maior de idade, boa viajem!!!");
  listaDeDestinos.splice(1, 1);
}  else {
  console.log("Não é maior de Idade e não posso vender");
}
