import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAuth, fetchProducts } from '@lib/fetch';
import { ContextProducts, ContextClient, ContextUI } from '@lib/Context';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import TopBanner from '@ui/components/TopBanner.js';
import PopUpAddToCart from '@ui/components/PopUpAddToCart';
import Loading from '@ui/components/Loading';

const Layout: React.FC<{ rightHeader?: boolean }> = ({ rightHeader = true }) => {
  const [client, setClient] = useState<Client>({
    login: false,
    username: '',
    email: '',
    cart: [],
    wishlist: [],
    lastItem: {
      id: 0,
      what: '',
    },
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [ui, setUI] = useState<UI>({
    openAccount: false,
    openCart: false,
    openSearch: false,
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const okProducts = await fetchProducts(setProducts);
      const okClient = await fetchAuth(setClient);
      if (okProducts && okClient) setLoading(true);
    })();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ContextClient.Provider value={{ client, setClient }}>
      <ContextProducts.Provider value={{ products, setProducts }}>
        <ContextUI.Provider value={{ ui, setUI }}>
          <TopBanner />
          <PopUpAddToCart />
          <Loading loading={loading} />
          <div className="flex min-h-screen min-w-60 flex-col">
            <Header rightHeader={rightHeader} />
            <Outlet />
            <Footer />
          </div>
        </ContextUI.Provider>
      </ContextProducts.Provider>
    </ContextClient.Provider>
  );
};
export default Layout;
