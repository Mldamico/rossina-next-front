import React, { useState } from 'react';
import {
  useProductByIdQuery,
  Product as productType,
} from '../../../types/generated-queries';

import {
  ProductDetailStyles,
  ProductsDetailContainerStyles,
} from './ProductDetailStyles';
import Link from 'next/link';
import { formatTalles } from '../../../lib/formatTalles';
import { ProductImage } from './ProductImage';
import { useRouter } from 'next/router';
import { Product } from '../Product';
export const ProductDetail = ({ productId }: { productId: string }) => {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTalle, setSelectedTalle] = useState('');

  const [talles, setTalles] = useState([]);
  const { data, error, loading } = useProductByIdQuery({
    variables: { id: productId },
  });
  if (loading) return <p>Cargando...</p>;
  const product = data?.Product as productType;

  const getTallesFromColor = (e) => {
    setSelectedColor(e.target.value);

    product?.stock?.map((item) => {
      if (item.color === e.target.value) {
        const newArr = [];
        Object.keys(item)
          .filter((key) => key.startsWith('cantidad') && item[key])
          .map((filteredItem) => {
            console.log(filteredItem);
            newArr.push({
              talle: filteredItem,
              cantidad: item[filteredItem],
            });
          });
        console.log(newArr);

        // // formatTalles(newArr, product.marca.marca);
        Object.keys(item)
          .filter((key) => key.startsWith('nombre') && item[key])
          .map((filteredItem, i) => {
            newArr[i].talle = item[filteredItem];
          });
        setTalles(newArr);
      }
    });
  };

  return (
    <ProductsDetailContainerStyles>
      <div className='path'>
        <button className='button-back' onClick={() => router.back()}>
          Volver
        </button>
      </div>
      <ProductDetailStyles>
        <ProductImage product={product} />

        <div className='details'>
          <h2>
            {product?.nombre}- Art. {product?.articulo}
          </h2>
          <h3>Descripcion:</h3>
          <p>{product?.descripcion}</p>
          <h3>Color:</h3>
          <select value={selectedColor} onChange={getTallesFromColor}>
            <option>Selecciona un color</option>
            {product?.stock?.map((unidad) => (
              <option value={unidad.color} key={unidad.id}>
                {unidad.color}
              </option>
            ))}
          </select>
          <h3>Talle:</h3>
          <select
            value={selectedTalle}
            onChange={(e) => setSelectedTalle(e.target.value)}
          >
            <option>Selecciona un talle</option>
            {talles.map((talle) => (
              <option
                key={talle.talle}
                value={talle.talle}
                disabled={talle.cantidad === 0}
              >
                {talle.talle}-{talle.cantidad}
              </option>
            ))}
          </select>

          <button className='btn-add-cart' type='button'>
            Agregar al Carrito
          </button>
        </div>
      </ProductDetailStyles>
    </ProductsDetailContainerStyles>
  );
};
