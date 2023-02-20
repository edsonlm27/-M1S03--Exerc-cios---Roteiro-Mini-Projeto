const marcaCarro = [];

function registrarMarca(marca) {
  marcaCarro.push(marca);
  console.log("Marca $marca cadastrada com sucesso!");
}

for (let index = 1; index < 4; index++) {
  registrarMarca("Marca $(i)");
  console.log(marcaCarro);
}
