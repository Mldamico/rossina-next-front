import { CartItem } from '../types/generated-queries';

export default function calcTotalPrice(cart: any): number {
  return cart.reduce((tally: number, cartItem: CartItem) => {
    if (!cartItem.producto) return tally;
    return tally + cartItem.cantidad * cartItem.producto.precio;
  }, 0);
}
