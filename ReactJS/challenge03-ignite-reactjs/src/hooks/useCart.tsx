import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("@RocketShoes:cart");

    if (storagedCart) return JSON.parse(storagedCart);

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const { data } = await api.get<Product>(`products/${productId}`);
      const productInCart = cart.find((item) => productId === item.id);

      if (productInCart) {
        const amount = productInCart.amount + 1;
        updateProductAmount({ productId, amount });
        return;
      }

      const newState = [...cart, { ...data, amount: 1 }];
      setCart(newState);
      localStorage.setItem("@RocketShoes:cart", JSON.stringify(newState));
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const product = [...cart].find((product) => product.id === productId);
      if (!product) return toast.error("Erro na remoção do produto");

      const newState = [...cart].filter((product) => product.id !== productId);
      setCart(newState);

      localStorage.setItem("@RocketShoes:cart", JSON.stringify(newState));
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const stock = await api.get<Stock>(`/stock/${productId}`);
      const maxStockAmount = stock.data.amount;

      if (amount > maxStockAmount || amount < 1)
        return toast.error("Quantidade solicitada fora de estoque");

      const newState = [...cart].filter((product) => {
        if (product.id === productId) {
          product.amount = amount;
        }

        return product;
      });

      setCart(newState);
      localStorage.setItem("@RocketShoes:cart", JSON.stringify(newState));
    } catch {
      toast.error("Erro na alteração de quantidade do produto");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
