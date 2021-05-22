const tallesCorseteriaContorno = {
  cantidadTalle1: '34',
  cantidadTalle2: '36',
  cantidadTalle3: '38',
  cantidadTalle4: '40',
  cantidadTalle5: '42',
};

const tallesCorseteriaNumerico = {
  cantidadTalle0: '80',
  cantidadTalle1: '85',
  cantidadTalle2: '90',
  cantidadTalle3: '95',
  cantidadTalle4: '100',
  cantidadTalle5: '105',
  cantidadTalle6: '110',
  cantidadTalle7: '115',
};

const tallesLenceriaNumerico = {
  cantidadTalle1: '1',
  cantidadTalle2: '2',
  cantidadTalle3: '3',
  cantidadTalle4: '4',
  cantidadTalle5: '5',
  cantidadTalle6: '6',
};

const tallesLenceriaLetras = {
  cantidadTalle0: 'XS',
  cantidadTalle1: 'S',
  cantidadTalle2: 'M',
  cantidadTalle3: 'L',
  cantidadTalle4: 'XL',
};

const getTalleByMarca = (stock, marca) =>
  stock.map((stockPorTalle) => {
    stockPorTalle.talle = marca[stockPorTalle.talle];
  });

export const formatTalles = (stock, marca) => {
  console.log(stock);
  switch (marca) {
    case 'Perlea':
      getTalleByMarca(stock, tallesCorseteriaContorno);
      break;
    case 'Selu':
      getTalleByMarca(stock, tallesCorseteriaNumerico);
      break;
    case 'Delle Donne':
      getTalleByMarca(stock, tallesLenceriaNumerico);
      break;
    case 'Susurro':
      getTalleByMarca(stock, tallesLenceriaNumerico);
      break;
    default:
      break;
  }
};
