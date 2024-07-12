import { ButtonLeft, ButtonRight, Redbar } from '@ui/assets/Icons';
import Picture from '@ui/components/Picture';

const NewArrival = () => {
  const data = [
    {
      name: 'PlayStation 5',
      description: 'Black and White version of the PS5 coming out on sale.',
      src: 'products/ps5.png',
      className: 'col-span-2 row-span-2 justify-center items-end pt-12',
    },
    {
      name: 'Women’s Collections',
      description: 'Featured woman collections that give you another vibe.',
      src: 'products/women_hat.png',
      className: 'col-span-2 place-items-end',
    },
    {
      name: 'Speakers',
      description: 'Amazon wireless speakers',
      src: 'products/3_speaker.png',
      className: 'justify-center place-items-center max-sm:col-span-2 p-4',
    },
    {
      name: 'Perfume',
      description: 'GUCCI INTENSE OUD EDP',
      src: 'products/perfume.png',
      className: 'justify-center place-items-center max-sm:col-span-2 p-4',
    },
  ];
  return (
    <div className="px-8 py-[70px] max-md:px-0">
      <div className="w-full max-sm:px-4">
        <div>
          {/* Header */}
          <h2 className="flex items-center gap-x-4 font-semibold tracking-[-0.02em] text-clr-ButtonRed">
            <Redbar />
            Featured
          </h2>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <h3 className="mt-3.5 font-heading-semibold text-36 tracking-[0.04em]">New Arrival</h3>
            <div className="%flex !hidden gap-x-2">
              <button>
                <ButtonLeft />
              </button>
              <button>
                <ButtonRight />
              </button>
            </div>
          </div>
        </div>
        {/* Items */}
        <div className="mx-auto mt-[66px] grid grid-rows-2 gap-2 text-white lg:max-w-none lg:grid-cols-4 xl:gap-6">
          {data.map(({ name, description, src, className }, index) => (
            <figure
              key={index}
              className={`${className} group relative grid overflow-hidden bg-black px-6`}
            >
              <Picture src={src} alt={name} className="duration-700 group-hover:scale-105" />
              <figcaption className="absolute bottom-6 left-8 leading-[1.5] lg:bottom-8">
                <h2 className="mb-2 font-heading-semibold tracking-[0.03em] lg:text-2xl">{name}</h2>
                <p className="mb-4 max-w-[30ch] text-xs lg:text-sm">{description}</p>
                <a
                  href="/"
                  className="font-medium text-sm underline underline-offset-[6px] lg:text-base"
                >
                  Shop Now
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
