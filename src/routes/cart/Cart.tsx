import { useClient, useProducts, removeFromCart } from '@lib/Context';
import Picture from '@ui/components/Picture';
import { Trash } from '@ui/assets/Icons';
import { useMemo } from 'react';
import { sumCart } from '@lib/func';
import { Link } from 'react-router-dom';
import { setCart } from '@lib/Context';

const Cart = () => {
  const {
    client: { cart },
    setClient,
  } = useClient();
  const { products } = useProducts();

  const totalCart = useMemo(() => sumCart(products, cart), [cart]);

  const changeQuantityHandle = (id: number, target: HTMLInputElement) => {
    if (
      target.value === '' ||
      Number(target.value) < 1 ||
      Number(target.value) > products[id].stock
    )
      target.value = String(cart[id].quantity);
    else setCart(setClient, cart, id, Number(target.value));
  };

  return (
    <div className="layout-p">
      <div className="mx-auto max-w-screen-2xl py-6 lg:py-20">
        {cart.length > 0 ? (
          // Cart is not empty
          <>
            <div className="hidden grid-cols-[4fr_1fr_1fr_4rem] border-b border-gray-300 px-10 py-8 font-heading-semibold lg:grid">
              <div className="flex justify-between">
                <h2>Product</h2>
                <h2>Price</h2>
              </div>
              <h2 className="text-center">Quantity</h2>
              <h2 className="text-end">Subtotal</h2>
            </div>
            {/* Product */}
            <div className="grid gap-y-2 lg:gap-y-4 lg:py-10">
              {cart.map(
                ({ id: idx, quantity }: { id: number; quantity: number }, index: number) => {
                  const product = products.find(({ id }) => id === idx)!;
                  const { id, name } = product;
                  const totalPrice = product.price * quantity;

                  return (
                    <div
                      className="grid grid-cols-[2fr_auto_2rem] items-center rounded border border-gray-300 px-3 py-2 max-sm:gap-1 sm:grid-cols-[4fr_1fr_1fr_4rem] lg:h-20 lg:px-10"
                      key={index}
                    >
                      {/* image && Name */}
                      <Link
                        to={`/products/${id}`}
                        className="flex items-center gap-4 lg:col-auto lg:justify-start lg:gap-x-6"
                      >
                        <Picture
                          src={`products/${id}.png`}
                          className="size-14"
                          imgClassName="size-full object-contain"
                          alt={name}
                        />
                        <div className="flex w-full justify-between gap-2 leading-tight max-sm:flex-col max-sm:text-sm">
                          <span>{name}</span>
                          <span>${product.price}</span>
                        </div>
                      </Link>
                      <input
                        type="number"
                        name="quantity"
                        className="mx-auto w-12 min-w-12 rounded border p-2 text-center sm:w-full sm:max-w-12 lg:max-w-20"
                        defaultValue={quantity}
                        onKeyDown={({ key, target }) => {
                          if (key === 'Enter') {
                            const current = target as HTMLInputElement;
                            current.blur();
                          }
                        }}
                        onBlur={({ target }) => changeQuantityHandle(index, target)}
                      />
                      <span className="text-end max-sm:hidden">${totalPrice}</span>
                      <button
                        aria-label="Remove"
                        className="group isolate grid place-content-center p-1 hover:text-clr-ButtonRed"
                        onClick={() => removeFromCart(setClient, cart, index, id)}
                      >
                        <Trash />
                      </button>
                    </div>
                  );
                },
              )}
            </div>
            <div className="grid gap-10 py-10 sm:grid-cols-2">
              <div className="grid auto-rows-[3rem] gap-4 md:grid-cols-[1fr_auto]">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="rounded-md border border-gray-300 px-2"
                />
                <button className="rounded-md bg-clr-ButtonRed px-4 text-white">
                  Apply Coupon
                </button>
              </div>
              <div className="grid w-full rounded border border-gray-300 p-8 leading-normal">
                <h2 className="font-medium text-xl">Cart Total</h2>
                {/* Subtotal */}
                <section className="flex justify-between border-b border-gray-300 py-4">
                  <h2>Total:</h2>
                  <p>${totalCart}</p>
                </section>
                {/* Shipping */}
                <section className="flex justify-between border-b border-gray-300 py-4">
                  <h2>Shipping:</h2>
                  <p>Free</p>
                </section>
                {/* Total */}
                <section className="flex justify-between py-4">
                  <h2>Total:</h2>
                  <p>${totalCart}</p>
                </section>
                <button className="rounded-md bg-clr-ButtonRed p-4 font-medium text-white">
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          // Cart is empty
          <div className="rounded border px-10 py-8 text-center">
            <h2>Empty Cart</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
