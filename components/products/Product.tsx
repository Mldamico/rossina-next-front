import React from 'react';
import Link from 'next/link';
import { Product as productType } from '../../types/generated-queries';
import Image from 'next/image';
import { ProductStyle } from './styles/ProductStyle';

type ProductProps = { product: productType };
export const Product = ({ product }: ProductProps) => {
  console.log(product);
  return (
    <ProductStyle>
      <Link href={{pathname:`/productos/${product.slug}}`, query: {id: product.id}}}>
        <a>
          <div className='container'>
            <Image
              src={product?.imagen[0]?.image?.publicUrlTransformed}
              alt={product?.nombre}
              height={600}
              width={400}
            />
            <div className='overlay'></div>
            <button type='button' className='btn-more'>
              Ver mas
            </button>
          </div>
          <p>{product?.nombre}</p>
          <p>${product?.precio}</p>
        </a>
      </Link>
    </ProductStyle>
  );
};
