import Picture from './Picture';
import { useClient, useUI, useProducts, removeFromCart } from '@lib/Context';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sumCart } from '@lib/func';
import { Trash } from '@ui/assets/Icons';

const ShowCart: React.FC<{ currentRef: React.RefObject<HTMLDivElement> }> = ({ currentRef }) => {
  const {
    client: { cart },
    setClient,
  } = useClient();
  const { ui, setUI } = useUI();
  const { products } = useProducts();
  const { pathname } = useLocation();
  const subTotal = useMemo(() => sumCart(products, cart), [cart]);

  return (
    <div
      className={`absolute right-1 top-full -z-10 rounded bg-white px-6 py-2 text-sm shadow-[0_0_2px_0_rgba(0,0,0,0.5)] duration-300 max-[310px]:hidden md:text-base ${ui.openCart ? 'translate-y-[calc(0%+1rem)] opacity-100' : '-translate-y-full opacity-0'}`}
      ref={currentRef}
    >
      {cart.map(({ id: idx, quantity }: { id: number; quantity: number }, index: number) => {
        if (index <= 2) {
          const {
            id,
            name,
            price: realPrice,
            discount,
          } = products.find((product) => product.id === idx)!;
          const price = realPrice - Math.round((discount / realPrice) * 100);
          return (
            <div
              key={index}
              className="grid grid-cols-[4rem_1fr_auto] items-center gap-x-2 border-b py-4 md:gap-x-8"
            >
              <Picture
                src={`products/${id}.png`}
                alt={name}
                className="grid h-12 place-items-center md:h-14"
                imgClassName="max-h-12 md:max-h-14 mx-auto"
              />
              <div className="grid gap-y-1 lg:gap-y-3">
                <p className="font-medium">{name}</p>
                <div className="flex justify-between text-gray-600">
                  <span>
                    ${price} x {quantity}
                  </span>
                  <span>${price * quantity}</span>
                </div>
              </div>
              <button
                className="group mx-4 hover:text-clr-ButtonRed"
                type="button"
                onClick={() => removeFromCart(setClient, cart, index, id)}
              >
                <Trash />
              </button>
            </div>
          );
        }
      })}
      {cart.length > 0 ? (
        <div className="flex flex-col gap-y-4 py-2 text-center font-medium text-xs underline-offset-2 md:text-base">
          <section className="flex items-center gap-x-2 py-4 text-base">
            <h3 className="font-medium">Subtotal: </h3>
            <p>${subTotal.toLocaleString()}.00</p>
          </section>
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              className="rounded bg-clr-Secondary2 p-4 text-white hover:underline"
              onClick={() => setUI({ ...ui, openCart: false })}
            >
              Close
            </button>
            {pathname !== '/cart' && (
              <Link to="/cart" className="rounded bg-black p-4 text-white hover:underline">
                View Cart ({cart.length})
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div className="min-w-52 text-center">
          <div className="py-4 text-gray-500">Empty Cart</div>
          <button
            className="w-full rounded bg-clr-Secondary2 py-4 text-white hover:underline"
            onClick={() => setUI({ ...ui, openCart: false })}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};
export default ShowCart;
