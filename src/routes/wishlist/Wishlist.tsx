import { useClient } from '@lib/Context';
import ShowProducts from '@ui/components/ShowProducts';

const Wishlist = () => {
  const {
    client: { wishlist },
  } = useClient();

  return (
    <div className="layout-p py-6 lg:py-20">
      <div className="mx-auto max-w-screen-2xl">
        {wishlist.length > 0 ? (
          // Wishlist is not empty
          <ShowProducts title={['Wishlist']} list={wishlist} openAddToCart={true} />
        ) : (
          // Wishlist is empty
          <div className="rounded border px-10 py-8 text-center">
            <h2>Empty Wishlist</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
