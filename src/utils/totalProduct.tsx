import { useCart } from 'contexts/cart';
import { cartItem } from 'services/product';

export const useTotalProductCart = () => {
  const { cartItem } = useCart();
  return cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
