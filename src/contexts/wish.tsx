import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Product } from 'services/product';

type WishContextType = {
  wishItem: Product[];
  toggleWish: (product: Product) => void;
};

const WishContext = createContext<WishContextType>({
  wishItem: [],
  toggleWish: () => null
});

export function useWish(): WishContextType {
  return useContext(WishContext);
}

type Props = {
  children: ReactNode;
};

export function WishProvider({ children }: Props) {
  const [wishItem, setWishItem] = useState<Product[]>([]);

  const toggleWish = (product: Product) => {
    setWishItem((prevItem) =>
      prevItem.some((item) => item.id === product.id)
        ? prevItem.filter((item) => item.id !== product.id)
        : [...prevItem, product]
    );
  };

  useEffect(() => {
    console.log('wishlist:', wishItem);
  }, [wishItem]);

  const value = { wishItem, toggleWish };
  return <WishContext.Provider value={value}>{children}</WishContext.Provider>;
}

// const toggleWish = (product: Product) => {
//   setWishItem((prev) =>
//     prev.some((item) => item.id === product.id)
//       ? prev.filter((item) => item.id !== product.id)
//       : [...prev, product]
//   );
// };
