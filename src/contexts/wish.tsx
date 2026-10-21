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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedWish = localStorage.getItem('wish');
      if(storedWish) {
        setWishItem(JSON.parse(storedWish));
      }
    }
  }, []);

  useEffect(() => {
    if(typeof window !== 'undefined') {
      localStorage.setItem('wish', JSON.stringify(wishItem));
    }
  }, [wishItem]);

  const toggleWish = (product: Product) => {
    setWishItem((prevItem) =>
      prevItem.some((item) => item.id === product.id)
        ? prevItem.filter((item) => item.id !== product.id)
        : [...prevItem, product]
    );
  };

  const value = { wishItem, toggleWish };
  return <WishContext.Provider value={value}>{children}</WishContext.Provider>;
}
