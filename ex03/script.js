const marcaCarro = [];
const modeloCarro = [];
const veiculo = [];

function registrarMarca(marca) {
  marcaCarro.push(marca);
  console.log("Marca $marca cadastrada com sucesso!");
}

function registrarModelo(modelo, marca) {
  modeloCarro.push((modelo, marca));
  console.log("Modelo $modelo cadastrado com sucesso!");
}

function registrarVeiculo(modelo, marca, km, valor, cor) {
  veiculo.push({ modelo, marca, km, valor, cor });
  console.log("Veiculo cadastrado com sucesso!");
}

for (let i = 1; i < 4; i++) {
  registrarMarca("Marca $(i)");
  registrarModelo("Modelo $(i)", "Marca $(Math.round(i / 2))");
  registrarVeiculo(
    "Modelo $(i)",
    "Marca $(Math.round(i / 2))",
    1000 * i,
    50000 - i * 10000,
    "preto"
  );
}

console.log(marcaCarro);
console.log(modeloCarro);
console.log(veiculo);
