import { useClient, useProducts } from '@lib/Context';
import { useEffect, useState, useRef, useMemo } from 'react';

const PopUpAddToCart = () => {
  const {
    client: { cart, lastItem },
  } = useClient();
  const [popUp, setPopUp] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [color, setColor] = useState('bg-green-900');
  const timer = useRef<number>(0);
  const { products } = useProducts();

  useEffect(() => {
    setLoading(true);
  }, []);

  const text = useMemo(() => {
    if (loading) {
      setPopUp(true);
      clearTimeout(timer.current as number);
      timer.current = setTimeout(() => {
        setPopUp(false);
      }, 2000);
    }
    const current = products.find((item) => item.id === lastItem.id);
    switch (lastItem.what) {
      case 'addToCart':
        setColor('bg-green-700');
        return `${current?.name} (${cart[0]?.quantity}) added to cart`;
      case 'removeFromCart':
        setColor('bg-green-700');
        return `${current?.name} removed from cart`;
      case 'addToWishlist':
        setColor('bg-red-500');
        return `${current?.name} added to wishlist`;
      case 'removeFromWishlist':
        setColor('bg-red-500');
        return `${current?.name} removed to wishlist`;
      default:
        return 'empty';
    }
  }, [lastItem]);

  return (
    <div
      className={`${popUp ? '-translate-y-20 opacity-100 lg:-translate-y-32' : 'opacity-30'} fixed top-full z-40 flex w-full justify-center rounded text-center font-medium text-sm text-white transition-transform duration-500 lg:text-base`}
    >
      <span className={`${color} block px-8 py-4`}>{text}</span>
    </div>
  );
};

export default PopUpAddToCart;
