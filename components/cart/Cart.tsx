import React, { useContext } from 'react';
import { CartItemComponent } from './CartItem';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import { useUser } from '../../lib/useUser';
import { useCart } from '../../lib/useCart';
import CloseButton from './styles/CloseButton';
import calcTotalPrice from '../../lib/calcTotalPrice';

export const Cart = () => {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!me) return null;

  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>Carrito de {me.nombre}</Supreme>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>

      <ul>
        {me.cart.map((cartItem) => (
          <CartItemComponent key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>${calcTotalPrice(me.cart)}</p>
      </footer>
    </CartStyles>
  );
};
