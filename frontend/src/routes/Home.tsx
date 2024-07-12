import Hero from './Hero.tsx';
import ShowProducts from '@ui/components/ShowProducts';
import Categories from './Categories';
import NewArrival from './NewArrival';
import Features from './Features';
import Banner from './Banner';

const flashSale = [0, 1, 2, 8, 14];
const bestSelling = [4, 5, 6, 7, 1];
const exploreProduct = [8, 9, 10, 11, 12, 13, 14, 15];

export default function Content() {
  return (
    <main>
      <Hero />

      <div className="flex flex-col items-center *:w-full *:max-w-screen-2xl">
        {/* Flash Sales */}
        <ShowProducts
          title={["Today's", 'Flash Sales']}
          list={flashSale}
          time={true}
          button={true}
        />

        <Categories />

        {/* This Month Wrapper */}
        <ShowProducts title={['This Month', 'Best Selling Products']} list={bestSelling} />

        <Banner />

        <ShowProducts title={['Our Products', 'Explore Our Products']} list={exploreProduct} />

        <NewArrival />

        <Features />
      </div>
    </main>
  );
}
