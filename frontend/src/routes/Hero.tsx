import { ButtonRight } from '@ui/assets/Icons';
import Picture from '@ui/components/Picture';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { categoryName } from '@lib/data';
import { useProducts } from '@lib/Context';

const Hero = () => {
  const [category, setCategory] = useState<Record<string, Category>>({});
  const { products } = useProducts();

  useEffect(() => {
    const obj: Category | Record<string, Category> = {};

    Object.keys(categoryName).forEach((item) => {
      obj[item] = {
        title: categoryName[item as keyof typeof categoryName],
        items: [],
      };
    });
    products.forEach((item) => obj[item.category].items.push(item.id));
    setCategory(obj);
  }, [products]);

  return (
    <div className="layout-p max-sm:p-0">
      <div className="mx-auto grid max-w-screen-2xl xl:grid-cols-[1fr_2.5fr]">
        {/* Wrapper */}
        <div className="border-[rgb(0,0,0,0.3)] lg:pt-10 xl:order-2 xl:border-l xl:ps-[44px]">
          <div className="relative mx-auto grid h-full max-w-screen-lg items-center justify-center bg-black sm:grid-cols-[auto_1fr] xl:justify-between">
            <section className="flex flex-col gap-y-[1.2rem] p-8 text-white xl:ps-[64px] xl:pt-[58px]">
              <div className="flex items-center gap-x-6">
                <Picture src="/logo_apple.png" alt="apple logo" />
                <h2 className="mt-0.5">iPhone 14 Series</h2>
              </div>
              <h3 className="font-heading-semibold text-4xl leading-tight tracking-[.04em] md:text-48">
                Up to 10%
                <br />
                off Voucher
              </h3>
              <a href="/" className="!hidden items-center gap-x-2 font-medium text-lg underline">
                Shop Now
                <ButtonRight width={24} height={24} />
              </a>
            </section>
            <div className="m-auto pt-4">
              <Picture src="/hero_phone.png" alt="iphone 14 series" />
            </div>
            {/* Owl */}
            {/* <div className="absolute bottom-2.5 flex w-full items-center justify-center gap-x-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <button type="button" key={index}>
                  <Owl current={index === 2} />
                </button>
              ))}
            < /div> */}
          </div>
        </div>
        <div className="grid min-w-[217px] gap-4 px-4 py-10 text-center text-sm leading-6 min-[300px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:text-base xl:grid-cols-1 xl:gap-0 xl:text-left">
          {Object.entries(category).map(([key, value]) => (
            <Link
              key={key}
              to={`/category/${key}`}
              className="border-b border-gray-400 px-1 py-2 hover:bg-clr-Secondary2 hover:text-white md:px-5 xl:border-none"
            >
              {value.title}
              {value.items.length > 0 ? ` (${value.items.length})` : ''}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;
