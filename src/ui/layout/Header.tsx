import { useState } from 'react';
import { useClient } from '@lib/Context';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, Close } from '@ui/assets/Icons';
import SideHeader from '@ui/components/SideHeader';

const Header: React.FC<{ rightHeader?: boolean }> = ({ rightHeader = false }) => {
  const {
    client: { login },
  } = useClient();
  const [openNav, setOpenNav] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="layout-p layout-p sticky top-0 z-40 w-full bg-white shadow-[0_1px_5px_rgba(0,0,0,.3)]">
      <div className="relative z-10 mx-auto max-w-screen-2xl bg-white">
        <div className="flex items-center bg-white py-4 lg:pt-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button
              aria-label="open menu"
              className="md:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              <Menu />
            </button>
            <Link to="/">
              <h1 className="py-[7px] font-heading-bold text-xl tracking-[0.03em] lg:text-2xl">
                Exclusive
              </h1>
            </Link>
          </div>
          {/* Navigation */}
          <nav
            className={`${openNav && 'translate-x-full md:translate-x-0'} fixed inset-y-0 right-full bg-white transition-transform duration-300 md:static md:inset-auto md:ms-8 md:translate-x-0 lg:ms-20 2xl:ms-40`}
          >
            <button
              className="m-5 ml-auto block size-10 rounded-full text-3xl md:hidden"
              aria-label="close button"
              onClick={() => setOpenNav(false)}
            >
              <Close />
            </button>
            <ul className="flex flex-col text-center md:flex-row md:text-left">
              {Object.entries({
                Home: '/',
                Contact: '/contact',
                About: '/about',
              }).map(([key, value]) => (
                <li key={key}>
                  <Link
                    to={value}
                    className={`block px-16 py-4 hover:text-clr-ButtonRed md:p-6 ${pathname === value && 'text-clr-Secondary2 underline'}`}
                    onClick={() => setOpenNav(false)}
                  >
                    {key}
                  </Link>
                </li>
              ))}
              {!login && (
                <li>
                  <Link
                    to="/login"
                    className={`block px-16 py-4 hover:text-clr-ButtonRed md:p-6 ${pathname === '/login' && 'text-clr-Secondary2 underline'}`}
                    onClick={() => setOpenNav(false)}
                  >
                    Login
                  </Link>
                </li>
              )}
              <div className="min-[310px]:hidden">
                <li>
                  <Link
                    to="/cart"
                    className={`block px-16 py-4 hover:text-clr-ButtonRed md:p-6 ${pathname === '/cart' && 'text-clr-Secondary2 underline'}`}
                    onClick={() => setOpenNav(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    className={`block px-16 py-4 hover:text-clr-ButtonRed md:p-6 ${pathname === '/wishlist' && 'text-clr-Secondary2 underline'}`}
                    onClick={() => setOpenNav(false)}
                  >
                    Wishlist
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          {/* Side */}
          <SideHeader use={rightHeader} />
          {!login && (
            <Link
              to={'/login'}
              className={`ml-auto block px-2 py-4 hover:text-clr-ButtonRed md:hidden ${pathname === '/login' && 'text-clr-Secondary2 underline'}`}
              onClick={() => setOpenNav(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
