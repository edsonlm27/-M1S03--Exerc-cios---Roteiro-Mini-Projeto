const marcaCarro = [];
const modeloCarro = [];

function registrarMarca(marca) {
  marcaCarro.push(marca);
  console.log("Marca $marca cadastrada com sucesso!");
}

function registrarModelo(modelo, marca) {
  modeloCarro.push((modelo, marca));
  console.log("Modelo $modelo cadastrado com sucesso!");
}

for (let index = 1; index < 4; index++) {
  registrarMarca("Marca $(i)");
  registrarModelo("Modelo $(i)", "Marca $(Math.round(i / 2))");
}

console.log(marcaCarro);
console.log(modeloCarro);
