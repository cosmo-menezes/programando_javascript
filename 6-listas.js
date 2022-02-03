console.log("trabalhando com listas");

const listaDeDestinos = new Array(
  `Salvador`, 
  `São Paulo`,
  `Rio de Janeiro`,
)

listaDeDestinos.push(`Curitiba`, `Paraíba`);
listaDeDestinos.length;

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[2]);