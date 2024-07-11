import ShowProducts from '@ui/components/ShowProducts';
import { useParams } from 'react-router-dom';
import { categoryName } from '@lib/data';
import { useProducts } from '@lib/Context';

const Category = () => {
  const { ids } = useParams();
  const { products } = useProducts();
  const list = products.filter(({ category }) => category === ids).map(({ id }) => id);
  const title = categoryName[ids as keyof typeof categoryName];

  return (
    <div className="layout-p">
      <div className="mx-auto max-w-screen-2xl">
        <ShowProducts title={['Category', title]} list={list} />
      </div>
    </div>
  );
};

export default Category;
