import React from 'react';

declare global {
  type Client = {
    login: boolean;
    username: string;
    email: string;
    cart:
      | {
          id: number;
          quantity: number;
        }[]
      | [];
    wishlist: number[] | [];
    lastItem: {
      id: number;
      what: string;
    };
  };
  type Product = {
    id: number;
    name: string;
    category: string;
    rating: string;
    ratingcount: number;
    price: number;
    discount: number;
    stock: number;
    info: string;
  };
  type UI = {
    openAccount: boolean;
    openCart: boolean;
    openSearch: boolean;
  };

  type ContextClientD = {
    client: Client;
    setClient: React.Dispatch<React.SetStateAction<Client>>;
  };
  type ContextProductsD = {
    products: Products[];
    setProducts: React.Dispatch<React.SetStateAction<Products>>;
  };
  type ContextUID = {
    ui: UI;
    setUI: React.Dispatch<React.SetStateAction<UI>>;
  };

  type ShowProductsProps = {
    list: number[];
    title?: string[];
    time?: boolean;
    button?: boolean;
    viewAll?: boolean;
    openAddToCart?: boolean;
  };

  interface Category {
    title: string;
    items: number[];
  }

  interface TimeLeft {
    Days: number;
    Hours: number;
    Minutes: number;
    Seconds: number;
  }
}
