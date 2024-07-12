import { useEffect, useState, useRef, useMemo } from 'react';
import { useClient, useUI } from '@lib/Context';
import { Wishlist, Cart, Search, ButtonLeft, Account } from '@ui/assets/Icons';
import { Link } from 'react-router-dom';
import ShowCart from '@ui/components/ShowCart.tsx';
import ShowAccount from '@ui/components/ShowAccount';
import ShowSearch from './ShowSearch';
import { useLocation } from 'react-router-dom';

const SideHeader: React.FC<{ use: boolean }> = ({ use }) => {
  const { setUI } = useUI();
  const {
    client: { cart, login, wishlist },
  } = useClient();
  const [openMobileSearch, setOpenMobileSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const btnCartRef = useRef<HTMLButtonElement>(null);
  const btnAccountRef = useRef<HTMLButtonElement>(null);
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const mobileInputSearchRef = useRef<HTMLInputElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const currentCart = useMemo(() => cart, [cart]);
  const pathname = useLocation();

  const handleClick = (event: MouseEvent) => {
    const onBtnCart = btnCartRef.current?.contains(event.target as Node);
    const onBtnAccount = btnAccountRef.current?.contains(event.target as Node);
    const onInputSearch = inputSearchRef.current?.contains(event.target as Node);
    const onMobileInputSearch = mobileInputSearchRef.current?.contains(event.target as Node);
    const onObject = !(
      cartRef.current?.contains(event.target as Node) ||
      accountRef.current?.contains(event.target as Node) ||
      searchRef.current?.contains(event.target as Node) ||
      mobileInputSearchRef.current?.contains(event.target as Node)
    );
    if (onBtnCart)
      setUI(({ openCart }) => ({ openCart: !openCart, openAccount: false, openSearch: false }));
    else if (onBtnAccount)
      setUI(({ openAccount }) => ({
        openCart: false,
        openAccount: !openAccount,
        openSearch: false,
      }));
    else if (onInputSearch || onMobileInputSearch)
      setUI({ openCart: false, openAccount: false, openSearch: true });
    else if (!onBtnCart && !onBtnAccount && !onInputSearch && onObject)
      setUI({ openCart: false, openAccount: false, openSearch: false });
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  useEffect(() => {
    setUI({ openCart: false, openAccount: false, openSearch: false });
  }, [pathname]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    use && (
      <>
        <div className="ml-auto flex h-20 items-center gap-x-2 lg:gap-x-4">
          <form method="get" action="/search" onSubmit={(e) => e.preventDefault()}>
            {/* Desktop Search */}
            <div className="hidden rounded bg-clr-Secondary py-2 ps-4 lg:flex">
              <input
                type="text"
                ref={inputSearchRef}
                className={`bg-transparent text-xs`}
                placeholder="What are you looking for?"
                onChange={handleSearchChange}
                value={search}
              />
              <button type="submit" className="px-2" aria-label="submit">
                <Search />
              </button>
            </div>
            {/* Mobile Search */}
            <div
              className={`lg:hidden ${openMobileSearch ? 'w-full' : 'w-[0%]'} absolute inset-0 z-10 mx-auto flex gap-x-2 overflow-hidden bg-white duration-200`}
            >
              <button
                type="button"
                aria-label="close search"
                onClick={() => setOpenMobileSearch(!openMobileSearch)}
                className="px-2"
              >
                <ButtonLeft width={35} height={35} />
              </button>
              <input
                type="text"
                ref={mobileInputSearchRef}
                className={`bg-transparent text-xs lg:bg-red-200`}
                placeholder="What are you looking for?"
                onChange={handleSearchChange}
                value={search}
              />
              <button type="submit" className="px-2" aria-label="submit">
                <Search />
              </button>
            </div>
          </form>
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setOpenMobileSearch(!openMobileSearch)}
          >
            <Search />
          </button>
          {login && (
            <>
              <div className="relative flex gap-2">
                {/* Wishlist */}
                <Link to="/wishlist" className="relative max-[310px]:hidden">
                  {wishlist.length > 0 && (
                    <span className="absolute -right-1 -top-1 grid size-4 place-content-center rounded-full bg-clr-Secondary2 text-xs text-white">
                      {wishlist.length}
                    </span>
                  )}
                  <Wishlist />
                </Link>
                {/* Cart */}
                <button
                  type="button"
                  aria-label="Cart"
                  className="relative max-[310px]:hidden"
                  ref={btnCartRef}
                >
                  {currentCart.length > 0 && (
                    <span className="absolute -right-1 -top-1 grid size-4 place-content-center rounded-full bg-clr-Secondary2 text-xs text-white">
                      {currentCart.length}
                    </span>
                  )}
                  <Cart />
                </button>
                {/* Account */}
                <button type="button" className="relative" ref={btnAccountRef}>
                  <Account />
                </button>
              </div>
            </>
          )}
        </div>
        <ShowCart currentRef={cartRef} />
        <ShowAccount currentRef={accountRef} />
        <ShowSearch currentRef={searchRef} search={search} />
      </>
    )
  );
};

export default SideHeader;
