import React from 'react';
import styled from 'styled-components';
import { CartItem as CartItemType } from '../../types/generated-queries';

import { format } from 'prettier';
import { RemoveFromCart } from './RemoveFromCart';
// import { RemoveFromCart } from './RemoveFromCart';
const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

type CartItemProps = { cartItem: any };

export const CartItemComponent = ({ cartItem }: CartItemProps) => {
  if (!cartItem.producto) return null;
  console.log(cartItem);
  return (
    <CartItemStyles>
      <img
        width='100'
        src={cartItem.producto.imagen[0].image.publicUrlTransformed}
        alt={cartItem.producto.nombre}
      />
      <div>
        <h3>{cartItem.producto.nombre}</h3>
        <p>{cartItem.producto.stock.color}</p>
        <p>
          {cartItem.producto.precio * cartItem.cantidad} -{' '}
          <em>
            {cartItem.cantidad} &times; {cartItem.producto.precio}
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
};
