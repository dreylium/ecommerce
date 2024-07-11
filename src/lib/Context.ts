import { createContext, useContext } from 'react';
import { fetchCart, fetchWishlist } from './fetch';

const ContextClient = createContext<ContextClientD | Record<string, never>>({});
const ContextProducts = createContext<ContextProductsD | Record<string, never>>({});
const ContextUI = createContext<ContextUID | Record<string, never>>({});

const useClient = () => useContext(ContextClient);
const useUI = () => useContext(ContextUI);
const useProducts = () => useContext(ContextProducts);

const addToCart = async (
  setClient: ContextClientD['setClient'],
  cart: Client['cart'],
  products: Product[],
  id: number,
  addQuantity: number = 1,
) => {
  const isExist = cart.findIndex((item: { id: number }) => item.id === id);
  const product = products.find((item: { id: number }) => item.id === id);
  let quantity: number;
  if (isExist < 0) quantity = addQuantity;
  else {
    const [{ quantity: q }] = cart.splice(isExist, 1);
    quantity = q + addQuantity;
  }

  if (quantity > product!.stock) quantity = product!.stock;

  const newState = {
    cart: [{ id, quantity }, ...cart],
    lastItem: {
      id,
      what: 'addToCart',
    },
  };

  const success = await fetchCart(newState.cart);

  if (success) {
    setClient((prevState) => ({
      ...prevState,
      ...newState,
    }));
  }
};

const removeFromCart = async (
  setClient: ContextClientD['setClient'],
  cart: Client['cart'],
  id: number,
  idx: number,
) => {
  cart.splice(id, 1);

  const newState = {
    cart,
    lastItem: {
      id: idx,
      what: 'removeFromCart',
    },
  };

  const success = await fetchCart(newState.cart);

  if (success) {
    setClient((prevState: Client) => ({
      ...prevState,
      ...newState,
    }));
  }
};
const setCart = async (
  setClient: ContextClientD['setClient'],
  cart: Client['cart'],
  id: number,
  quantity: number,
) => {
  cart[id].quantity = quantity;

  const success = await fetchCart(cart);

  if (success)
    setClient((state: Client) => ({
      ...state,
      cart: [...state.cart],
    }));
};
const toggleWishlist = async (
  setClient: ContextClientD['setClient'],
  wishlist: Client['wishlist'],
  id: number,
) => {
  const isExist: boolean = wishlist.includes(id as never);
  const newState = {
    wishlist: isExist ? [...wishlist.filter((item) => item !== id)] : [...wishlist, id],
    lastItem: { id, what: isExist ? 'removeFromWishlist' : 'addToWishlist' },
  };

  const success = await fetchWishlist(newState.wishlist);

  if (success) {
    setClient((prevState: Client) => ({
      ...prevState,
      ...newState,
    }));
  }
};

export { ContextClient, ContextProducts, ContextUI };
export { useClient, useProducts, useUI, addToCart, removeFromCart, setCart, toggleWishlist };
