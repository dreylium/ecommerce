import { Delivery, Cs, MoneyBack } from '@ui/assets/Icons';

const Features = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 py-10 lg:gap-20 lg:py-32">
      <section className="flex shrink-0 flex-col items-center text-center">
        <Delivery />
        <h2 className="mt-7 font-semibold text-xl">FREE AND FAST DELIVERY</h2>
        <p className="mt-3.5 text-sm">Free delivery for all orders over $140</p>
      </section>
      <section className="flex flex-col items-center text-center">
        <Cs />
        <h2 className="mt-7 font-semibold text-xl">24/7 CUSTOMER SERVICE</h2>
        <p className="mt-3.5 text-sm">Friendly 24/7 customer support</p>
      </section>
      <section className="flex flex-col items-center text-center">
        <MoneyBack />
        <h2 className="mt-7 font-semibold text-xl">MONEY BACK GUARANTEE</h2>
        <p className="mt-3.5 text-sm">We return money within 30 days</p>
      </section>
    </div>
  );
};

export default Features;
