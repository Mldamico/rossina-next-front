const tallesPerlea = {
  cantidadTalle1: '34',
  cantidadTalle2: '36',
  cantidadTalle3: '38',
  cantidadTalle4: '40',
  cantidadTalle5: '42',
};

const getTalleByMarca = (marca) => tallesPerlea[marca];

export const formatTalles = (stock, marca) => {
  console.log(stock);
  switch (marca) {
    case 'Perlea':
      stock.map((stockPorTalle) => {
        stockPorTalle.talle = tallesPerlea[stockPorTalle.talle];
      });

      break;

    default:
      break;
  }
};
