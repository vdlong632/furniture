import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Product } from 'services/product';

interface CartItem extends Product {
  quantity: number;
}
type CartContextType = {
  cartItem: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (product: Product) => void;
  decreaseCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({
  cartItem: [],
  addToCart: () => null,
  removeFromCart: () => null,
  decreaseCart: () => null
});

export function useCart(): CartContextType {
  return useContext(CartContext);
}

type Props = {
  children: ReactNode;
};
export function CartProvider({ children }: Props) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity = 1) => {
    setCartItem((prevItem) => {
      const existing = prevItem.find((item) => item.id === product.id);
      if (existing) {
        return prevItem.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItem, { ...product, quantity }];
    });
  };

  useEffect(() => {
    console.log('Cart updated:', cartItem);
  }, [cartItem]);

  const removeFromCart = (product: Product) => {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== product.id));
  };

  const decreaseCart = (productId: number) => {
    setCartItem((prevItem) => {
      const existing = prevItem.find((item) => item.id === productId);
      if (existing) {
        return prevItem.map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return [...prevItem];
    });
  };

  const value = {
    cartItem,
    addToCart,
    removeFromCart,
    decreaseCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

