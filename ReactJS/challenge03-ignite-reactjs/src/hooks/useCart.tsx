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
      const cartCopy = [...cart];
      const alreadyInCart = cartCopy.find((item) => productId === item.id);

      const stock = await api.get<Stock>(`/stock/${productId}`);
      const checkStockItemAmount = stock.data.amount;

      const lastAmount = alreadyInCart ? alreadyInCart.amount : 0;
      const currentAmount = lastAmount + 1;

      if (currentAmount > checkStockItemAmount) {
        toast.error("Quantidade solicitada fora de estoque");
        return;
      }

      if (alreadyInCart) {
        alreadyInCart.amount = currentAmount;
      } else {
        const product = await api.get(`/products/${productId}`);
        const productWithAmount = {
          ...product.data,
          amount: 1,
        };
        cartCopy.push(productWithAmount);
      }
      setCart(cartCopy);
      localStorage.setItem("@RocketShoes:cart", JSON.stringify(cartCopy));
    } catch {
      toast.error("Erro na adição do produto");
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const cartCopy = [...cart];
      const productI = cartCopy.findIndex(
        (product) => product.id === productId
      );

      if (productI >= 0) {
        cartCopy.splice(productI, 1);
        setCart(cartCopy);
        localStorage.setItem("@RocketShoes:cart", JSON.stringify(cartCopy));
      } else {
        toast.error("Erro na remoção do produto");
      }
    } catch {
      toast.error("Erro na remoção do produto");
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const cartCopy = [...cart];
      const stock = await api.get(`/stock/${productId}`);
      const checkStockItemAmount = stock.data.amount;

      const previousProduct = cartCopy.find(
        (product) => product.id === productId
      );

      if (previousProduct) {
        if (amount === 0 && previousProduct.amount > amount) {
          return;
        }
      }

      const newProducts = cartCopy.map((product) =>
        productId === product.id
          ? {
              ...product,
              amount,
            }
          : product
      );

      const product = newProducts.find((product) => product.id === productId);

      if (!product) {
        toast.error("Erro na alteração de quantidade do produto");
        return;
      }

      if (product.amount > checkStockItemAmount) {
        toast.error("Quantidade solicitada fora de estoque");
        return;
      }
      setCart(newProducts);
      localStorage.setItem("@RocketShoes:cart", JSON.stringify(newProducts));
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
