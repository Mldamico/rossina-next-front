import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Product as productType } from '../../types/generated-queries';
import Image from 'next/image';
const ProductStyle = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 0;
    }
  }
  .container {
    position: relative;
    height: 600px;
    width: 400px;
  }
  img {
    object-fit: cover;
    /* position: absolute; */

    /* left: 0; */
  }

  .container:hover .btn-more {
    opacity: 1;
  }
  .container:hover .overlay {
    display: block;
    background: rgba(0, 0, 0, 0.3);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 0.5s ease;
  }

  .btn-more {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.35s ease;
    padding: 1.5rem 3rem;
    border-radius: 3rem;
    border-width: 0px;
    cursor: pointer;
  }
`;

type ProductProps = { product: productType };
export const Product = ({ product }: ProductProps) => {
  console.log(product);
  return (
    <ProductStyle>
      <Link href='/'>
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
