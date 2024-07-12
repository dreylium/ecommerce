import Picture from '@ui/components/Picture';
import { useNavigate, useParams } from 'react-router-dom';
import { useClient, addToCart, toggleWishlist, useProducts } from '@lib/Context';
import { Star, Wishlist, Delivery1, Repeat } from '@ui/assets/Icons';
import { useRef, useState } from 'react';

const Available = () => {
  const id = Number(useParams().id);
  const { products } = useProducts();
  const { name, rating, ratingcount, price, stock, info } = products.find(
    (product) => product.id === Number(id),
  ) as Product;
  const {
    client: { login, cart, wishlist },
    setClient,
  } = useClient();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();

  const changeQuantityHandle = () => {
    const current = inputRef.current;
    if (current) {
      if (current.value === '' || Number(current.value) < 1) {
        current.value = '0';
        setCount(0);
      } else {
        setCount(Number(current.value));
      }
    }
  };

  const addToWishlistHandle = (target: HTMLButtonElement, id: number) => {
    target.classList.add('[&_svg]:animate-[ping_.5s]');
    target.addEventListener('animationend', () => {
      target.classList.remove('[&_svg]:animate-[ping_.5s]');
    });
    if (!login) navigate('/login');
    else toggleWishlist(setClient, wishlist, id);
  };

  const submitHandle = () => {
    if (!login) navigate('/login');
    else if (inputRef.current) {
      inputRef.current.value = '0';
      if (count > 0 && count <= stock) addToCart(setClient, cart, products, id, count);
      setCount(0);
    }
  };
  const addSubHandle = (add: boolean) => {
    if (!inputRef.current) return;

    const value = Number(inputRef.current.value);
    if (add && value <= stock) {
      inputRef.current.value = String(value + 1);
      setCount(value + 1);
    } else if (!add && value > 0) {
      inputRef.current.value = String(value - 1);
      setCount(value - 1);
    }
  };

  return (
    <div className="grid gap-2 lg:grid-cols-[auto_1.5fr_1fr] lg:gap-4">
      {/* Side Image */}
      <div className="flex gap-2 lg:flex-col lg:gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <button
            type="button"
            key={index}
            className="grid w-1/4 place-content-center rounded bg-clr-Secondary lg:h-full lg:w-44"
          >
            <Picture
              src={`products/${id}.png`}
              alt={name}
              className="flex h-[5rem] justify-center bg-clr-Secondary p-2"
              imgClassName="object-contain"
            />
          </button>
        ))}
      </div>
      {/* Main Image */}
      <Picture
        src={`products/${id}.png`}
        alt={name}
        className="row-end-1 flex h-[20rem] justify-center bg-clr-Secondary p-4 lg:row-auto lg:h-full lg:p-12"
        imgClassName="object-contain"
      />
      {/* Informationn */}
      <section className="grid gap-x-8 px-6 py-8 lg:flex-col lg:px-4 lg:py-0">
        <div>
          {/* Name && Price && Description */}
          <div className="flex items-center justify-between">
            <h2 className="mb-2 text-lg font-bold xl:text-2xl">{name}</h2>
            <button
              type="button"
              className="h-8 rounded text-gray-500"
              onClick={({ target }) =>
                addToWishlistHandle(target as HTMLButtonElement, id as number)
              }
            >
              <Wishlist
                className={`relative -z-10 ${wishlist.includes(id as never) ? '-z-10 fill-clr-ButtonRed text-clr-ButtonRed' : 'fill-none'}`}
              />
            </button>
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
            <Star count={parseFloat(rating)} />
            <p>({ratingcount} Reviews)</p>
            <p>{stock > 0 ? `In Stock (${stock})` : `Out of Stock`}</p>
          </div>
          <h3 className="mb-4 font-heading-sans text-24">${price}</h3>
          <p className="mb-2 text-sm leading-normal text-gray-500 lg:leading-normal">{info}</p>
          {/* Quantity && Add to cart */}
          <div className="flex flex-wrap gap-2 py-2 text-sm">
            <div className="grid h-8 grid-cols-[2rem_3rem_2rem] text-white">
              <button
                type="button"
                className="rounded-l bg-clr-ButtonRed text-lg disabled:bg-gray-500"
                disabled={count <= 0}
                onClick={() => addSubHandle(false)}
              >
                -
              </button>
              <input
                ref={inputRef}
                type="number"
                className="w-full border-y border-gray-500 text-center text-black"
                defaultValue={0}
                onBlur={changeQuantityHandle}
              />
              <button
                type="button"
                className="rounded-r bg-clr-ButtonRed text-lg disabled:bg-gray-500"
                disabled={count >= stock}
                onClick={() => addSubHandle(true)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              disabled={count === 0}
              className={`h-8 rounded bg-clr-ButtonRed px-5 text-white disabled:bg-gray-500`}
              onClick={submitHandle}
            >
              Add to cart
            </button>
          </div>
        </div>
        {/* Benefit */}
        <div className="my-10 mr-auto border leading-normal">
          <section className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4 gap-y-2 border-b px-4 py-4">
            <Delivery1 className="row-span-2" />
            <h3>Free Delivery</h3>
            <p className="text-xs">Enter your postal code for Delivery AvailabLinkility</p>
          </section>
          <section className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4 gap-y-2 px-4 py-4">
            <Repeat className="row-span-2" />
            <h3>Return Delivery</h3>
            <p className="text-xs">Free 30 Days Delivery Returns</p>
          </section>
        </div>
      </section>
    </div>
  );
};
const Unavailable = () => (
  <div className="rounded border px-10 py-8 text-center">
    <h2>Product Not Found</h2>
  </div>
);

const Product = () => {
  const { id } = useParams();
  const { products } = useProducts();

  return (
    <div className="layout-p py-6 lg:py-20">
      <div className="mx-auto max-w-screen-2xl">
        {products.some((product) => product.id === Number(id)) ? <Available /> : <Unavailable />}
      </div>
    </div>
  );
};

export default Product;
