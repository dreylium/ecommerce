import { categories } from '@lib/data';
import { Redbar } from '@ui/assets/Icons';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="border-b px-6 pb-[70px] pt-20">
      <h2 className="flex items-center gap-x-4 font-semibold tracking-[-0.02em] text-clr-ButtonRed">
        <Redbar />
        Categories
      </h2>
      <div className="mt-5 flex items-center justify-between gap-x-[5.35rem]">
        <h3 className="font-heading-semibold text-36 tracking-[0.04em]">Browse By Category</h3>
        <div className="flex gap-x-2">
          <button></button>
          <button></button>
        </div>
      </div>
      {/* Items */}
      <div className="mt-[60px] grid grid-cols-1 justify-center gap-6 overflow-x-scroll min-[325px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
        {categories.map(({ name, url, Icon }, index) => (
          <Link
            to={url}
            key={index}
            className="grid justify-center gap-y-4 rounded border border-[rgba(0,0,0,0.3)] py-[25px] hover:bg-clr-Secondary2 hover:text-white [&>svg]:mx-auto"
          >
            <Icon />
            <p className="mt-1 leading-[1.1]">{name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
