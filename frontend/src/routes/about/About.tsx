import Picture from '@ui/components/Picture';

export default function Page() {
  return (
    <div className="layout-p py-4 lg:py-16">
      <div className="mx-auto grid max-w-screen-2xl items-center justify-between gap-x-8 gap-y-8 md:grid-cols-[minmax(auto,525px)_minmax(250px,auto)] md:ps-20">
        <section className="text-cente grid leading-relaxed md:text-left">
          <h1 className="mb-10 font-heading-semibold text-36 lg:text-54">Our Story</h1>
          <p className="mb-6 text-gray-600">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an
            active presense in Bangladesh. Supported by wide range of tailored marketing, data and
            service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
            customers across the region.
          </p>
          <p className="text-gray-600">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
            offers a diverse assotment in categories ranging from consumer.
          </p>
        </section>
        <Picture src="/about_image.jpg" alt="people holding bag" />
      </div>
    </div>
  );
}
